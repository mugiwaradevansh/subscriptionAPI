import React, { useEffect, useState } from "react";
import api from "../api";

export default function Profile() {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  });
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchProfile() {
      setLoading(true);
      try {
        const res = await api.get("/auth/me");
        if (!ignore) {
          setUser(res.data?.data ?? null);
          localStorage.setItem("user", JSON.stringify(res.data?.data));
        }
      } catch (err) {
        if (!ignore) setError(err.message || "Unable to load profile");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchProfile();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading profile...</p>;
  }

  if (!user) {
    return (
      <div className="text-gray-500">
        No profile available. Sign in to see profile.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {error && (
        <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
          {error}
        </div>
      )}
      <div className="card">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-matte-sky to-navy-dark flex items-center justify-center text-white text-2xl font-semibold">
            {user.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="card space-y-4">
        <h3 className="font-semibold text-lg">Workspace preferences</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Notifications
            </p>
            <p className="text-sm text-gray-700">
              Renewal alerts + weekly report
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Account created
            </p>
            <p className="text-sm text-gray-700">
              {new Date(user.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
