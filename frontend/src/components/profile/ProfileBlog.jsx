import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";

// import "react-crud-icons/dist/react-crud-icons.css";
// import {  } from "react-icons/fa";

export default function ProfileBlog(props) {
  const [modal, setModal] = useState(false);
  const [blogdata, setBlogdata] = useState(props.description);
  // const formattedString = blogdata.replace(/ /g, "\u00A0");
  const [bloddate, setBlogdate] = useState(props.createdAt);
  const [blogtitle, setBlogtitle] = useState(props.title);
  const id = props.id;

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const deleteBlog = () => {
    axios
      .delete("https://connect-qbpn.onrender.com/api/v1/blog/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data.message);
        props.toggleToggler();
      })
      .catch((err) => {
        console.log("Error" + err.message);
      });
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal w-full">
        <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)]">
          <div>
            <h2 className="text-white text-3xl mb-3">{blogtitle}</h2>
          </div>
          <div className="mb-1"></div> {/* One-line blank space */}
          <div className="text-gray-300">
            {blogdata.slice(0, 150)} . . .{" "}
            <span className="underline">Read More</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {bloddate.slice(0, 10)}
          </span>
        </div>
      </button>

      <Modal
        open={modal}
        onClose={toggleModal}
        center
        classNames={{
          modal:
            "bg-gray-700 p-10 rounded-lg text-white shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)]",
          closeButton: "text-white",
        }}
        styles={{
          modal: {
            // Custom styles for the modal container
            width: "80%",
            // height: "80%",
            maxWidth: "1500px",
            // maxHeight: "600px",
          },
        }}
      >
        <div className="h-[600px]  overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pr-10">
          <div className="flex px-5 justify-between items-center bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100  dark:border-gray-700 text-white text-2xl mb-3 font-bold">
            <h2 className=" ">{blogtitle}</h2>
            <button
              onClick={deleteBlog}
              className="text-xl text-center text-black bg-red-500 hover:shadow-lg hover:shadow-red-500/50 md:p-2 m-2 rounded-md"
            >
              Delete
            </button>
          </div>
          <hr className="h-px m-2 bg-gray-200 border-1 dark:bg-gray-500" />

          <div className="text-white font-googlers text-lg leading-relaxed tracking-wide">
            {/* Your long content here */}
            <pre style={{ whiteSpace: 'pre-wrap' }}>{blogdata}</pre>

            {/* {AiFillDelete}  */}
          </div>

          {/* Add more content here */}
        </div>
      </Modal>
    </div>
  );
}
