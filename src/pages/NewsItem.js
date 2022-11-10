import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
//import utilitites
import formatDate from "./utilities/formatDate";

// import our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedNews = () => {
  //declare params to find id
  const params = useParams();
  //declare navigate
  const navigate = useNavigate();
  // declare endpoint
  const endpoint = `${baseUrl}news/${params.id}?_embed`;

  const {
    data: news,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  if (loading) return "Loading...";
  if (!news) return "No data...";
  if (news.length === 0) return "No results found!";
  if (error) return "Error!";

  console.log(news);

  const NewsCategories = () => {
    const taxonomyEndpoint = news._links["wp:term"][0].href;

    const {
      data: taxonomies,
      error,
      loading,
    } = useAxios({
      url: taxonomyEndpoint,
    });
    if (loading) return "Loading...";
    if (!taxonomies) return "No data...";
    if (taxonomies.length === 0) return "No results found!";
    if (error) return "Error!";

    // console.log(taxonomies);

    const showCategory = taxonomies.map((taxonomies, index) => {
      return (
        <Link to={`/category/${taxonomies.id}`} key={index}>
          <span key={index} className="category-pill">
            {taxonomies.name}
          </span>
        </Link>
      );
    });
    return showCategory;
  };

  return (
    <div id="news-page">
      <h2>{news.title.rendered}</h2>
      <p id="date">{formatDate(news.date)}</p>
      <NewsCategories />
      <img
        id="news-img"
        src={news._embedded["wp:featuredmedia"][0].source_url}
        alt={news.title.rendered}
      />
      <div className="news-content">
        <div dangerouslySetInnerHTML={{ __html: news.content.rendered }} />
      </div>
      <button
        id="back-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeft />
        Go Back
      </button>
      <button id="all-news-redirect">
        All News
        <ArrowRight />
      </button>
    </div>
  );
};

const RecentNews = () => {
  const endpoint = `${baseUrl}news?_embed`;
  const {
    data: newsPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });

  // check if the news posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!newsPosts) return "No posts found";
  if (error) return "Error";
  //   console.log(newsPosts);

  let recentNewsCount = 0;

  const RecentNewsPosts = newsPosts.map((post, index) => {
    if (recentNewsCount <= 5) {
      recentNewsCount++;
      return (
        <div id="news-list" key={index}>
          <Link to={`/news/${post.id}`}>
            <h4>{post.title.rendered}</h4>
          </Link>
          <p>{formatDate(post.date)}</p>
          <hr></hr>
        </div>
      );
    }
  });
  return RecentNewsPosts;
};

const NewsItem = () => {
  return (
    <>
      <div id="nav-background"></div>
      <div id="news-page-container">
        <RenderedNews />
        <div id="recent-news">
          <h3>Recent News</h3>
          <RecentNews />
        </div>
      </div>
    </>
  );
};

export default NewsItem;
