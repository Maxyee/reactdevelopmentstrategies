import React from "react";

import carouselphotoOne from "./../resources/images/camera.jpg";
import carouselphotoTwo from "./../resources/images/mobile.jpg";
import carouselphotoThree from "./../resources/images/ticket.jpg";



function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carouselphotoOne} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carouselphotoTwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carouselphotoThree} class="d-block w-100" alt="..." />
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
    </div>
  );
}

export default Carousel;
