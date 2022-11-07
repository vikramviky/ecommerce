import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending....");
    const { name, email, phone_number, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone_number: phone_number.value,
      message: message.value,
    };
    console.log(details);
  };

  return (
        <form onSubmit={handleSubmit}>
            <div className="contact_details">
                <input placeholder="Name" type="text" id="name" required />
                <input placeholder="Email" type="email" id="email" required />
                <input placeholder="Mobile Number" type="text" id="phone_number" required />
            </div>
            <div className="comments">
                <textarea placeholder="Comments" id="message" required />
            </div>
            <button className="contactbtn" type="submit">{status}</button>
        </form>
  );
};

export default ContactForm;