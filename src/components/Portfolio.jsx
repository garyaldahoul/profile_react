import React, { Component } from "react";

const Portfolio = () => {
  return (
    <section>
      <h1 id="portfolio">PORTFOLIO</h1>
      <div class="star-div">
        <hr class="star-line-black" />
        <span class="star-black">&#9733;</span>
        <hr class="star-line-black" />
      </div>
      <ul class="portfolio-list">
        <li class="portfolio-item">
          <h2 class="portfolio-title-section">FIRST PROJECT</h2>
          <div class="portfolio-section">
            <div class="portfolio-text">
              <h3 class="p-f-d">Project Description</h3>
              <p class="p-f-d-t">
                PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/350x150/a6/"
              class="portfolio-img"
            />
          </div>
        </li>
        <li class="portfolio-item">
          <h2 class="portfolio-title-section">SECOND PROJECT</h2>
          <div class="portfolio-section">
            <div class="portfolio-text">
              <h3 class="p-f-d">Project Description</h3>
              <p class="p-f-d-t">
                PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION,PROJECT DESCRIPTION,PROJECT DESCRIPTION,PROJECT
                DESCRIPTION.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/350x150/a6/"
              class="portfolio-img"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
