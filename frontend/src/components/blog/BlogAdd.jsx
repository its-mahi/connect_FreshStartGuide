import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const BlogAdd = (props) => {
  const toggleModal = () => {
    props.toggleModal(!props.modal);
  };

  const updateData = (e) => {
    const myData = { name: e.target.name, value: e.target.value };
    props.updateData(myData);
  };

  const createBlog = (e) => {
    e.preventDefault();
    props.toggleSetIsSubmitted();
    props.createBlog();
    toggleModal();
  };

  return (
    <Modal
      open={props.modal}
      onClose={toggleModal}
      center
      classNames={{
        modal:
          "bg-gray-700 p-10 rounded-lg text-white shadow-[0_0px_15px_rgba(8,_140,_150,_0.7)] ",
        closeButton: "text-white",
      }}
      styles={{
        modal: {
          width: "80%",
          maxWidth: "1500px",
        },
      }}
    >
      <form className="space-y-6" onSubmit={createBlog}>
        <div>
          <label
            for="title"
            className=" text-md font-medium leading-6 text-white flex "
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
              onChange={updateData}
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-gray-800"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              for="blog"
              className="block text-md font-medium leading-6 text-white"
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
              onChange={updateData}
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset dark:bg-gray-800 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-md font-medium leading-6 text-white">
              Tags
            </label>
          </div>
          <div className="mt-2">
            <input
              id="tags"
              name="tags"
              type="text"
              required
              onChange={updateData}
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset dark:bg-gray-800 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-15 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BlogAdd;
