// src/api/studentApi.js
import { safeFetch, parseJsonResponse } from "./config";

export const loginStudentApi = async ({ email, password }) => {
  try {
    const res = await safeFetch("/student/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;
  } catch (error) {
    console.error("loginStudentApi Error:", error);
    throw error;
  }
};

export const registerStudentApi = async ({ name, email, password, phone }) => {
  try {
    const res = await safeFetch("/student/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, phone }),
    });
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }
    return data;
  } catch (error) {
    console.error("registerStudentApi Error:", error);
    throw error;
  }
};

export const getStudentProfileApi = async (email, token) => {
  try {
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await safeFetch(`/student/profile?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers,
    });
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Failed to load profile");
    }
    return data;
  } catch (error) {
    console.warn("getStudentProfileApi warning:", error.message);
    throw error;
  }
};

export const updateLessonProgressApi = async ({ email, courseId, lessonId, completed }) => {
  try {
    const res = await safeFetch("/student/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, courseId, lessonId, completed }),
    });
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Failed to update progress");
    }
    return data;
  } catch (error) {
    console.warn("updateLessonProgressApi warning:", error.message);
    throw error;
  }
};

export const getAdminStudentsApi = async () => {
  try {
    const res = await safeFetch("/admin/students");
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch student enrollments");
    }
    return data.data || [];
  } catch (error) {
    console.warn("getAdminStudentsApi warning:", error.message);
    return [];
  }
};

export const adminAssignCourseApi = async ({ email, courseId, studentName }) => {
  try {
    const res = await safeFetch("/admin/assign-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, courseId, studentName }),
    });
    const data = await parseJsonResponse(res);
    if (!res.ok) {
      throw new Error(data.message || "Failed to assign course");
    }
    return data;
  } catch (error) {
    console.error("adminAssignCourseApi Error:", error);
    throw error;
  }
};
