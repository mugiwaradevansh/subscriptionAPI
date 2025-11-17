import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onLogout, user }) {
  const location = useLocation();
  const initials =
    user?.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "ST";

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="header-brand flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-matte-sky to-navy-dark flex items-center justify-center text-white font-semibold shadow">
            {initials}
          </div>
          <div>
            <span className="text-sm uppercase tracking-wide text-gray-500 block">
              Nimbus
            </span>
            <span className="font-semibold text-lg text-navy-dark">
              Subscription HQ
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-gray-700">
          <Link
            to="/subscriptions"
            className={`nav-button ${isActive("/subscriptions") ? "nav-button-active" : ""}`}
          >
            Subscriptions
          </Link>
          <Link
            to="/profile"
            className={`nav-button hidden sm:inline-flex ${
              isActive("/profile") ? "nav-button-active" : ""
            }`}
          >
            Profile
          </Link>
          {user && (
            <div className="hidden lg:flex flex-col text-right pr-1">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Logged in as
              </span>
              <span className="text-sm font-medium text-navy-dark">
                {user.name}
              </span>
            </div>
          )}
          <button onClick={onLogout} className="btn-primary">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
