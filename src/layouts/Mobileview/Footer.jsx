import React from "react";
import "../../pages/Mobileview/Mobile.scss";
import Register from "../../helpers/register.json";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footlogo">
        <img src={Register.images[8].src} />
      </div>
      <div id="contact">
        <a href="mailto:ck@bookvino.com">
          <div className="iconfa">
            <FaEnvelope />
          </div>
          <p>ck@bookvino.com</p>
        </a>
      </div>
      <div id="contact">
        <a>
          <div className="iconfa">
            <FaMapMarkerAlt />
          </div>
          <p>Engdalen 28, 8500 Grenaa</p>
        </a>
      </div>
      <div id="contact">
        <a href="tel:+4529875722">
          <div className="iconfa">
            <FaMobileAlt />
          </div>
          <p>+45 29875722</p>
        </a>
      </div>
      <Link to="/booking">
        <button>BOOK NOW</button>
      </Link>
      <Link to="/faq">
        <h5>FAQ</h5>
      </Link>
      <Link to="/aboutus">
        <h5>About BookVino</h5>
      </Link>
      <Link to="/allwinerys">
        <h5>Wineries</h5>
      </Link>
      <div className="social">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaYoutubeSquare />
      </div>
      <h6>
        Copyright © bookvino.com 2020 All Rights Reserved<br></br>CVR: 37992240
      </h6>
      <Link to="/admin">
        <h6>BookVino Admin</h6>
      </Link>
    </div>
  );
};

export default Footer;
