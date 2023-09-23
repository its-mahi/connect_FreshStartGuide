import React from "react";
import BlogCard from '../BlogCard';

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
          className="text-xl text-left px-3 focus:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] border border-slate-600 rounded-xl focus:outline-0"
          placeholder="Search here..."
        />
        {/* <h1 className="text-3xl text-black bg-white">+ Create Blog</h1> */}
        {/* <h1 className="text-3xl text-black bg-white">Search Blog</h1> */}
      </div>

      <hr class="h-px bg-gray-200 border-1 dark:bg-gray-500" />

      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

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
