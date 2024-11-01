import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

// Images
import image1 from "../assets/images/Football.png";
import image2 from "../assets/images/Headset.png";
import image3 from "../assets/images/Smartwatch.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Product 1" className={styles.carouselImage} />
        </div>
        <div>
          <img src={image2} alt="Product 2" className={styles.carouselImage} />
        </div>
        <div>
          <img src={image3} alt="Product 3" className={styles.carouselImage} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
