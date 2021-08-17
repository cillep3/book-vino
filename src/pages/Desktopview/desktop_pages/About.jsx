import Register from "../../../helpers/register.json";
import React from "react";
import "../../Desktopview/Desktop.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutDesk">
      <img src={Register.images[11].src} id="aboutHeroDesk" />
      <h1 id="aboutHeadlineDesk">Book directly through the venue</h1>
      <h1 id="aboutTitleDesk">About BookVino</h1>
      <img src={Register.images[0].src} id="aboutOwnersDesk" />

      <div className="big_text">
        <h2>
          We help you find authentic wine experiences to bring you the best
          memories of your vacation home.
        </h2>
        <p id="aboutAboutDesk">
          At many wineries you can take a quick look around and get a free taste
          before buying a few bottles. But you should hardly cheat yourself for
          the extra experience you can bring home from the holidays when you
          book a time in advance. Then we have made sure that there is also the
          opportunity for a tour of the fields, a talk about the production and
          an extended tasting. At BookVino.com you will only find less family
          owned and authentic wineries, where we are sure you will have a really
          good holiday experience.
          <br />
          <br />
          Vatican City is the smallest country in the world, but it consumes the
          most wine per capita worldwide. Younger grapes can instill herbaceous
          notes on the nose.
          <br />
          <br />A bouquet becomes more complex and nuanced as the wine ages. The
          term meritage is a blend of merit and heritage, and usually describes
          blended California wines. Strong notes of cedar, gin, with a cinnamon
          finish. All grape juice is white, only the skins of purple grapes
          contain the dark pigment. A "butt" is a medieval measurement for the
          liquid volume of wine. Is wine vegan? Not if it uses gelatin in the
          clarification process.
        </p>
      </div>

      <secion id="aboutBookingprocessDesk">
        <div id="aboutBookingTitleDesk">
          <h1>Booking Process</h1>
          <p>
            Below you can see how our booking process takes place.
            <br />
            If you are in doubt about anything please contact us.
          </p>
        </div>
        <figure id="aboutBookingOption1Desk">
          <div className="yellowcircle">
            <img src={Register.images[1].src} />
          </div>
          <h2>Go to webpage</h2>
          <p>Go to our webpage and find the winerie you want to visit.</p>
        </figure>
        <figure id="aboutBookingOption2Desk">
          <div className="yellowcircle">
            <img src={Register.images[2].src} />
          </div>
          <h2>Book wine tasting</h2>
          <p>Book your tasting directly through the wineries</p>
        </figure>
        <figure id="aboutBookingOption3Desk">
          <div className="yellowcircle">
            <img src={Register.images[3].src} />
          </div>
          <h2>Enjoy your tasting</h2>
          <p>
            Now you receive your booking details in your mailboks. Enjoy your
            tasting!!
          </p>
        </figure>

        <Link to="/allwinerys" id="aboutBookingButtonDesk">
          <button id="aboutBookingButtonDesk">SEE WINERIE LIST</button>
        </Link>
      </secion>
    </div>
  );
};

export default About;
