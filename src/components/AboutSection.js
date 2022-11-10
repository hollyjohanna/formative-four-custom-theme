import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

// grab our url from env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AboutSection = () => {
  const endpoint = `${baseUrl}information?_embed`;
  const {
    data: about,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  // check if the about/information post has been returned
  if (loading) return <p>Loading...</p>;
  if (!about) return "No posts found";
  if (about.length === 0) return "No results found!";
  if (error) return "Error";
  console.log("this is the data we want");
  console.log(about);

  const showAboutPost = about.map((post, index) => {
    return (
      <div id="about-container" key={index}>
        <h3>{post.title.rendered}</h3>
        <div id="about-content">
          <div
            className="about-text"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <img
            id="about-img"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
          />
        </div>
        <Link to="/about/83">
          <button>Read More</button>
        </Link>
      </div>
    );
  });
  return showAboutPost;
};

export default AboutSection;
