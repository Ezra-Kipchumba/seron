import React from 'react'



export default function About() {
  return (
    <div className="about">
      Chunga Mjunior is a web-based platform as well as a mobile application
      designed to digitize and simplify child maintenance and support.
      <br />
      <div className="hire">
        <p id="p-about"> We offer lawyers hiring services to hire lawyer</p>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../images/logo1.jpeg")}
                height="400"
                className="back3"
                alt="img"
              ></img>{" "}
            </div>
            <div class="carousel-item">
              <img
                src={require("../images/back3.jpg")}
                height="400"
                className="back3"
                alt="img"
              ></img>{" "}
            </div>
            <div class="carousel-item">
              <img
                src={require("../images/back.jpg")}
                height="400"
                className="back3"
                alt="img"
              ></img>{" "}
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <p id="p-about">
          Hire our lawyer?<a href="http://localhost:3000/hire">Click here</a>
        </p>
      </div>
    </div>
  );
}


