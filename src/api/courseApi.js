// src/api/courseApi.js
import { safeFetch, parseJsonResponse } from "./config";
import { getCourses } from "../data/coursesData";

export const getCoursesApi = async () => {
  try {
    const res = await safeFetch("/courses");
    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }
    const json = await parseJsonResponse(res);
    return json.data || [];
  } catch (error) {
    console.warn("getCoursesApi fallback to local catalog:", error.message);
    return getCourses();
  }
};

export const getCourseByIdApi = async (id) => {
  try {
    const res = await safeFetch(`/courses/${id}`);
    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }
    const json = await parseJsonResponse(res);
    return json.data;
  } catch (error) {
    console.warn("getCourseByIdApi fallback:", error.message);
    return null;
  }
};

export const createCourseApi = async (courseData) => {
  try {
    const res = await safeFetch("/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
    return await parseJsonResponse(res);
  } catch (error) {
    console.error("createCourseApi Error:", error);
    throw error;
  }
};

export const updateCourseApi = async (id, courseData) => {
  try {
    const res = await safeFetch(`/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
    return await parseJsonResponse(res);
  } catch (error) {
    console.error("updateCourseApi Error:", error);
    throw error;
  }
};

export const deleteCourseApi = async (id) => {
  try {
    const res = await safeFetch(`/courses/${id}`, {
      method: "DELETE",
    });
    return await parseJsonResponse(res);
  } catch (error) {
    console.error("deleteCourseApi Error:", error);
    throw error;
  }
};

export const uploadNotesPdfApi = async (file) => {
  try {
    const formData = new FormData();
    formData.append("notesFile", file);

    const res = await safeFetch("/courses/upload-notes", {
      method: "POST",
      body: formData,
    });
    return await parseJsonResponse(res);
  } catch (error) {
    console.error("uploadNotesPdfApi Error:", error);
    throw error;
  }
};
