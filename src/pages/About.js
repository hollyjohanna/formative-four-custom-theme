import ContactForm from "../components/ContactForm";
import AboutSectionAboutPage from "../components/AboutSectionAboutPage";

const About = () => {
  return (
    <div>
      <div id="nav-background"></div>
      <h1 id="about-page-heading">About Page</h1>
      <AboutSectionAboutPage />
      <ContactForm />
    </div>
  );
};

export default About;
