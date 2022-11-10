import Hero from "./../components/Hero";
import News from "./../components/News";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import NewsletterSection from "../components/NewsletterSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Gallery />
      <News />
      <NewsletterSection />
    </>
  );
};

export default Home;
