import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import NoteAdd from "./NoteAdd";
import NotesTable from "./NotesTable";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function NotesPage(props) {
  const [notes, setNotes] = useState([]);

  const [data, setData] = useState({
    title: "",
    file: "",
  });
  const [fileURL, setFileURL] = useState("#");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [myModal, setMyModal] = useState(false);

  const createNote = () => {
    const reqData = data;
    axios
      .post("https://connect-qbpn.onrender.com/api/v1/uploadNote", reqData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.success);
      });
  };
  const updateData = (newData) => {
    const { name, value, files } = newData;
    if (name == "file" && files && files[0]) {
      const noteFile = files[0];
      console.log(noteFile);
      setData((prevData) => ({
        ...prevData,
        [name]: noteFile,
      }));
      const url = URL.createObjectURL(noteFile);
      setFileURL(url);
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    const fetchNote = () => {
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/getAllNotes", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.notes);
          setNotes(response.data.notes);
        });
    };
    fetchNote();
    document.querySelector("#default-search").value = "";
  }, [isSubmitted]);

  const toggleSetIsSubmitted = () => {
    let myBool = isSubmitted;
    setIsSubmitted(!myBool);
  };
  const toggleModal = () => {
    setMyModal(!myModal);
  };
  const searchNote = (e) => {
    const reqData = { search: e.target.value };
    console.log(reqData);
    axios
      .post("https://connect-qbpn.onrender.com/api/v1/blog/search", reqData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setNotes(response.data.note);
      });
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
              // onChange={searchNote}
              required
            />
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-1 dark:bg-gray-500" />
        <NoteAdd
          modal={myModal}
          toggleModal={toggleModal}
          updateData={updateData}
          createNote={createNote}
          isSubmitted={isSubmitted}
          toggleSetIsSubmitted={toggleSetIsSubmitted}
        />
        <NotesTable notes={notes} />
      </div>
    </>
  );
}
