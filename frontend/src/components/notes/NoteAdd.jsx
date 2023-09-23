import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function NoteAdd(props) {
  const toggleModal = () => {
    props.toggleModal(!props.modal);
  };
  return (
    <div>
      <Modal
        open={props.modal}
        onClose={toggleModal}
        center
        classNames={{
          modal:
            "bg-gray-700 p-10 rounded-lg text-white shadow-[0_0px_15px_rgba(8,_140,_150,_0.7)] text-xl",
          closeButton: "text-white",
        }}
        styles={{
          modal: {
            // Custom styles for the modal container
            width: "80%",
            // height: "80%",
            maxWidth: "800px",
            // maxHeight: "600px",
          },
        }}
      >
        <form className="space-y-6" method="POST">
          <div>
            <label
              htmlFor="title"
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
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-gray-800"
              />
            </div>
          </div>

          <div>
            <label
              htmlhtmlFor="file"
              className="text-md font-medium leading-6 text-white flex"
            >
              Upload File
            </label>
            <div className="mt-2">
              <input
                id="file"
                name="file"
                type="file"
                accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                required
                className=""
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className=" text-md font-medium leading-6 text-white flex "
            >
              Tags related to notes
            </label>
            <div className="mt-2">
              <input
                id="tags"
                name="tags"
                type="text"
                placeholder="Enter tags here"
                required
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-gray-800"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-15 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Upload
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
