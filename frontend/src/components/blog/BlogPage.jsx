import React from "react";
import BlogCard from "./BlogCard";
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

const BlogPage = () => {
  const showSearch = () => {
    const searchBar = document.querySelector("#searchBar");
    searchBar.style = "display:block;";

    //     searchIcon
    const searchIcon = document.querySelector("#searchIcon");
    //     searchIcon.style = "display:none;";
  };

  const hideSearch = () => {
    const searchBar = document.querySelector("#searchBar");
    searchBar.style = "display:none;";

    //     searchIcon
    const searchIcon = document.querySelector("#searchIcon");
    searchIcon.style = "display:block;";
  };
  return (
    <div className="mt-24">
      <div className="text-md mb-6 text-2xl md:hidden font-extrabold text-white">
        Blogs
      </div>
      <div className="flex justify-between mb-2">
        <button className="hidden md:block text-xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 md:p-1 rounded-md">
          + Create Blog
        </button>
        <div className="text-md md:text-3xl hidden md:block font-bold text-white">
          Blogs
        </div>

        <button class="mr-2 text-sm w-12 h-12 font-bold flex items-center justify-center md:hidden text-center text-white bg-green-500 hover:shadow-lg hover:bg-green-600 md:p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>

        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="ml-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </div>

      <hr className="h-px bg-gray-200 border-1 dark:bg-gray-500" />

      <BlogCard />
      <BlogCard />
      <BlogCard />

      {/* <div className="grid grid-cols-1 gap-10 mt-10">
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
      </div> */}
    </div>
  );
};

export default BlogPage;
