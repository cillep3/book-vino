import React from "react";
import Register from "../../helpers/register.json";
import { Link } from "react-router-dom";
import "../../pages/Desktopview/Desktop.scss";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="deskfooter">
      <div id="deskLeft">
        <Link to="/faq">
          <h5>FAQ</h5>
        </Link>
        <Link to="/about">
          <h5>About BookVino</h5>
        </Link>
        <Link to="/allWinerys">
          <h5>Wineries</h5>
        </Link>
      </div>

      <div className="deskfootlogo">
        <Link to="/">
          <img src={Register.images[8].src} />
        </Link>
      </div>

      <div className="desksocial">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaYoutubeSquare />
      </div>

      <div className="copyright">
        <h6>
          Copyright © bookvino.com 2020 All Rights Reserved<br></br>CVR:
          37992240
        </h6>
      </div>

      <div className="admin_link">
        <Link to="/adminWinery">
          <h4>BookVino Admin login</h4>
        </Link>
      </div>

      <div id="deskContact">
        <a href="mailto:ck@bookvino.com">
          <p>
            <FaEnvelope fontSize="25px" /> ck@bookvino.com
          </p>
        </a>

        <p>
          <FaMapMarkerAlt fontSize="25px" /> Engdalen 28, 8500 Grenaa
        </p>

        <a href="tel:+4529875722">
          <p>
            <FaMobileAlt fontSize="25px" /> +45 29875722
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
