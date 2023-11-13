import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";

export default function QueryForm(props) {
  const [data, setData] = useState({
    topic: "",
    url: "",
  });

  const toggleModal = () => {
    props.toggleModal(!props.modal);
  };

  const updateData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqData = data;
    // console.log(reqData);
    axios
      .post("https://connect-qbpn.onrender.com/api/v1/submitlink", reqData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
      });
  };

  return (
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
          width: "80%",
          maxWidth: "800px",
        },
      }}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
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
              name="topic"
              type="text"
              placeholder="Enter title here"
              required
              onChange={updateData}
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-gray-800"
            />
          </div>

          <label
            htmlFor="url"
            className=" text-md font-medium leading-6 pt-6 text-white flex "
          >
            URL
          </label>
          <div className="mt-2">
            <input
              id="url"
              name="url"
              type="text"
              onChange={updateData}
              placeholder="Enter url here"
              required
              style={{ paddingLeft: "6px" }}
              className="block w-full rounded-md border-0 py-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            className="flex w-15 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-4"
          >
            Start Video Room
          </button>
        </div>
      </form>
    </Modal>
  );
}
