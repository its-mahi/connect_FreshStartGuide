import React, { useState } from "react";
import ProfileBlog from "./ProfileBlog";

export default function Profile() {

  const [user,setUser] = useState("Kris Patel");
  const blogData = [
    {
      user :   user ,
      createdAt : "10-10-2010" ,
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis reiciendis, itaque asperiores inventore veritatis beatae autem eum, enim sit obcaecati reprehenderit blanditiis illo exercitationem adipisci velit accusamus. Provident, fugit? Voluptatum accusantium dolorem ipsa sunt obcaecati necessitatibus cum modi, temporibus perspiciatis eligendi iure repellendus, porro tempora quas vel labore rerum assumenda, odit autem iste cumque reprehenderit? Nisi provident sed vel delectus dolorem autem debitis soluta." ,
      title: "Blog 1"
    }, 
    {
      user :   user ,
      createdAt : "10-10-2010" ,
      title: "Blog 2",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis reiciendis, itaque asperiores inventore veritatis beatae autem eum, enim sit obcaecati reprehenderit blanditiis illo exercitationem adipisci velit accusamus. Provident, fugit? Voluptatum accusantium dolorem ipsa sunt obcaecati necessitatibus cum modi, temporibus perspiciatis eligendi iure repellendus, porro tempora quas vel labore rerum assumenda, odit autem iste cumque reprehenderit? Nisi provident sed vel delectus dolorem autem debitis soluta."
    },
    {
      user :   user ,
      createdAt : "10-10-2010" ,
      title: "Blog 3",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis reiciendis, itaque asperiores inventore veritatis beatae autem eum, enim sit obcaecati reprehenderit blanditiis illo exercitationem adipisci velit accusamus. Provident, fugit? Voluptatum accusantium dolorem ipsa sunt obcaecati necessitatibus cum modi, temporibus perspiciatis eligendi iure repellendus, porro tempora quas vel labore rerum assumenda, odit autem iste cumque reprehenderit? Nisi provident sed vel delectus dolorem autem debitis soluta."
    },
  ];
  return (
    <div>
      <div className="p-16 ">
        <div className="p-8 bg-gray-700  mt-24 shadow-[0_0px_25px_rgba(8,_112,_184,_0.7)] ">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-white text-xl">{blogData.length}</p>{" "}
                <p className="text-gray-400">Blogs </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-md">
                {" "}
                Logout
              </button>{" "}
              
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-white">
              Kris Patel
            </h1>{" "}
            <p className="font-light text-white mt-3">Ahmedabad, India</p>{" "}
          </div>{" "}
          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              className="ml-2 block w-full p-4 pl-10 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark    :text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  text-white"
              placeholder="Search Notes, Topics... "
              required
            />
          </div>

          
        {blogData.map((item,i)=>{
          return <ProfileBlog user={item.user} title={item.title} description={item.description} createdAt={item.createdAt} key={i} />
        })}


        </div>
      </div>
    </div>
  );
}
