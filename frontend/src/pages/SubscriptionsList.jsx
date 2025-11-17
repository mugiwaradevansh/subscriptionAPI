import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import api from "../api";

export default function SubscriptionsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    query: "",
    status: "all",
    priority: "all",
    window: "all",
  });
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api
      .get("/subscription")
      .then((res) => {
        const data = res.data?.data ?? res.data;
        if (mounted) setItems(Array.isArray(data) ? data : data || []);
      })
      .catch((err) => mounted && setError(err.message || "Unable to load data"))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    const priorityRank = { high: 0, medium: 1, low: 2 };
    const now = dayjs();

    return items
      .filter((sub) => {
        const matchesStatus =
          filters.status === "all" ||
          sub.status?.toLowerCase() === filters.status;
        const matchesPriority =
          filters.priority === "all" ||
          (sub.priority || "medium") === filters.priority;

        const matchesQuery =
          !filters.query ||
          sub.name?.toLowerCase().includes(filters.query.toLowerCase()) ||
          sub.category?.toLowerCase().includes(filters.query.toLowerCase());

        const renewalDate = sub.renewalDate ? dayjs(sub.renewalDate) : null;
        let matchesWindow = true;
        if (filters.window !== "all" && renewalDate) {
          const diff = renewalDate.diff(now, "day");
          if (filters.window === "overdue") {
            matchesWindow = diff < 0;
          } else if (filters.window === "week") {
            matchesWindow = diff >= 0 && diff <= 7;
          } else if (filters.window === "month") {
            matchesWindow = diff >= 0 && diff <= 30;
          }
        }

        return matchesStatus && matchesPriority && matchesQuery && matchesWindow;
      })
      .sort((a, b) => {
        const rankA = priorityRank[a.priority || "medium"] ?? 1;
        const rankB = priorityRank[b.priority || "medium"] ?? 1;
        if (rankA !== rankB) return rankA - rankB;
        const dateA = new Date(a.renewalDate || a.createdAt);
        const dateB = new Date(b.renewalDate || b.createdAt);
        return dateA - dateB;
      });
  }, [items, filters]);
  const getDaysLeftMeta = (subscription) => {
    if (!subscription.renewalDate) {
      return { label: "No renewal date", className: "days-pill" };
    }
    const diff = dayjs(subscription.renewalDate).diff(dayjs(), "day");
    if (diff < 0)
      return { label: "Past due", className: "days-pill days-pill-overdue" };
    if (diff === 0)
      return { label: "Renews today", className: "days-pill days-pill-warning" };
    if (diff <= 7)
      return { label: `${diff} days left`, className: "days-pill days-pill-warning" };
    return { label: `${diff} days left`, className: "days-pill" };
  };

  const priorityClass = (priority) => {
    const map = {
      high: "priority-pill priority-high",
      medium: "priority-pill priority-medium",
      low: "priority-pill priority-low",
    };
    return map[priority || "medium"];
  };


  const handleCancel = async (id) => {
    if (!window.confirm("Pause renewal reminders for this subscription?")) {
      return;
    }
    setProcessingId(id);
    try {
      const res = await api.put(`/subscription/${id}/cancel`);
      setItems((prev) =>
        prev.map((item) => (item._id === id ? res.data?.data ?? item : item))
      );
    } catch (err) {
      alert(err.message || "Unable to cancel subscription");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-navy-dark">
            Subscriptions
          </h1>
          <p className="text-sm text-gray-500">
            {items.length} services under watch
          </p>
        </div>
        <Link to="/subscriptions/new" className="btn-primary w-full md:w-auto">
          + New subscription
        </Link>
      </div>

      <div className="card flex flex-col gap-4 md:flex-row md:items-center md:flex-wrap">
        <input
          className="input-field md:flex-1"
          placeholder="Search by name or category"
          value={filters.query}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, query: e.target.value }))
          }
        />
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:flex-wrap">
          <select
            className="input-field md:w-40"
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="cancelled">Cancelled</option>
            <option value="expired">Expired</option>
          </select>
          <select
            className="input-field md:w-40"
            value={filters.priority}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, priority: e.target.value }))
            }
          >
            <option value="all">All priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select
            className="input-field md:w-48"
            value={filters.window}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, window: e.target.value }))
            }
          >
            <option value="all">Any renewal date</option>
            <option value="week">Due within 7 days</option>
            <option value="month">Due within 30 days</option>
            <option value="overdue">Past due</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
          {error}
        </div>
      )}

      <div className="space-y-3">
        {loading && <div className="text-gray-500">Loading...</div>}
        {!loading && filteredItems.length === 0 && (
          <div className="text-gray-500">
            Nothing to show yet. Start by adding your first subscription.
          </div>
        )}
        {filteredItems.map((s) => {
          const daysMeta = getDaysLeftMeta(s);
          return (
          <div
            key={s._id || s.id}
            className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="font-semibold text-navy-dark capitalize">
                  {s.name}
                </div>
                <span className="pill capitalize">{s.category}</span>
              </div>
              <div className="text-sm text-gray-600">
                {s.frequency} • {s.currency}{" "}
                {Number(s.price || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <div className="flex flex-wrap gap-2 justify-between md:justify-end w-full">
                <span className={priorityClass(s.priority)}>
                  {(s.priority || "medium").toUpperCase()}
                </span>
                <span className={daysMeta.className}>{daysMeta.label}</span>
              </div>
              <div className="text-sm font-medium text-navy-dark">
                Next:{" "}
                {s.renewalDate
                  ? new Date(s.renewalDate).toLocaleDateString()
                  : "Not set"}
              </div>
              {s.status === "active" ? (
                <button
                  className="text-sm text-red-600"
                  disabled={processingId === s._id}
                  onClick={() => handleCancel(s._id)}
                >
                  {processingId === s._id ? "Updating..." : "Cancel renewal"}
                </button>
              ) : (
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {s.status}
                </span>
              )}
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
}
