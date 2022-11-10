// Imports
import { useAxios } from "use-axios-client";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

import formatDate from "./utilities/formatDate";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderCategoryName = () => {
  const params = useParams();
  // declare the endpoint for this specific genre
  //   console.log(params);
  const categoryEndpoint = `${baseUrl}news_category/${params.id}`;
  //query the end point using wordpress API
  const {
    data: category,
    error,
    loading,
  } = useAxios({
    url: categoryEndpoint,
  });
  if (loading) return "Loading...";
  if (!category) return "No data...";
  if (category.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(category);
  return (
    <div>
      <h2 id="category-name">"{category.name}" News Stories</h2>
    </div>
  );
};

const CategoryStories = () => {
  const params = useParams();
  // get endpoint for specific news stories
  const newsStoriesEndpoint = `${baseUrl}news?news_category=${params.id}&_embed`;

  const {
    data: newsStories,
    error,
    loading,
  } = useAxios({
    url: newsStoriesEndpoint,
  });
  if (loading) return "Loading...";
  if (!newsStories) return "No data...";
  if (newsStories.length === 0) return "No results found!";
  if (error) return "Error!";

  console.log(newsStories);

  const renderedStories = newsStories.map((news, index) => {
    return (
      <div className="news-item" key={index}>
        <img
          className="featured-img"
          src={news._embedded["wp:featuredmedia"][0].source_url}
          alt={news.title.rendered}
        ></img>
        <h3>{news.title.rendered}</h3>
        <p id="date">{formatDate(news.date)}</p>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: news.content.rendered }} />
        </div>
        <Link to={`/news/${news.id}`}>
          <p id="news-item-button">Read More</p>
        </Link>
      </div>
    );
  });
  return renderedStories;
};

const NewsCategory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="nav-background"></div>
      <RenderCategoryName />
      <div id="news-section">
        <CategoryStories />
      </div>
      <div id="buttons-category-pg">
        <button
          id="back-button-categories"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowLeft />
          Go Back
        </button>
        <button id="all-news-redirect-categories">
          All News
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewsCategory;
