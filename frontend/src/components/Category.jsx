import React from 'react';
import { useState, useEffect } from "react";


const Category = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      fetch("/data/navMenuList.json") // Fetch from public folder
        .then((response) => response.json())
        .then((data) => setNewsData(data))
        .catch((error) => console.error("Error fetching news:", error));
    }, []);

  return (
<div>
  {/* currently not used */}
</div>
  )
}

export default Category
