// Import styles
import "../css/styles.css";
// Import components
import Navbar from "./../components/Navbar";
// Import Pages
import Home from "./../pages/Home";
// Import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
