import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Home.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get("YOUR_API_OR_RSS_FEED_URL_HERE");
        setNews(response.data); // Adjust this line based on the response format
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Magic the Gathering news: ", error);
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      <h1>Welcome to Magic the Gathering News</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="news-container">
          {news.map((item) => (
            <div key={item.id} className="news-item">
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              <p>{item.content}</p>
              {/* Display more information about the news item as needed */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;