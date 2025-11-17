import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import api from "../api";

const summarySkeleton = {
  totalSubscriptions: 0,
  activeSubscriptions: 0,
  monthlySpend: 0,
  upcomingRenewals: [],
};

export default function Dashboard() {
  const [summary, setSummary] = useState(summarySkeleton);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      try {
        const [summaryRes, upcomingRes] = await Promise.all([
          api.get("/subscription/summary"),
          api.get("/subscription/upcoming-renewals?days=30"),
        ]);

        if (!ignore) {
          setSummary(summaryRes.data?.data ?? summarySkeleton);
          setUpcoming(upcomingRes.data?.data ?? []);
        }
      } catch (err) {
        if (!ignore) setError(err.message || "Unable to load dashboard");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  const statBlocks = useMemo(() => {
    const monthlySpendValue = Number(summary.monthlySpend || 0);
    return [
      {
        label: "Active services",
        value: summary.activeSubscriptions ?? 0,
        helper: `${summary.totalSubscriptions ?? 0} total tracked`,
      },
      {
        label: "Monthly burn",
        value: `$${monthlySpendValue.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}`,
        helper: "Normalized across billing cycles",
      },
      {
        label: "Upcoming renewals",
        value: summary.upcomingRenewals?.length ?? 0,
        helper: "Next 14 days",
      },
    ];
  }, [summary]);

  const priorityRank = { high: 0, medium: 1, low: 2 };
  const sortedUpcoming = useMemo(() => {
    return [...upcoming].sort((a, b) => {
      const rankA = priorityRank[a.priority || "medium"] ?? 1;
      const rankB = priorityRank[b.priority || "medium"] ?? 1;
      if (rankA !== rankB) return rankA - rankB;
      return new Date(a.renewalDate || a.createdAt) -
        new Date(b.renewalDate || b.createdAt);
    });
  }, [upcoming]);

  const getDaysLeftMeta = (subscription) => {
    if (!subscription.renewalDate) {
      return { label: "No date", className: "days-pill", diff: undefined };
    }
    const diff = dayjs(subscription.renewalDate).diff(dayjs(), "day");
    if (diff < 0) {
      return { label: "Past due", className: "days-pill days-pill-overdue", diff };
    }
    if (diff === 0) {
      return {
        label: "Renews today",
        className: "days-pill days-pill-warning",
        diff,
      };
    }
    if (diff <= 7) {
      return {
        label: `${diff} days`,
        className: "days-pill days-pill-warning",
        diff,
      };
    }
    return { label: `${diff} days`, className: "days-pill", diff };
  };

  const actionMetrics = useMemo(() => {
    const counts = { highRisk: 0, dueSoon: 0, overdue: 0 };
    sortedUpcoming.forEach((sub) => {
      if ((sub.priority || "medium") === "high") counts.highRisk += 1;
      const meta = getDaysLeftMeta(sub);
      if (meta.diff !== undefined) {
        if (meta.diff < 0) counts.overdue += 1;
        if (meta.diff >= 0 && meta.diff <= 7) counts.dueSoon += 1;
      }
    });
    return counts;
  }, [sortedUpcoming]);

  const mentionItems = sortedUpcoming.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Command Center
          </p>
          <h1 className="text-3xl font-semibold text-navy-dark">
            Your subscription runway
          </h1>
        </div>
        <Link to="/subscriptions/new" className="btn-primary w-full md:w-auto">
          + Add subscription
        </Link>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 rounded-lg p-4">
          {error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {statBlocks.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              {stat.label}
            </p>
            <p className="text-3xl font-semibold text-navy-dark">
              {loading ? "—" : stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.helper}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Renewal radar</h2>
            <span className="pill">Next 30 days</span>
          </div>
          {loading && <p className="text-sm text-gray-500">Loading...</p>}
          {!loading && sortedUpcoming.length === 0 && (
            <p className="text-sm text-gray-500">
              No renewals in the next month. Enjoy the calm.
            </p>
          )}
          <div className="space-y-3">
            {sortedUpcoming.map((sub) => {
              const daysMeta = getDaysLeftMeta(sub);
              return (
              <div
                key={sub._id}
                className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between rounded-xl border border-gray-100 px-4 py-3 bg-white/70"
              >
                <div>
                  <p className="font-medium text-navy-dark capitalize">
                    {sub.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span className="uppercase tracking-wide">
                      {sub.category}
                    </span>
                    <span className={priorityClass(sub.priority)}>
                      {(sub.priority || "medium").toUpperCase()}
                    </span>
                    <span className={daysMeta.className}>{daysMeta.label}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-navy-dark">
                    {sub.currency} {Number(sub.price).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(sub.renewalDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
        <div className="card space-y-4">
          <h3 className="font-semibold text-lg">Next actions</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center justify-between gap-3">
              <span>Review upcoming renewals and tag risky ones</span>
              <span className="nav-button text-xs">
                {actionMetrics.highRisk} high priority
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span>Shift annual contracts to corporate cards</span>
              <span className="nav-button text-xs">
                {actionMetrics.dueSoon} due this month
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span>Invite finance to co-own the renewal queue</span>
              <span className="nav-button text-xs">
                {actionMetrics.overdue} overdue
              </span>
            </li>
          </ul>
          {mentionItems.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Spotlight
              </p>
              <div className="flex flex-col gap-2">
                {mentionItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 bg-white/80 text-sm"
                  >
                    <span className="font-medium text-navy-dark">
                      {item.name}
                    </span>
                    <span className={priorityClass(item.priority)}>
                      {(item.priority || "medium").toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="pt-1">
            <Link to="/subscriptions" className="btn-primary w-full text-center block">
              View all subscriptions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function priorityClass(priority = "medium") {
  const map = {
    high: "priority-pill priority-high",
    medium: "priority-pill priority-medium",
    low: "priority-pill priority-low",
  };
  return map[priority] || map.medium;
}
