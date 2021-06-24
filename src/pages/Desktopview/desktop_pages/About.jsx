import Register from "../../../helpers/register.json"
import React from "react";

import '../../Desktopview/Desktop.scss'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
    
      <img src={Register.images[0].src} />
      <h1>About BookVino</h1>
      <h4>
        We help you find authentic wine experiences to bring you the best
        memories of your vacation home. At many wineries you can take a quick
        look around and get a free taste before buying a few bottles. But you
        should hardly cheat yourself for the extra experience you can bring home
        from the holidays when you book a time in advance. Then we have made
        sure that there is also the opportunity for a tour of the fields, a talk
        about the production and an extended tasting. At BookVino.com you will
        only find less family owned and authentic wineries, where we are sure
        you will have a really good holiday experience..
      </h4>
      <h1>Booking Process</h1>
      <div className="yellowcircle">
      <img src={Register.images[1].src} />
      </div>
      <h2>Go to webpage</h2>
      <p>Go to our webpage and find the winerie you want to visit.</p>
      <div className="yellowcircle">
      <img src={Register.images[2].src} />
      </div>
      <h2>Book wine tasting</h2>
      <p>Book your tasting directly through the wineries</p>
      <div className="yellowcircle">
      <img src={Register.images[3].src} />
      </div>
      <h2>Enjoy your tasting</h2>
      <p>Now you receive your booking details in your mailboks. Enjoy your tasting!!</p>
      <Link to="/allwinerys"><button>SEE WINERIE LIST</button></Link>
    </div>
  );
};

export default About;