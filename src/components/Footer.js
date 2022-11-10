import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="link-container">
          <div className="footer-links">
            <p>Contact</p>
            <ul>
              <li>Email Address</li>
              <li>Postal Address</li>
              <li>Phone Numbers</li>
              <li>Committee Members</li>
            </ul>
          </div>
          <div className="footer-links">
            <p>About</p>
            <ul>
              <li>About Kiwiburn</li>
              <li>What To Bring</li>
              <li>Culture</li>
              <li>Guiding Principles</li>
            </ul>
          </div>
          <div className="footer-links">
            <p>Tickets</p>
            <ul>
              <li>FAQ's</li>
              <li>Kiwiburn Portal</li>
              <li>Reselling Tickets</li>
              <li>Grants and Camps</li>
            </ul>
          </div>
        </div>
        <div id="socials-container">
          <Facebook />
          <Instagram />
          <Pinterest />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div id="lower-footer">
        <p>Copyright 2022 - Kiwiburn New Zealand</p>
      </div>
    </>
  );
};

export default Footer;
