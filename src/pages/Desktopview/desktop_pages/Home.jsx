import React from "react";
import { Link } from "react-router-dom";
import "../Desktop.scss";
import heroVideo from "../../../assets/vineyard.mp4";

// import of components
import Liste from "../../../components/Listelement";
import Register from "../../../helpers/register.json";

const Home = () => {
  return (
    <div id="homeDesktop">
      <div className="hero-container">
        <video src={heroVideo} autoPlay loop muted />

        {/* <img src={hero} alt="Hero billede" /> */}
        <h1>Wine tasting around the world</h1>
      </div>

      <div className="list">
        <h1 id="homeHeadlineDesktop">Our Wineries</h1>

        <Liste />
        <Link to="/allwinerys">
          <button id="homeButton">Load more</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
