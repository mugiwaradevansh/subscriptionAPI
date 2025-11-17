import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

const INITIAL_FORM = {
  name: "",
  email: "",
  password: "",
};

export default function Register() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required";
    }

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
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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
      const res = await api.post("/auth/sign-up", form);
      const token = res.data?.data?.token;
      const user = res.data?.data?.user;
      if (token) localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));
      navigate("/", { replace: true });
    } catch (err) {
      setServerError(err.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 bg-app">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4 order-2 md:order-1">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Build a smarter subscription playbook
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-navy-dark">
            Launch your Subscription HQ workspace in under a minute.
          </h1>
          <div className="grid gap-3 text-sm text-gray-700">
            <div className="pill w-max">Early Access</div>
            <p>Invite teammates, centralize billing, and end renewal chaos.</p>
            <p>
              Zero-config email alerts, AI insights, and live workflows included
              in this MVP build.
            </p>
          </div>
        </div>
        <div className="card order-1 md:order-2 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Create account</h2>
              <p className="text-sm text-gray-500">
                Join teams already tracking millions in recurring spend.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase text-matte-sky">
              Secure by design
            </span>
          </div>
          {serverError && (
            <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-4">
              {serverError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                className="input-field"
                placeholder="Alex Rivera"
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
                Work email
              </label>
              <input
                className="input-field"
                placeholder="you@studio.com"
                name="email"
                type="email"
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
                placeholder="Min. 6 characters"
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
              {isSubmitting ? "Creating workspace..." : "Create account"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Already onboard?{" "}
            <Link to="/login" className="text-navy-dark font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
