import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import NoteAdd from "./NoteAdd";
import NotesTable from "./NotesTable";
import { Navigate } from "react-router-dom";

export default function NotesPage(props) {
  const notesData = [
    {
      id: "1",
      notes_title: "Note 1",
      notes_owner: "Kris Patel",
      notes_location: "/source",
    },
    {
      id: "2",
      notes_title: "Note 2",
      notes_owner: "Kris ki behen",
      notes_location: "/source",
    },
    {
      id: "3",
      notes_title: "Note 3",
      notes_owner: "Kris ka bhai",
      notes_location: "/source",
    },
  ];

  const [myModal, setMyModal] = useState(false);
  const toggleModal = () => {
    setMyModal(!myModal);
  };
  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

      <div className="mt-24">
        <div className="text-md mb-6 text-2xl md:hidden font-extrabold text-white">
          Notes
        </div>
        <div className="flex justify-between mb-2">
          <button
            className="hidden md:flex text-xl text-center text-black bg-green-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 rounded-md items-center justify-center"
            onClick={toggleModal}
          >
            <FaCloudUploadAlt className="mr-2" />
            Upload Notes
          </button>
          <div className="text-md md:text-3xl hidden md:block font-bold text-white">
            Notes
          </div>

          <button className="mr-2 text-sm w-12 h-12 font-bold flex items-center justify-center md:hidden text-center bg-green-500 hover:shadow-lg hover:bg-green-600 md:p-2 rounded-full">
            <FaCloudUploadAlt />
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
              className="ml-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark    :text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Notes, Topics..."
              required
            />
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-1 dark:bg-gray-500" />
        <NoteAdd modal={myModal} toggleModal={toggleModal} />
        <NotesTable notesData={notesData} />
      </div>
    </>
  );
}
