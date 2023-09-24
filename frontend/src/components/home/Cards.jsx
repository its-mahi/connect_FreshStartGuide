import React from "react";
// import explore from '../../assets/explore.jpeg'

export default function Cards(props) {
  const { title, disc, imgSrc } = props;

  return (
    <div>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_0px_15px_rgba(8,_140,_150,_0.7)]">
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
    </div>
  );
}
