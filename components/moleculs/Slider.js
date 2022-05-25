import { useState, useEffect } from "react";

export default function Slider({ sliders }) {
  // initial state
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderLength = sliders.length - 1;

  // === handle change slider ===
  const handleChangeSlider = (value) => {
    setSlideIndex(value);
  };

  const handleNextSlider = () => {
    setSlideIndex(slideIndex == sliderLength ? 0 : slideIndex + 1);
  };

  const handlePrevSlider = () => {
    setSlideIndex(slideIndex == 0 ? sliderLength : slideIndex - 1);
  };
  //  === end handle change slider ===

  return (
    <div className="h-56 sm:h-72 md:h-96 relative bg-gray m-auto">
      {sliders.map((item, index) => (
        <img
          src={item}
          alt="Image Banner"
          className={`h-full w-full ${
            slideIndex == index ? "block opacity-100" : "hidden opacity-0"
          } object-cover`}
          key={index}
          loading="lazy"
        />
      ))}

      {/* --- button prev and next --- */}
      <button
        className="absolute left-2 sm:left-5 text-3xl bg-orange rounded transform -translate-y-1/2 text-white opacity-70 top-1/2"
        onClick={handlePrevSlider}
      >
        <i className="bx bxs-chevron-left"></i>
      </button>

      <button
        className="absolute right-2 sm:right-5 text-3xl bg-orange rounded transform -translate-y-1/2 text-white opacity-70 top-1/2"
        onClick={handleNextSlider}
      >
        <i className="bx bxs-chevron-right"></i>
      </button>
      {/* --- end button prev and next --- */}

      {/* --- slider navigation --- */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center bg-orange px-2 py-1">
        {sliders.map((item, index) => (
          <div
            key={index}
            className={`w-[0.4em] transition h-[0.4em] ${
              slideIndex == index ? "scale-150" : "scale-100"
            } cursor-pointer mx-1 rounded-full bg-white`}
            onClick={() => handleChangeSlider(index)}
          ></div>
        ))}
      </div>
      {/* --- end slider navigation --- */}
    </div>
  );
}
