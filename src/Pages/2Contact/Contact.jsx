// Portfolio.js
import React from "react";

function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox="">
        <figure>

        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="a" className="form" data-form="">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required=""
              data-form-input=""
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required=""
              data-form-input=""
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required=""
            data-form-input=""
            defaultValue={""}
          />
          <button
            className="form-btn"
            type="submit"
            disabled=""
            data-form-btn=""
          >
            <ion-icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
