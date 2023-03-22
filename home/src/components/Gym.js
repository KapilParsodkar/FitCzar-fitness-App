import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        // showStatus={false}
        // showArrows={false}
        // showThumbs={false}
        // showIndicators={false}
        interval={700}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p>Full gym</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p>gym</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;