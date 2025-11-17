import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import api from "../api";

export default function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Failed to parse stored user", error);
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [sessionError, setSessionError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function hydrateSession() {
      try {
        const response = await api.get("/auth/me");
        const profile = response.data?.data;
        if (!ignore && profile) {
          setUser(profile);
          localStorage.setItem("user", JSON.stringify(profile));
        }
      } catch (error) {
        if (error?.response?.status === 401) {
          await logout({ redirect: true, silent: true });
        } else if (!ignore) {
          setSessionError(error.message || "Unable to load session");
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    hydrateSession();

    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout({ redirect = true, silent = false } = {}) {
    try {
      if (!silent) {
        await api.post("/auth/sign-out");
      }
    } catch (error) {
      // ignore sign-out API errors
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      if (redirect) {
        navigate("/login", { replace: true });
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-app">
        <div className="text-center">
          <div className="loader mx-auto mb-3" />
          <p className="text-sm text-gray-600">Warming up your workspace...</p>
        </div>
      </div>
    );
  }

  if (sessionError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-app p-4">
        <div className="card max-w-md text-center space-y-4">
          <h2 className="text-xl font-semibold text-navy-dark">Hold tight</h2>
          <p className="text-sm text-gray-600">{sessionError}</p>
          <button className="btn-primary w-full" onClick={() => logout()}>
            Back to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <Navbar onLogout={logout} user={user} />
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}
