import React from "react";
import { useState } from "react";
import "./Contact.css"

const Contact = ({ nameLabel, emailLabel, messageLabel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name : ${name}, email: ${email}, message ${ message}`);
  };  

  return (
    <>
    <section id="contact">
      <form onSubmit={handleSubmit}>
        <label>
          {nameLabel ||  'Name:'}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
        {emailLabel ||  'Email:'}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
        {messageLabel ||  'Message:'}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button type="submit">Send</button>
      </form>
      </section>
    </>
  );
};
export default Contact;
