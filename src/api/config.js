// src/api/config.js
// Centralized API Base URL configuration for GrowthNest Tech Solution
export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://gnt-official-website-backend.onrender.com/api");

export const API_FALLBACK_URL = "https://gnt-official-website-backend.onrender.com/api";

// Safely parse JSON from any fetch response without throwing "Unexpected token <"
export const parseJsonResponse = async (res) => {
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `Endpoint returned non-JSON response (${res.status} ${res.statusText}): ${text.substring(0, 100)}`
    );
  }
  return await res.json();
};

export const safeFetch = async (endpoint, options = {}) => {
  const primaryUrl = `${API_BASE_URL}${endpoint}`;
  try {
    const res = await fetch(primaryUrl, options);
    const ct = res.headers.get("content-type") || "";
    if (res.ok && ct.includes("application/json")) {
      return res;
    }
    // If primary returned non-JSON or error and fallback is different, try fallback
    if (API_BASE_URL !== API_FALLBACK_URL) {
      try {
        const fallbackUrl = `${API_FALLBACK_URL}${endpoint}`;
        const fallbackRes = await fetch(fallbackUrl, options);
        const fallbackCt = fallbackRes.headers.get("content-type") || "";
        if (fallbackRes.ok && fallbackCt.includes("application/json")) {
          return fallbackRes;
        }
      } catch {
        // fallback network error, continue with primary response
      }
    }
    return res;
  } catch (err) {
    if (API_BASE_URL !== API_FALLBACK_URL) {
      const fallbackUrl = `${API_FALLBACK_URL}${endpoint}`;
      return fetch(fallbackUrl, options);
    }
    throw err;
  }
};
