import { useState } from "react";
import { useEffect } from "react";
import { fetchNews } from "./api/fetch";
import { fetchScheduleCity } from "./api/fetch";
import Bebek from "./api/bebek";

const Ayam = () => {
  console.log("ayam");
  console.log("bebek");
  const [news, setNews] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [scheduleCitys, setSchedulesCity] = useState([]);
  useEffect(() => {
    fetchNews(setNews);
    fetchScheduleCity(setSchedulesCity);
  }, []);
  console.log(news);
  // console.log(news);
  return (
    <div>
      <div>JAWA</div>
      <Bebek />
      <div>AYAM</div>
      {/* <select name="city" id="city">
        {scheduleCitys.map((post) => (
          <option key={post} value={post}>
            {post}
          </option>
        ))}
      </select> */}

      <div>{JSON.stringify(scheduleCitys, null, 2)}</div>
      <div> BEBEK</div>

      <div>{JSON.stringify(news, null, 2)}</div>
    </div>
  );
};

export default Ayam;
