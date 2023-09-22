import React from "react";

const BlogPage = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-between mb-2">
        <button className="text-2xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 p-1 rounded-md">
          + Create Blog
        </button>
        <div className="text-3xl font-bold text-white">Blogs</div>
        <input
          type="text"
          className="text-2xl text-left px-3 focus:border-2 focus:border-solid focus:border-blue-500 focus:shadow-lg rounded-md"
          placeholder="Search here..."
        />
        {/* <h1 className="text-3xl text-black bg-white">+ Create Blog</h1> */}
        {/* <h1 className="text-3xl text-black bg-white">Search Blog</h1> */}
      </div>

      <hr class="h-px bg-gray-200 border-1 dark:bg-gray-500" />

      <div className="grid grid-cols-1 gap-10 mt-10">
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
      </div>
    </div>
  );
};

export default BlogPage;
