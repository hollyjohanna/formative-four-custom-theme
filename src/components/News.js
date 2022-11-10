import { useAxios } from "use-axios-client";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
//import utilitites
import formatDate from "./../pages/utilities/formatDate";

// grab our url from env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllNews = () => {
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
  console.log(newsPosts);

  let postCount = 0;

  const showNewsPosts = newsPosts.map((post, index) => {
    if (postCount <= 2) {
      postCount++;
      return (
        <div className="news-item" key={index}>
          <img
            className="featured-img"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
          ></img>
          <h3>{post.title.rendered}</h3>
          <p id="date">{formatDate(post.date)}</p>
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
          <Link to={`/news/${post.id}`}>
            <p id="news-item-button">Read More</p>
          </Link>
        </div>
      );
    }
  });
  return showNewsPosts;
};

const News = () => {
  return (
    <div id="news-section">
      <h3 id="news-home-pg-header">Recent News</h3>
      <AllNews />
    </div>
  );
};

export default News;
