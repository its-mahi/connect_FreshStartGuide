import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import QueryForm from "./QueryForm";
import QueryRooms from "./QueryRooms";
import axios from "axios";

export default function QueryPage(props) {
  const [myModal, setMyModal] = useState(false);
  const toggleModal = () => {
    setMyModal(!myModal);
  };
  const [urls, setUrls] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const fetchUrls = () => {
      axios
        .get("http://localhost:8000/api/v1/allLink", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.links);
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
              Create room
            </button>
            <a
              className="md:flex text-xl text-center text-black bg-blue-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md items-center justify-center"
              href="http://localhost:9000"
              target="_blank"
            >
              Add to list
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
