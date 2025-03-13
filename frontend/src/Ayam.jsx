import { useState } from "react";
import { useEffect } from "react";
import { fetchNews } from "./api/fetch";

const Ayam = () => {
  console.log("ayam");
  console.log("bebek");
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews(setNews);
  }, []);
  console.log(news);
  // console.log(news);
  return (
    <div>
      AYAM
      <div>{JSON.stringify(news, null, 2)}</div>
    </div>
  );
};

export default Ayam;
