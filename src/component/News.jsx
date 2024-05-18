import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setprogress(30);
    let data = await fetch(url);
    let result = await data.json();
    props.setprogress(50);
    // console.log(result);
    setarticles(result.articles || []);
    settotalResults(result.totalResults || 0);
    setloading(false);
    props.setprogress(100);
    document.title = `${capitalizeFirstLetter(props.category)} - News App`;
  };
  
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let result = await data.json();
    setarticles(articles.concat(result.articles || []));
    settotalResults(result.totalResults || 0);
    setloading(false);
  };
  

  useEffect(() => {
    update();
  }, []);

  // const fetchMoreData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
  //   setpage(page + 1);
  //   setloading(true);
  //   let data = await fetch(url);
  //   let result = await data.json();
  //   setarticles(articles.concat(result.articles || []));
  //   settotalResults(result.totalResults || 0);
  //   setloading(false);
  // };

  return (
    <div className="container my-2">
      <h1
        className="text-center mb-4"
        style={{ margin: "5rem", Width: "100%" }}
      >
        News App - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className=" container">
          <div className="row">
          {articles.length > 0 ? (
              articles.map((element, idx) => (
                <div className="col-sm-4 my-2" key={idx}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    publishedAt={element.publishedAt}
                    description={element.description ? element.description.slice(0, 50) : ""}
                    newsurl={element.url}
                    imgurl={element.urlToImage}
                    source={element.source.name}
                    author={element.author === null ? "Unknown" : element.author}
                  />
                </div>
              ))
            ) : (
              <div className="col text-center">No articles found</div>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
