import React from "react";
import "../pages/Desktopview/Desktop.scss";

const SinglewineryBooking = () => {
  return (
    <>
      <div id="bookingContainer">
        <h1>Book a wine tour</h1>
        <form id="bookingformDesk">
          <label for="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Type in your full name"
          ></input>
          <br />
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Type in your email address"
          ></input>
          <br />
          <label for="phone">Phone Number</label>
          <input
            name="phone"
            type="number"
            placeholder="Type in your phone number"
          ></input>
          <br />
          <label for="guests">Number of Guests</label>
          <input
            name="guests"
            type="number"
            placeholder="Type in number of guests"
          ></input>
          <br />
          <label for="date">Date of stay</label>
          <input name="date" type="date"></input>
          <br />
          <input type="submit" value="Book now" />
        </form>
      </div>
    </>
  );
};

export default SinglewineryBooking;
