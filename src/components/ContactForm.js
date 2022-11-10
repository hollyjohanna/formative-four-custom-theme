// import axios from "axios";
// import { useState } from "react";

// const formEndpoint = process.env.REACT_APP_WP_API_CONTACT_FORM;

const ContactForm = () => {
  return (
    <div id="form-container">
      <h2>Contact</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div id="form">
          <label forhtml="name">Name</label>
          <input type="text" name="name" required placeholder="Your Name..." />

          <label forhtml="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email..."
          />

          <label forhtml="message">Message</label>
          <textarea
            type="text"
            name="message"
            required
            placeholder="Your Message Here..."
          />
          <button className="button">Send A Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
