import React, { useState } from "react";
import "/styles/Model.css";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function BlogCard() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Kris Patel");
  const [blogdata, setBlogdata] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. "
  );

  const [bloddate, setBlogdate] = useState("69-69-69");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <div class="bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 w-[42rem] p-5 shadow-[0_5px_40px_rgba(8,_112,_184,_0.7)]">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/public/vite.svg"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Kris Patel
            </h5>
            <div class="flex mt-4 space-x-3 md:mt-6 text-gray-300">
              {blogdata.slice(0, 100)} . . .
            </div>
          </div>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {bloddate}
          </span>
        </div>
      </button>


      <Modal open={modal} onClose={toggleModal}  center classNames={{
          modal: "bg-gray-700 p-10 rounded-lg text-white shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]",
          closeButton: "text-white",
        }}   
        styles={{
          modal: { // Custom styles for the modal container
            width: "80%", 
            // height: "80%", 
            maxWidth: "1500px", 
            // maxHeight: "600px",
          },
        }}  
        
      >
          <div className="h-[600px]  overflow-y-auto text-3xl scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200"> 
          <h2 className="text-white">Custom Styled Modal</h2>
          <p className="text-white">
            {/* Your long content here */}
            {blogdata}
            {blogdata}
          </p>
          {/* Add more content here */}
        </div>
      </Modal>
    </>
  );
}
