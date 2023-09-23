import React, { useEffect, useState } from "react";
import ProfileBlog from "./ProfileBlog";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Profile(props) {
  const { user } = useSelector((state) => state);
  const [blogData, setBlogs] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:8000/api/v1/profile/" + user._id, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(response.data.success);
          // console.log(response.data.user);
          setBlogs(response.data.user.blogs);
        })
        .catch((err) => {
          console.log("Error Aayvi bhai" + err.message);
        });
    };
    getData();
  }, []);

  const [currUser, setCurrUser] = useState(user.name);
  // const blogData = user.blogs;
  console.log(blogData);

  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

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
                  <p className="font-bold text-white text-xl">
                    {blogData.length}
                  </p>{" "}
                  <p className="text-gray-400">Blogs </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative">
                {" "}
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={user.avtar.url} alt="" />
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
                {currUser}
              </h1>{" "}
              <p className="font-light text-white mt-3">{user.email}</p>{" "}
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
            {blogData.map((item, i) => {
              return (
                <ProfileBlog
                  title={item.title}
                  description={item.description}
                  createdAt={item.createdAt}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
