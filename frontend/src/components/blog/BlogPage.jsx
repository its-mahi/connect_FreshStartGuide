import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogAdd from "./BlogAdd";
import axios from "axios";
import { Ripple, initTE } from "tw-elements";
import { tabScrollButtonClasses } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
initTE({ Ripple });
import { ThreeDots, TailSpin } from "react-loader-spinner";
import LoginAlert from "../auth/LoginAlert"
// import BlogEditor from "./BlogEditor";

const BlogPage = (props) => {
  // console.log("called Blog Page");
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    title: "",
    blog: "",
    tags: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [myModal, setMyModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const toggleModal = () => {
    if (!props.isLoggedIn) {
      setLoginModal(!loginModal);
    } else {
      setMyModal(!myModal);
    }
  };
  const updateData = (newData) => {
    const { name, value } = newData;
    if (name === "tags") {
      const tagsArray = value.split(",").map((tag) => tag.trim());
      setData((prevData) => ({
        ...prevData,
        [name]: tagsArray,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const createBlog = () => {
    // console.log(data);
    const reqData = data;
    axios
      .post("https://connect-qbpn.onrender.com/api/v1/createblog", reqData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data.success);
      });
  };

  useEffect(() => {
    const fetchBlog = () => {
      setLoader(true);
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/blogs", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(response.data.blogs);
          setLoader(false);
          setBlogs(response.data.blogs);
        });
    };
    fetchBlog();
    document.querySelector("#default-search").value = "";
  }, [isSubmitted]);

  const toggleSetIsSubmitted = () => {
    let myBool = isSubmitted;
    setIsSubmitted(!myBool);
  };

  const searchBlog = (e) => {
    const reqData = { search: e.target.value };
    // console.log(reqData);
    axios
      .post("https://connect-qbpn.onrender.com/api/v1/blog/search", reqData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data.blog);
        setBlogs(response.data.blog);
        // console.log(blogs);
      });
  };

  return (
    <>
      {/* {!props.isLoggedIn && <Navigate to="/login" />} */}

      <div className="mt-24">
        <div className="text-md mb-6 text-2xl md:hidden font-extrabold text-white">
          Blogs
        </div>
        <div className="flex justify-between mb-2">
          <button
            className="hidden md:block text-xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md"
            onClick={toggleModal}
          >
            + Create Blog
          </button>
          <div className="text-md md:text-3xl hidden md:block font-bold text-white">
            Blogs
          </div>

          <button className="mr-2 text-sm w-12 h-12 font-bold flex items-center justify-center md:hidden text-center text-white bg-green-500 hover:shadow-lg hover:bg-green-600 md:p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>

          <div className="relative">
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
              className="ml-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              onChange={searchBlog}
              required
            />
          </div>
        </div>

        <hr className="h-px mt-5 bg-gray-200 border-1 dark:bg-gray-500" />
        <BlogAdd
          modal={myModal}
          updateData={updateData}
          createBlog={createBlog}
          toggleModal={toggleModal}
          isSubmitted={isSubmitted}
          toggleSetIsSubmitted={toggleSetIsSubmitted}
        />

        <LoginAlert
          modal={loginModal}
          toggleModal={toggleModal}

        />

        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ThreeDots
            height="100"
            width="100"
            radius="7"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loader}
          />
        </div>

        <div>
          {blogs.map((blog, i) => {
            {
              /* console.log(blog.title); */
            }
            return (
              <BlogCard
                key={i}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
                user={blog.author ? blog.author.name : "No-Name"}
                userAvtar={blog.author ? blog.author.avtar : ""}
                createdAt={blog.createdAt}
              />
            );
          })}
        </div>
        {/* <BlogCard /> */}
        {/* <BlogCard /> */}

        {/* <div className="grid grid-cols-1 gap-10 mt-10">
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
        <div className="h-48 w-full bg-white"></div>
      </div> */}
      </div>

      {/* <BlogEditor/> */}
    </>
  );
};

export default BlogPage;
