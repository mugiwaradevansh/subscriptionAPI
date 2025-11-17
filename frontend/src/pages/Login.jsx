import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

const INITIAL_FORM = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors = {};
    if (!form.email) {
      nextErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      nextErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setErrors((prev) => ({ ...prev, [event.target.name]: null }));
    setServerError(null);
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
      const res = await api.post("/auth/sign-in", form);
      const token = res.data?.data?.token;
      const user = res.data?.data?.user;
      if (token) localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));
      navigate("/", { replace: true });
    } catch (err) {
      setServerError(err.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 bg-app">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Subscription Mission Control
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-navy-dark">
            Log in and get a pulse on every recurring cost in seconds.
          </h1>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Smart renewal radar keeps you ahead of auto-charges</li>
            <li>• Beautiful reports ready for your next leadership review</li>
            <li>• Secure by design, backed by enterprise-grade guardrails</li>
          </ul>
        </div>
        <div className="card shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Welcome back</h2>
              <p className="text-sm text-gray-500">
                Sign in with your workspace credentials.
              </p>
            </div>
            <span className="pill">MVP Access</span>
          </div>
          {serverError && (
            <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4">
              {serverError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                className="input-field"
                name="email"
                type="email"
                placeholder="you@studio.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                name="password"
                value={form.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
              />
              {errors.password && (
                <p className="text-xs text-red-600 mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing you in..." : "Sign in"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Need credentials?{" "}
            <Link to="/register" className="text-navy-dark font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
