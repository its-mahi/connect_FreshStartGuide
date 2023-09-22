import React, { useState } from "react";
import Card from "react-animated-3d-card";
import "/styles/Model.css";

export default function BlogCard() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Kris Patel");
  const [blog, setBlog] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea. "
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
      <button
        onClick={toggleModal}
        className="btn-modal bg-gray-900 border-2 rounded-xl w-full
         "
      >
        <div className="text-white  h-80 md:text-3xl flex-col justify-between items-center text-sm">
          <div className="flex justify-between p-4">
            <div className="flex items-center">
              <div className="border-2 h-6 w-6 m-2 p-1"></div>
              <div>{name}</div>
            </div>

            <div className="flex items-center">{bloddate}</div>
          </div>
          <div className="m-10">{blog.slice(0, 100)} ...</div>
        </div>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content border-2 radius-xl">
            <button className="close-modal text-red-600" onClick={toggleModal}>
              CLOSE
            </button>
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <div className="border-2 h-6 w-6 m-2 p-1"></div>
                <div>{name}</div>
              </div>

              <div className="flex items-center">{bloddate}</div>
            </div>
            <h2>Hello Modal</h2>
            <p>{blog}</p>
            
          </div>
        </div>
      )}
    </>
  );
}
