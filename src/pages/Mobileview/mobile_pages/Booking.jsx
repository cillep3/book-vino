import React from "react";

const Booking = () => {
  return (
    <>
      <div id="bookingwrap">
        <h1>Booking</h1>
        <form id="bookingform">
          <label for="winery">Select Winery</label>
          <select name="winery" required>
            <option value="">-- Please choose a winery --</option>
            <option value="">Bel Amino</option>
            <option value="">Corte Archi</option>
            <option value="">Le Marognole</option>
            <option value="">Marchesini Marcello</option>
            <option value="">Marco Reggio</option>
            <option value="">Sol de Montalto</option>
          </select>
          <label for="fName">Name</label>
          <input
            name="fName"
            type="text"
            placeholder="First name"
            required
          ></input>
          <input
            name="lName"
            type="text"
            placeholder="Last name"
            required
          ></input>
          <label for="email">E-mail</label>
          <input name="email" type="text" required></input>
          <label for="phone">Phone Number</label>
          <input name="phone" type="number" required></input>
          <label for="guests">Number of Guests</label>
          <input name="guests" type="number" required></input>
          <label for="arrival">Arrival Date</label>
          <input name="arrival" type="datetime-local" required></input>
          <input type="submit" value="Book Now"></input>
        </form>
      </div>
    </>
  );
};

export default Booking;
