import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import QueryForm from "./QueryForm";
import QueryRooms from "./QueryRooms";

export default function QueryPage(props) {
  const [myModal, setMyModal] = useState(false);
  const toggleModal = () => {
    setMyModal(!myModal);
  };

  const roomsData = [
    {
      title: "Room 1",
      userProfile: "No image",
      roomLink: "https://google.com",
    },
    {
      title: "Room 2",
      userProfile: "No image",
      roomLink: "https://google.com",
    },
    {
      title: "Room 2",
      userProfile: "No image",
      roomLink: "https://google.com",
    },
  ];

  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

      <div className="mt-24">
        <div className="text-md mb-6 text-2xl md:hidden font-extrabold text-white m-auto">
          Query Rooms
        </div>
        <div className="flex justify-between mb-2">
          <button
            className="md:flex text-xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md items-center justify-center"
            onClick={toggleModal}
          >
            Create room
          </button>
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
        {roomsData.map((item, i) => {
          return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <QueryRooms    title={item.title} profile={item.userProfile} roomLink={item.roomLink} />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
