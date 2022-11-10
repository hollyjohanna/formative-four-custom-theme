//import linking from react router
import { Link } from "react-router-dom";

const MobileMenu = ({ closeMethod }) => {
  return (
    <div id="mobile-menu">
      <ul>
        <li>
          <Link to="/" onClick={closeMethod}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMethod}>
            About
          </Link>
        </li>
        <li>
          <Link to="/event" onClick={closeMethod}>
            The Event
          </Link>
        </li>
        <li>
          <Link to="/participate" onClick={closeMethod}>
            Participate
          </Link>
        </li>
        <li>
          <Link to="/newspage" onClick={closeMethod}>
            News
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={closeMethod}>
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
