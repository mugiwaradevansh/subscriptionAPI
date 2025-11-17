import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const INITIAL_FORM = {
  name: "",
  price: "",
  currency: "USD",
  frequency: "monthly",
  category: "productivity",
  paymentMethod: "Card",
  startDate: new Date().toISOString().split("T")[0],
  renewalDate: "",
  notes: "",
  priority: "medium",
};

const frequencies = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "yearly", label: "Yearly" },
];

const categories = [
  "productivity",
  "entertainment",
  "technology",
  "finance",
  "news",
  "lifestyle",
  "gaming",
  "education",
  "health",
  "sports",
  "other",
];

const currencies = ["USD", "EUR", "GBP", "INR", "CAD", "AUD"];

const PRIORITY_OPTIONS = [
  { value: "low", label: "Low", className: "priority-low" },
  { value: "medium", label: "Medium", className: "priority-medium" },
  { value: "high", label: "High", className: "priority-high" },
];

export default function SubscriptionForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const monthlyPreview = useMemo(() => {
    const price = Number(form.price);
    if (!price) return "$0.00";
    const map = {
      daily: price * 30,
      weekly: price * 4,
      monthly: price,
      quarterly: price / 3,
      yearly: price / 12,
    };
    const normalized = map[form.frequency] ?? price;
    return `${form.currency} ${normalized.toFixed(2)}`;
  }, [form.price, form.frequency, form.currency]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    setServerError(null);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.price || Number(form.price) <= 0) {
      nextErrors.price = "Enter a valid price";
    }
    if (!form.startDate) nextErrors.startDate = "Start date is required";
    if (form.renewalDate && form.renewalDate <= form.startDate) {
      nextErrors.renewalDate = "Renewal must be after the start date";
    }
    return nextErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post("/subscription", {
        name: form.name.trim(),
        price: parseFloat(form.price),
        currency: form.currency,
        frequency: form.frequency,
        category: form.category,
        paymentMethod: form.paymentMethod,
        startDate: form.startDate,
        renewalDate: form.renewalDate || undefined,
        notes: form.notes.trim(),
        priority: form.priority,
      });
      navigate("/subscriptions");
    } catch (err) {
      setServerError(err.message || "Could not create subscription");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Intake form
        </p>
        <h1 className="text-3xl font-semibold text-navy-dark">
          Add subscription
        </h1>
      </div>
      <div className="card">
        {serverError && (
          <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4">
            {serverError}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service name
              </label>
              <input
                className="input-field"
                placeholder="Netflix Premium"
                name="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  className="input-field input-field-large w-full sm:w-40"
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
                <input
                  className="input-field input-field-large flex-1"
                  placeholder="19.99"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.price)}
                />
              </div>
              {errors.price && (
                <p className="text-xs text-red-600 mt-1">{errors.price}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <div className="flex flex-wrap gap-3">
              {PRIORITY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`priority-pill ${option.className} ${
                    form.priority === option.value ? "active" : ""
                  }`}
                  onClick={() =>
                    setForm((prev) => ({ ...prev, priority: option.value }))
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency
              </label>
              <select
                className="input-field"
                name="frequency"
                value={form.frequency}
                onChange={handleChange}
              >
                {frequencies.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="input-field capitalize"
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment method
              </label>
              <input
                className="input-field"
                placeholder="Corporate Amex"
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start date
              </label>
              <input
                className="input-field"
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                aria-invalid={Boolean(errors.startDate)}
              />
              {errors.startDate && (
                <p className="text-xs text-red-600 mt-1">{errors.startDate}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Renewal date (optional)
              </label>
              <input
                className="input-field"
                type="date"
                name="renewalDate"
                value={form.renewalDate}
                onChange={handleChange}
                aria-invalid={Boolean(errors.renewalDate)}
              />
              {errors.renewalDate && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.renewalDate}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              className="input-field h-24"
              placeholder="Who owns this contract? What success metric matters?"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              maxLength={280}
            />
            <p className="text-xs text-gray-500 text-right">
              {form.notes.length}/280
            </p>
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-600">
              Normalized monthly impact:{" "}
              <span className="font-semibold text-navy-dark">
                {monthlyPreview}
              </span>
            </p>
            <button
              type="submit"
              className="btn-primary w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save subscription"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
