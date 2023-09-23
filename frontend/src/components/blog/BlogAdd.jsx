import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const BlogAdd = (props) => {
  const toggleModal = () => {
    props.toggleModal(!props.modal);
  };

  return (
    <Modal
      open={props.modal}
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
      <form className="space-y-6" method="POST">
        <div>
          <label
            for="title"
            className=" text-sm font-medium leading-6 text-white flex "
          >
            Title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title here"
              required
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              for="blog"
              className="block text-sm font-medium leading-6 text-white"
            >
              Blog
            </label>
          </div>
          <div className="mt-2">
            <textarea
              id="blog"
              name="blog"
              type="textarea"
              required
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BlogAdd;
