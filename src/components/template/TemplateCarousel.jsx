import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TemplateCarousel = ({ productImages }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="w-full max-w-[450px]">
      <Slider {...settings}>
        {productImages.length > 0 ? (
          productImages.map((image, i) => {
            return (
              <figure className="w-full h-[500px]" key={i}>
                <img
                  src={image}
                  alt="image1"
                  className="w-full h-full object-cover"
                />
              </figure>
            );
          })
        ) : (
          <figure className="w-full h-[400px] border-2 border-red-400"></figure>
        )}
      </Slider>
    </div>
  );
};

export default TemplateCarousel;
