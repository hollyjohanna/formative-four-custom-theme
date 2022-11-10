// Import Logo
import logo from "./../img/kb-logo.png";
// Import icons
import { List } from "react-bootstrap-icons";
//Import mobile menu
import MobileMenu from "./MobileMenu";
// import use state
import { useState } from "react";
// import linking from react-router
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MenuIsOpen, openMenu] = useState(false);

  const toggleMobileMenu = () => {
    openMenu(!MenuIsOpen);
  };

  return (
    <>
      {/* <div className={color ? "navbar navbar-bg" : "navbar"}> */}
      <div className="navbar">
        <div id="desktop-menu">
          <ul>
            <li>
              <div className="dropdown">
                <Link to="/about" className="main-link">
                  About
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li className="dropdown-li">About The Burn</li>
                    <li className="dropdown-li">
                      <Link to="/about">Contact</Link>
                    </li>
                    <li className="dropdown-li">Culture</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link to="/event" className="main-link">
                  The Event
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li className="dropdown-li">Theme</li>
                    <li className="dropdown-li">Tickets</li>
                    <li className="dropdown-li">Getting Ready</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/">
                <img id="nav-logo" src={logo} alt="Kiwiburn Logo"></img>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <Link to="/participate" className="main-link">
                  Participate
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li className="dropdown-li">Volunteer</li>
                    <li className="dropdown-li">Art</li>
                    <li className="dropdown-li">Theme Camps</li>
                    <li className="dropdown-li">Events</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link to="/newspage" className="main-link">
                  News
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li className="dropdown-li">Latest News</li>
                    <li className="dropdown-li">Kiwiburn Blog</li>
                    <li className="dropdown-li">Previous Burns</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="mobile-nav">
          <Link to="/">
            <img id="nav-logo-mobile" src={logo} alt="Kiwiburn Logo"></img>
          </Link>
          <div id="nav-icon">
            <List onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
      {/* check if the menu is open = true then render mobile menu component */}
      {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Navbar;
