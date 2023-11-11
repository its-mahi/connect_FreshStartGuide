import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Navigate } from "react-router-dom";


const BlogAdd = (props) => {
  const toggleModal = () => {
    props.toggleModal(!props.modal);
  };

  return (
    <>
      {/* {!props.isLoggedIn && <Navigate to="/login" />} */}

    <Modal
      open={props.modal}
      onClose={toggleModal}
      center
      classNames={{
        modal:
          "bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 p-10 text-white shadow-[0_0px_15px_rgba(8,_140,_150,_0.7)] ",
        closeButton: "text-white",
      }}
      styles={{
        modal: {
          width: "80%",
          maxWidth: "1500px",
        },
      }}
    >
    <h1 className="text-center text-3xl ">  Login required </h1>
    </Modal>
    </>
  );
};

export default BlogAdd;
