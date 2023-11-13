import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function BlogCard(props) {
  const [modal, setModal] = useState(false);
  const name = props.user;
  const blogdata = props.description;
  const formattedString = blogdata.replace(/ /g, "\u00A0");
  const blogdate = props.createdAt;
  const blogtitle = props.title;
  const avtar = props.userAvtar.url;
  const [showFullText, setShowFullText] = useState(false);
  // console.log("in BlogCard" + props.title);
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
      <button onClick={toggleModal} className="btn-modal w-full mt-10">
        <div
          className="bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
     p-10 text-white dark:border-gray-700 shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)]"
        >
          <div className="flex items-start">
            <img
              className="w-10 mr-4  rounded-full shadow-lg"
              src={avtar}
              alt="Bonnie image"
            />
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
          <h2 className="text-white text-3xl mb-3">{blogtitle}</h2>
          <div className="mb-1"></div> {/* One-line blank space */}
          <div className="text-gray-300 mb-5">
            {blogdata.slice(0, 150)} . . .{" "}
          </div>
          <div className="flex-col flex space-y-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 ">
              {blogdate.slice(0, 10)}
            </span>
            <span className="text-sm text-gray-400 ">{`(click to view)`}</span>
          </div>
        </div>
      </button>

      <Modal
        open={modal}
        onClose={toggleModal}
        center
        classNames={{
          modal:
            "bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 p-10 text-white shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)]",
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
        <div className="flex items-start mb-3">
            <img
              className="w-8 mr-4 mt-1 rounded-full shadow-lg"
              src={avtar}
              alt="Bonnie image"
            />
            <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
          <h2 className="text-white text-3xl mb-3 font-bold">{blogtitle}</h2>
          <hr className="h-px m-2 bg-gray-200 border-1 dark:bg-gray-500" />

          <div className="text-white font-googlers text-lg leading-relaxed tracking-wide">
            {/* Your long content here */}
            <pre style={{ whiteSpace: 'pre-wrap' }}>{blogdata}</pre>
            {/* {formattedString} */}
          </div>

          {/* Add more content here */}
        </div>
      </Modal>
    </div>
  );
}
