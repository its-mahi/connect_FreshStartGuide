import React, { useEffect, useState } from "react";
import ProfileBlog from "./ProfileBlog";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Profile(props) {
  const { user } = useSelector((state) => state);
  const [blogData, setBlogs] = useState([]);
  const [toggler, setToggler] = useState(true);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/profile/" + user._id, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          setBlogs(response.data.user.blogs);
        })
        .catch((err) => {
          console.log("Error Aayvi bhai" + err.message);
        });
    };
    getData();
  }, [toggler]);

  const toggleToggler = () => {
    setToggler(!toggler);
  };

  const [currUser, setCurrUser] = useState(user.name);
  // const blogData = user.blogs;
  console.log(blogData);

  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

      <div>
        <div className="p-4 md:p-8 lg:p-16 ">
          <div className=" mt-8 md:mt-24 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 p-10 shadow-[0_0px_25px_rgba(8,_112,_184,_0.7)] md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              
              <div className="order-2 md:order-1 text-center md:mt-4 mt-10 ">
                
                <div>
                  <h1 className="text-4xl font-medium text-white md:mt-0 mt-[100px]">
                  {currUser}
                  </h1>
                  <p className="font-light text-white mt-3">
                  {user.email}
                  </p>
                  
                </div>
                
              </div>
              
              <div className="relative ">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={user.avtar.url} className="rounded-3xl shadow-2xl" alt="" />
                </div>{" "}
              </div>{" "}
              
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-6  md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-md">
                  {" "}
                  Logout
                </button>{" "}
              </div>{" "}
            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pr-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="ml-0 block w-full p-2 md:p-4 pl-10 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white"
                placeholder="       Search Notes, Topics..."
                required
              />
            </div>
            {blogData.map((item, i) => {
              return (
                <div className="m-4">
                <ProfileBlog
                  title={item.title}
                  description={item.description}
                  createdAt={item.createdAt}
                  id={item._id}
                  toggleToggler={toggleToggler}
                  key={i}

                />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
