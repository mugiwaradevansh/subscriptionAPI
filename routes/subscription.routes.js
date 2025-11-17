import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
  cancelSubscription,
  getUpcomingRenewals,
  getSubscriptionSummary,
  getUserSubscriptions,
} from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.use(authorize);

subscriptionRouter.get("/summary", getSubscriptionSummary);
subscriptionRouter.get("/upcoming-renewals", getUpcomingRenewals);
subscriptionRouter.get("/user/:id", getUserSubscriptions);

subscriptionRouter
  .route("/")
  .get(getSubscriptions)
  .post(createSubscription);

subscriptionRouter
  .route("/:id")
  .get(getSubscriptionById)
  .put(updateSubscription)
  .delete(deleteSubscription);

subscriptionRouter.put("/:id/cancel", cancelSubscription);

export default subscriptionRouter;
