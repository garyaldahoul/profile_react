import React, { Component } from "react";

const Contact = () => {
  return (
    <section class="contact-section">
      <h1 id="contact">CONTACT ME</h1>
      <div class="star-div">
        <hr class="star-line-black" />
        <span class="star-black">&#9733;</span>
        <hr class="star-line-black" />
      </div>
      <p class="contact-text">
        You can contact me by sendingEmail ID :
        <a href="#" class="email">
          YOUR EMAIL
        </a>
      </p>
    </section>
  );
};

export default Contact;
