import React from 'react'
import { Navigate } from "react-router-dom";


export default function QueryRooms(props) {
    const { title, roomLink , profile } = props;
    const joinRoom = (link)=>{
        <a href={link} ></a>
    }

    return (
      <div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_0px_15px_rgba(8,_140,_150,_0.7)]">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg bg-white"
              src={profile}
              alt="No Image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h5>
            <a
            className="md:flex text-md text-center text-black bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 md:px-2 mt-3 py-1.5 rounded-md items-center justify-center"
            href={roomLink} target='__blank'
          >
            Join Room
          </a>
          </div>
        </div>
      </div>
    );
}
