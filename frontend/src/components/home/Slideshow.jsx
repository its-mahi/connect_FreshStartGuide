import React, { useState, useEffect, useRef } from "react";
import "../../../styles/home.css";
import sample from "./blogSample.png";
import slideSample from "../../assets/slide_1.png";

const colors = ["bg-blue-500", "bg-green-400", "bg-yellow-400"];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow max-w-screen-md mx-auto mt-24">
      <div
        className="slideshowSlider transition-transform duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, idx) => (
          <div
            className={`slide w-full p-4 ${backgroundColor}`}
            key={idx}
          >
            <div className="text-gray-900 text-lg break-words whitespace-normal">
              {/* Your text goes here */}
            </div>
              <h1>Explore others Blogs</h1>
            <div className=" flex justify-center">
              <img src={slideSample} alt="" width={700}/>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots text-center mt-4">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot inline-block h-5 w-5 rounded-full cursor-pointer mx-2 ${
              index === idx ? "bg-purple-700" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
