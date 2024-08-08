import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images array
const images = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3",
  "https://via.placeholder.com/600x300?text=Image+4",
  "https://via.placeholder.com/600x300?text=Image+5",
  "https://via.placeholder.com/600x300?text=Image+5"
];

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style, right: "10px", fontSize: "24px", color: "#333", cursor: "pointer", display: 'block' }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style, left: "10px", fontSize: "24px", color: "#333", cursor: "pointer", display: 'block' }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export const Slidder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <div className="relative mt-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
