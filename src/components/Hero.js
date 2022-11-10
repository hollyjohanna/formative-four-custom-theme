import { Link } from "react-router-dom";
import rightshapes from "./../img/rightshapes.png";
import leftshapes from "./../img/leftshapes.png";
import footerleftshapes from "./../img/footer-left-shapes.png";
import reddiamond from "./../img/footer-reddiamond.png";

const Hero = () => {
  return (
    <div id="hero-section">
      <div id="hero-content">
        <img id="right-shapes" src={rightshapes} />
        <img id="left-shapes" src={leftshapes} />
        <img id="footer-left-shapes" src={footerleftshapes} />
        <img id="red-diamond" src={reddiamond} />
        <h2>Welcome to</h2>
        <h1>Kiwiburn</h1>
        <p id="tagline">New Zealand's Regional Burning Man Event</p>
        <div id="date-section">
          <p className="hero-text">Kiwiburn will be held</p>
          <h3>25 - 30 Jan 2023</h3>
          <p className="hero-text">See you on the Paddock!</p>
        </div>
        <div id="button-container">
          <button id="ticket-button">Tickets</button>
          <Link to="/shop">
            <button id="donate-button">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
