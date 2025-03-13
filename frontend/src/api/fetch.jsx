import axios from "axios";
import { useState } from "react";

export const fetchNews = async (setNews) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/news");
    setNews(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
