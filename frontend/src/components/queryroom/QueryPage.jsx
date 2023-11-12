import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import QueryForm from "./QueryForm";
import QueryRooms from "./QueryRooms";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function QueryPage(props) {
  const [myModal, setMyModal] = useState(false);
  const [loader, setLoader] = useState(false);

  const toggleModal = () => {
    setMyModal(!myModal);
  };
  const [urls, setUrls] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const fetchUrls = () => {
      setLoader(true);

      axios
        .get("https://connect-qbpn.onrender.com/api/v1/allLink", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(response.data.links);
          setLoader(false);
          setUrls(response.data.links);
        });
    };
    fetchUrls();
  }, [isSubmitted]);

  const toggleSetIsSubmitted = () => {
    let myBool = isSubmitted;
    setIsSubmitted(!myBool);
  };

  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

      <div className="mt-24">
        <div className="text-md mb-6 text-2xl md:hidden font-extrabold text-white m-auto">
          Query Rooms
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex">
            <button
              className="md:flex mx-5 text-xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md items-center justify-center"
              onClick={toggleModal}
            >
              Add Room
            </button>
            <a
              className="md:flex text-xl text-center text-black bg-blue-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md items-center justify-center"
              href="https://meetbygooglers.vercel.app/"
              target="_blank"
            >
              Create Room 
            </a>
          </div>
          <div className="text-md md:text-3xl hidden md:block font-bold text-white t">
            Query Rooms
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-1 dark:bg-gray-500" />
        <QueryForm modal={myModal} toggleModal={toggleModal} />
        <h2 className="text-white text-xl m-3">
          Ongoing Rooms , click to join it.
        </h2>

        {/* <div className="text-center text-white font-bold text-4xl mt-20">
          This page is under maintenance. Please check back later.
        </div> */}

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


        <div className="flex flex-wrap ">
          {urls.map((item, i) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <QueryRooms
                  title={item.topic}
                  profile={item.user.avtar?.url}
                  name={item.user.name}
                  roomLink={item.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
