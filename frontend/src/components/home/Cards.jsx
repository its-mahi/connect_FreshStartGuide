import React from "react";
// import explore from '../../assets/explore.jpeg'
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.05,.98,.52,.99)", // Easing on enter/exit.
};

export default function Cards(props) {
  const { title, disc, imgSrc } = props;

  return (
    <div>
      <Tilt options={defaultOptions}>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)]">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-14 h-14 mb-3 mt-2 rounded-full shadow-lg bg-white"
              src={imgSrc}
              alt="No Image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-200 p-4">
              {disc}
            </span>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
