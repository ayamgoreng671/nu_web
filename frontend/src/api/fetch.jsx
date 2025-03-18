import axios from "axios";

export const fetchNews = async (setNews) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/news");
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
    const response = await axios.get("http://127.0.0.1:8000/api/news");
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
