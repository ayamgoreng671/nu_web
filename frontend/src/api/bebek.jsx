import { useState, useEffect } from "react";
import { fetchSholatSchedule } from "./fetch";
import { fetchScheduleCity } from "./fetch";

const Bebek = () => {
  const [schedule, setSchedule] = useState([]);
  const [city, setCity] = useState("acehbarat"); // Default city
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(
    String(new Date().getMonth() + 1).padStart(2, "0")
  ); // January = 1
  const [scheduleCitys, setSchedulesCity] = useState([]);
  useEffect(() => {
    fetchScheduleCity((cities) => {
      const uniqueCities = [...new Set(cities)]; // Remove duplicates
      setSchedulesCity(uniqueCities);
    });
  }, []);
  useEffect(() => {
    fetchSholatSchedule(city, year, month, setSchedule);
  }, [city, year, month]); // Refetch if city, year, or month changes
  console.log("jawa");
  console.log(schedule);

  return (
    <div>
      <h2>
        Sholat Schedule for {city} - {year}/{month}
      </h2>

      <label>Select City: </label>
      <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
        {scheduleCitys.map((post) => (
          <option key={post} value={post}>
            {post}
          </option>
        ))}
      </select>
      <div>
        <h3>Prayer Times:</h3>
        {schedule.map((day, index) => (
          <div key={index}>
            <p>
              <strong>{day.tanggal}</strong>
            </p>
            <p>Subuh: {day.shubuh}</p>
            <p>Dzuhur: {day.dzuhur}</p>
            <p>Ashar: {day.ashr}</p>
            <p>Maghrib: {day.magrib}</p>
            <p>Isya: {day.isya}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bebek;
