// Import styles
import "../css/styles.css";
// Import components
import Navbar from "./../components/Navbar";
import Footer from "./Footer";
// Import Pages
import Home from "./../pages/Home";
import About from "./../pages/About";
import Event from "./../pages/Event";
import Participate from "./../pages/Participate";
import NewsItem from "../pages/NewsItem";
import NewsPage from "../pages/NewsPage";
import AboutItem from "../pages/AboutItem";
import NewsCategory from "../pages/NewsCategory";
import ShopFront from "../pages/ShopFront";
// Import dependencies
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/news/:id" element={<NewsItem />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/about/:id" element={<AboutItem />} />
          <Route path="/category/:id" element={<NewsCategory />} />
          {/* Shop Route */}
          <Route path="/shop" element={<ShopFront />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
