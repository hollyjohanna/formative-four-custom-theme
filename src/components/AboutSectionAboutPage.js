import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

// grab our url from env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AboutCards = () => {
  const endpoint = `${baseUrl}about?_embed`;
  const {
    data: aboutcards,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  // check if the about/information post has been returned
  if (loading) return <p>Loading...</p>;
  if (!aboutcards) return "No posts found";
  if (aboutcards.length === 0) return "No results found!";
  if (error) return "Error";
  console.log(aboutcards);

  const showAboutCards = aboutcards.map((post, index) => {
    return (
      <div className="about-post-card" key={index}>
        <h3>{post.title.rendered}</h3>
        <img
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        />
        <div
          className="about-text"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        <Link to={`/about/${post.id}`}>
          <p id="about-item-button">Read More</p>
        </Link>
      </div>
    );
  });
  return showAboutCards;
};

const AboutSectionAboutPage = () => {
  return (
    <div id="about-post-section">
      <h2>About The Burn</h2>
      <div id="about-post-container">
        <AboutCards />
      </div>
    </div>
  );
};

export default AboutSectionAboutPage;
