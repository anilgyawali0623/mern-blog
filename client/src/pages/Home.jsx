import React, { useEffect, useState } from "react";
import "./Home.css";
// import Card from "../Card/Card";
 import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
// import { fetchDataFromApi } from "../../utils/api"; // Ensure this path is correct
import { fetchDataFromApi } from "../utils/api";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingBar from "react-top-loading-bar";
import { useDispatch } from "react-redux";
// import { getProgress } from "../../store/homeSlice";
import { getProgress } from "../user/userSlice";

import Button from '../components/Button'
const override = {};

function Home() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUpgradeRequired, setIsUpgradeRequired] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const fetchNews = async (page) => {
    setLoading(true);

    setProgress(30);
    dispatch(getProgress(30));
    try {
      const result = await fetchDataFromApi(
        `/everything?q=latest&pageSize=20&page=${page}`
      );
      setProgress(60);
      dispatch(getProgress(60));

      if (result.articles?.length > 0) {
        setNews((prevNews) => [...prevNews, ...result.articles]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
      dispatch(getProgress(100));
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An error occurred while fetching data.");
      if (err.response && err.response.status === 426) {
        setIsUpgradeRequired(true);
      }
      dispatch(getProgress(100));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, []);

  const fetchMoreData = () => {
    fetchNews(page);
  };

  return (
    <div className="mainsection">
      {error && <p>{error}</p>}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vh",
            position: "relative",
            left: "20",
            top: "10",
          }}
        >
          <ClipLoader
            color="black"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
          />
        </div>
      )}
      <InfiniteScroll
        style={{ display: "flex", flexWrap: "wrap" }}
        dataLength={news.length || 0}
        next={fetchMoreData}
        hasMore={hasMore && !isUpgradeRequired}
        endMessage={
          isUpgradeRequired ? (
            <p>No more articles to load</p>
          ) : (
            <p>No more articles to fetch</p>
          )
        }
      >
        {news.map((article, index) => (
          <Card
            key={index}
            description={article.description}
            urlToImage={article.urlToImage}
            author={article.author}
            date={article.publishedAt}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Home;
