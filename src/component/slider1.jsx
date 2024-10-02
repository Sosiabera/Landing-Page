import { useState } from "react";
import "../styles/slider1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const sliderData = [
  {
    img: "./manOnPc.jpg",
    text: "Fluid AI was born out of a desire to simplify and streamline modern life",
    subText: "Time for work",
  },
  {
    img: "./family.png",
    text: "You can use Fluid as an assistant to save time - and save your sanity.",
    subText: "Time for family",
  },
  {
    img: "./friends.png",
    text: "Fluid easily integrates with your friends' calendars",
    subText: "Time for friends",
  },
];

export default function Slider1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div>
        <p className="sliderTitle">
          Fluid AI was born out of a desire to <br /> simplify and streamline modern life
        </p>
        <div className="sliderContainer">
        <div className="sliderWrapper" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
          {sliderData.map((slide, index) => (
            <div className="ImgContainer" key={index}>
              <img src={slide.img} alt="image" />
              
            </div>
            
          ))}
        </div>
        <div className="overlayImg"></div>
        <div className="imgText">
          <FontAwesomeIcon
            className="SlidericonLeft"
            icon={faArrowLeft}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            className="SlidericonRight"
            icon={faArrowRight}
            onClick={nextSlide}
          />
          <h6>{sliderData[currentIndex].text}</h6>
          <p>{sliderData[currentIndex].subText}</p>
        </div>
</div>
        <div className="sliderDot">
          {sliderData.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
