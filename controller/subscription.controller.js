import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

const VALID_PRIORITIES = ["low", "medium", "high"];

const normalizeSubscriptionPayload = (payload = {}) => {
  const sanitized = {};

  if (typeof payload.name === "string" && payload.name.trim()) {
    sanitized.name = payload.name.trim();
  }

  if (payload.price !== undefined && payload.price !== null) {
    const numericPrice = Number(payload.price);
    if (!Number.isNaN(numericPrice)) {
      sanitized.price = Number(numericPrice.toFixed(2));
    }
  }

  if (payload.currency) {
    sanitized.currency = payload.currency.toString().toUpperCase();
  }

  if (payload.frequency) {
    sanitized.frequency = payload.frequency.toString().toLowerCase();
  }

  if (payload.category) {
    sanitized.category = payload.category.toString().toLowerCase();
  }

  if (payload.paymentMethod) {
    sanitized.paymentMethod = payload.paymentMethod.toString().trim();
  }

  if (payload.priority) {
    const priority = payload.priority.toString().toLowerCase();
    if (VALID_PRIORITIES.includes(priority)) {
      sanitized.priority = priority;
    }
  }

  if (payload.status) {
    sanitized.status = payload.status.toString().toLowerCase();
  }

  if (payload.startDate) {
    const startDate = new Date(payload.startDate);
    if (!Number.isNaN(startDate.getTime())) {
      sanitized.startDate = startDate;
    }
  }

  if (payload.renewalDate) {
    const renewalDate = new Date(payload.renewalDate);
    if (!Number.isNaN(renewalDate.getTime())) {
      sanitized.renewalDate = renewalDate;
    }
  }

  if (typeof payload.notes === "string") {
    sanitized.notes = payload.notes.trim();
  }

  return sanitized;
};

const convertToMonthly = (price, frequency) => {
  const numericPrice = Number(price);
  if (!numericPrice || Number.isNaN(numericPrice)) return 0;
  const map = {
    daily: numericPrice * 30,
    weekly: numericPrice * 4,
    monthly: numericPrice,
    quarterly: numericPrice / 3,
    yearly: numericPrice / 12,
  };

  return map[frequency] ?? numericPrice;
};

const ensureSubscription = (subscription) => {
  if (!subscription) {
    const error = new Error("Subscription not found");
    error.statusCode = 404;
    throw error;
  }

  return subscription;
};

export const createSubscription = async (req, res, next) => {
  try {
    const payload = normalizeSubscriptionPayload(req.body);
    const requiredFields = [
      "name",
      "price",
      "currency",
      "frequency",
      "category",
      "paymentMethod",
      "startDate",
    ];

    payload.currency = payload.currency || "USD";
    payload.frequency = payload.frequency || "monthly";
    payload.paymentMethod = payload.paymentMethod || "card";
    payload.category = payload.category || "other";
    payload.priority = payload.priority || "medium";

    const missing = requiredFields.filter((field) => {
      const value = payload[field];
      return value === undefined || value === null || value === "";
    });

    if (missing.length) {
      const error = new Error(
        `Missing required subscription fields: ${missing.join(", ")}`
      );
      error.statusCode = 400;
      throw error;
    }

    const subscription = await Subscription.create({
      ...payload,
      user: req.user._id,
    });

    let workflowRunId = null;
    if (subscription.renewalDate) {
      try {
        const response = await workflowClient.trigger({
          url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
          body: {
            subscriptionId: subscription.id,
          },
          headers: {
            "content-type": "application/json",
          },
          retries: 0,
        });

        workflowRunId = response?.workflowRunId ?? null;
      } catch (workflowError) {
        console.warn("Unable to schedule reminder workflow", workflowError);
      }
    }

    res
      .status(201)
      .json({ success: true, data: { subscription, workflowRunId } });
  } catch (e) {
    next(e);
  }
};

export const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user._id })
      .sort({
        renewalDate: 1,
        createdAt: -1,
      })
      .lean();

    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    ensureSubscription(subscription);

    res.status(200).json({ success: true, data: subscription });
  } catch (e) {
    next(e);
  }
};

export const updateSubscription = async (req, res, next) => {
  try {
    const payload = normalizeSubscriptionPayload(req.body);

    const subscription = await Subscription.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      payload,
      {
        new: true,
        runValidators: true,
        context: "query",
      }
    );

    ensureSubscription(subscription);

    res.status(200).json({ success: true, data: subscription });
  } catch (e) {
    next(e);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    ensureSubscription(subscription);

    res.status(200).json({ success: true, message: "Subscription deleted" });
  } catch (e) {
    next(e);
  }
};

export const cancelSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { status: "cancelled" },
      { new: true }
    );

    ensureSubscription(subscription);

    res.status(200).json({
      success: true,
      message: "Subscription cancelled",
      data: subscription,
    });
  } catch (e) {
    next(e);
  }
};

export const getUpcomingRenewals = async (req, res, next) => {
  try {
    const days = Number(req.query.days) || 30;
    const now = new Date();
    const future = new Date();
    future.setDate(now.getDate() + days);

    const subscriptions = await Subscription.find({
      user: req.user._id,
      renewalDate: { $gte: now, $lte: future },
      status: { $ne: "cancelled" },
    }).sort({ renewalDate: 1 });

    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};

export const getSubscriptionSummary = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find({
      user: req.user._id,
    }).lean();
    const now = new Date();
    const twoWeeks = new Date();
    twoWeeks.setDate(now.getDate() + 14);

    const activeSubscriptions = subscriptions.filter(
      (sub) => sub.status === "active"
    );

    const monthlySpend = activeSubscriptions.reduce(
      (acc, sub) => acc + convertToMonthly(sub.price, sub.frequency),
      0
    );

    const priorityOrder = { high: 0, medium: 1, low: 2 };

    const summary = {
      totalSubscriptions: subscriptions.length,
      activeSubscriptions: activeSubscriptions.length,
      monthlySpend: Number(monthlySpend.toFixed(2)),
      upcomingRenewals: activeSubscriptions
        .filter(
          (sub) =>
            sub.renewalDate &&
            sub.renewalDate >= now &&
            sub.renewalDate <= twoWeeks
        )
        .sort((a, b) => {
          const priorityDiff =
            (priorityOrder[a.priority] ?? 99) -
            (priorityOrder[b.priority] ?? 99);
          if (priorityDiff !== 0) return priorityDiff;
          return a.renewalDate - b.renewalDate;
        }),
    };

    res.status(200).json({ success: true, data: summary });
  } catch (e) {
    next(e);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.statusCode = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({
      user: req.params.id,
    }).lean();

    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};
