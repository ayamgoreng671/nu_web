import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const fetchNews = async (setNews) => {
  try {
    console.log("jawa" + BASE_URL);
    const response = await axios.get(BASE_URL + "api/news");
    setNews(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const fetchScheduleCity = async (setScheduleCitys) => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json"
    );
    setScheduleCitys(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
export const fetchSchedule = async (setSchedules) => {
  try {
    const response = await axios.get(BASE_URL + "api/news");
    setSchedules(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const fetchSholatSchedule = async (
  cityName,
  year,
  month,
  setSchedule
) => {
  try {
    const url = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${cityName}/${year}/${month}.json`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    setSchedule(data);
  } catch (error) {
    console.error("Error fetching Sholat schedule:", error);
  }
};
