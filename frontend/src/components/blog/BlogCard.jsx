import React, { useEffect, useState } from "react";
import "/styles/Model.css";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function BlogCard(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(props.user);
  const [blogdata, setBlogdata] = useState(props.description);
  const formattedString = blogdata.replace(/ /g, "\u00A0");
  const [blogdate, setBlogdate] = useState(props.createdAt);
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
      <button onClick={toggleModal} className="btn-modal w-full">
        <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 shadow-[0_5px_40px_rgba(8,_112,_184,_0.7)]">
          <div className="flex items-start">
            <img
              className="w-8 mr-4 mb-3 rounded-full shadow-lg"
              src="/public/profile.png"
              alt="Bonnie image"
            />
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
          <h2 className="text-white text-3xl mb-3">{blogtitle}</h2>
          <div className="mb-1"></div> {/* One-line blank space */}
          <div className="text-gray-300">
            {blogdata.slice(0, 150)} . . .{" "}
            <span className="underline">Read More</span>
          </div>
          <span class="text-sm text-gray-500 dark:text-gray-400">
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
            {/* {blogdata} */}
            {formattedString}
          </div>

          {/* Add more content here */}
        </div>
      </Modal>
    </div>
  );
}
