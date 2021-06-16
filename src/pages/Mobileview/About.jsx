import Register from "../../helpers/register.json";
import React from "react";

const About = () => {
  return (
    <div>
      <img src={Register.images[0].src} />
      <h1>About BookVino</h1>
      <p>
        We help you find authentic wine experiences to bring you the best
        memories of your vacation home. At many wineries you can take a quick
        look around and get a free taste before buying a few bottles. But you
        should hardly cheat yourself for the extra experience you can bring home
        from the holidays when you book a time in advance. Then we have made
        sure that there is also the opportunity for a tour of the fields, a talk
        about the production and an extended tasting. At BookVino.com you will
        only find less family owned and authentic wineries, where we are sure
        you will have a really good holiday experience.
      </p>
      <h1>Booking Process</h1>
      <img />
      <h2>Go to webpage</h2>
      <p>Go to our webpage and find the winerie you want to visit.</p>
      <img />
      <h2>Book wine tasting</h2>
      <p>Book your tasting directly through the wineries</p>
      <img />
      <h2>Enjoy your tasting</h2>
      <p>Book your tasting directly through the wineries</p>
    </div>
  );
};

export default About;
