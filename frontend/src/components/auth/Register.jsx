import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avtar: "",
  });
  const [photoURL, setPhotoURL] = useState("/public/profile.png");
  const registerUser = (e) => {
    e.preventDefault();
    console.log(data);
    const reqData = data;
    axios
      .post("http://localhost:8000/api/v1/register", reqData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.success);
        // console.log(response);
      })
      .catch((err) => {
        console.log("Error Aayvi bhai", err);
      });
  };

  const updateData = (e) => {
    const { name, value, files } = e.target;
    if (name == "avtar" && files && files[0]) {
      const imageFile = files[0];
      setData((prevData) => ({
        ...prevData,
        [name]: imageFile,
      }));
      const url = URL.createObjectURL(imageFile);
      setPhotoURL(url);
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto pl-5 h-16 w-auto"
          src="/public/connect.png"
          alt="Your Company"
        />
        <div className="mt-5">
          <hr className="h-px bg-gray-200 border-1 dark:bg-gray-500" />
        </div>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Are you a newbie?
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={registerUser}>
          <div>
            <label className=" text-sm font-medium leading-6 text-white flex ">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                onChange={updateData}
                required
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className=" text-sm font-medium leading-6 text-white flex ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={updateData}
                required
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={updateData}
                required
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">
                Avatar
              </label>
            </div>
            <div className="mt-2 flex">
              <input
                id="avtar"
                name="avtar"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={updateData}
                required
                style={{ paddingLeft: "6px" }}
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <img
                className="mx-auto pl-5 h-10 w-auto"
                src={photoURL}
                alt="Your Company"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already member?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
