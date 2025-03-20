import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3it27h",
        "template_y412sgs",
        form.current,
        "ylFxpCKhZl-y9L4tb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="Contact" style={{paddingBottom: '6vh'}}>
      <h2 className="text-center">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <i className="fa-solid fa-envelope contact_option-icon" />
            <h4>Email</h4>
            <h5>csmanish2468@gmail.com</h5>
            <a
              href="mailto:csmanish2468@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </article>
          <article className="contact_option">
            <i className="fa-brands fa-whatsapp contact_option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+919989334898"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            minLength={3}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail"
            required
            minLength={5}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            minLength={5}
          />
          <button type="submit" className="bg-blue-600 text-center text-xl w-sm btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
