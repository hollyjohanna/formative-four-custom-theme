import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

// import our env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedAboutPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const endpoint = `${baseUrl}about/${params.id}?_embed`;

  const {
    data: aboutPost,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  if (loading) return "Loading...";
  if (!aboutPost) return "No data...";
  if (aboutPost.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(aboutPost);

  return (
    <div id="about-post-indiv">
      <h2>{aboutPost.title.rendered}</h2>
      <img
        id="about-img-indiv-page"
        src={aboutPost._embedded["wp:featuredmedia"][0].source_url}
        alt={aboutPost.title.rendered}
      />
      <div className="about-content-indiv-page">
        <div dangerouslySetInnerHTML={{ __html: aboutPost.content.rendered }} />
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
      <Link to={`/about`}>
        <button id="to-about-page">
          About Page
          <ArrowRight />
        </button>
      </Link>
    </div>
  );
};

const OtherAboutPosts = () => {
  const endpoint = `${baseUrl}about?_embed`;
  const {
    data: otherAboutPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  // check if the about/information post has been returned
  if (loading) return <p>Loading...</p>;
  if (!otherAboutPosts) return "No posts found";
  if (otherAboutPosts.length === 0) return "No results found!";
  if (error) return "Error";
  //   console.log(otherAboutPosts);

  const RenderedOtherAboutPosts = otherAboutPosts.map((post, index) => {
    return (
      <div id="about-list" key={index}>
        <Link to={`/about/${post.id}`}>
          <h4>{post.title.rendered}</h4>
        </Link>
        <hr></hr>
      </div>
    );
  });
  return RenderedOtherAboutPosts;
};

const AboutItem = () => {
  return (
    <>
      <div id="nav-background"></div>
      <div id="about-indiv-page">
        <RenderedAboutPost />
        <div id="other-about-post-section">
          <h3>Other About Sections</h3>
          <OtherAboutPosts />
        </div>
      </div>
    </>
  );
};

export default AboutItem;
