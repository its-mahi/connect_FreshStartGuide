import React, { useEffect, useState } from "react";
import "/styles/Model.css";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function BlogCard() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Kris Patel");
  const [blogdata, setBlogdata] = useState(
    "      WWWWLorem ipsum dolor sit amet consectetur adipisicing elit. Providentperferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. "
  );

  const [bloddate, setBlogdate] = useState("69-69-69");
  const [blogtitle, setBlogtitle] = useState("This is my title");

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
        <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 shadow-[0_5px_40px_rgba(8,_112,_184,_0.7)]">
          <div class="flex items-start">
            <img
              class="w-8 h-8 mr-4 mb-3 rounded-full shadow-lg"
              src="/public/vite.svg"
              alt="Bonnie image"
            />
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              Kris Patel
            </h5>
          </div>
          <h2 className="text-white text-3xl mb-3">{blogtitle}</h2>
          <div class="mb-1"></div> {/* One-line blank space */}
          <div class="text-gray-300">
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
          <hr class="h-px m-2 bg-gray-200 border-1 dark:bg-gray-500" />

          <p className="text-white text-lg leading-relaxed tracking-wide">
            {/* Your long content here */}
            {blogdata}
            {blogdata}
          </p>

          {/* Add more content here */}
        </div>
      </Modal>
    </div>
  );
}
