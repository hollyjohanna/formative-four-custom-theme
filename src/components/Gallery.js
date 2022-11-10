import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

// grab our url from env
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const GallerySection = () => {
  const endpoint = `${baseUrl}photos?_embed`;
  const {
    data: photos,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  // check if the about/information post has been returned
  if (loading) return <p>Loading...</p>;
  if (!photos) return "No posts found";
  if (photos.length === 0) return "No results found!";
  if (error) return "Error";
  console.log(photos);

  let photoCount = 0;

  const showGalleryImages = photos.map((photo, index) => {
    if (photoCount <= 3) {
      photoCount++;
      return (
        <div className="img-container" key={index}>
          <img
            className="gallery-img"
            src={photo._embedded["wp:featuredmedia"][0].source_url}
            alt={photo.title.rendered}
          />
        </div>
      );
    }
  });
  return showGalleryImages;
};

const Gallery = () => {
  return (
    <div id="gallery-container">
      <div id="home-pg-gallery">
        <h3>Gallery</h3>
        <GallerySection />
      </div>
      <Link to="/about">
        <button>Gallery</button>
      </Link>
    </div>
  );
};

export default Gallery;
