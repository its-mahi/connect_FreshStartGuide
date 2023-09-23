import React, { useEffect, useState } from "react";
import "/styles/Model.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// import "react-crud-icons/dist/react-crud-icons.css";
// import {  } from "react-icons/fa";

export default function ProfileBlog(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(props.user);
  const [blogdata, setBlogdata] = useState(props.description);
  const formattedString = blogdata.replace(/ /g, "\u00A0");
  const [bloddate, setBlogdate] = useState(props.createdAt);
  const [blogtitle, setBlogtitle] = useState(props.title);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 shadow-[0_5px_40px_rgba(8,_112,_184,_0.7)]">
          <div>
          <h2 className="text-white text-3xl mb-3">{blogtitle}</h2>

          </div>
          
          <div className="mb-1"></div> {/* One-line blank space */}
          <div className="text-gray-300">
            {blogdata.slice(0, 150)} . . .{" "}
            <span className="underline">Read More</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {bloddate}
          </span>
        </div>
      </button>

      <Modal
        open={modal}
        onClose={toggleModal}
        center
        classNames={{
          modal:
            "bg-gray-700 p-10 rounded-lg text-white shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]",
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
        <div className="h-[600px]  overflow-y-auto text-3xl scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pr-10">
          <h2 className="text-white text-3xl mb-3 font-bold">{blogtitle}</h2>
          <hr className="h-px m-2 bg-gray-200 border-1 dark:bg-gray-500" />

          <div className="text-white font-googlers text-lg leading-relaxed tracking-wide">
            {/* Your long content here */}
            {blogdata}
            {/* {AiFillDelete}  */}
          </div>

          {/* Add more content here */}
        </div>
      </Modal>
    </div>
  );
}
