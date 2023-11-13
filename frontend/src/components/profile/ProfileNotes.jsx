import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import axios from "axios";


export default function ProfileNotes(props) {
  const { notes, toggleToggler } = props;

  const deleteNotes = (id) => {
    axios
      .delete("https://connect-qbpn.onrender.com/api/v1/deleteNote/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.message);
        toggleToggler();
      })
      .catch((err) => {
        console.log("Error" + err.message);
      });
  };

  const DisplayData = notes.map((info, i) => {
    return (
      <tr key={i} className="bg-gray-700 border-b border-gray-200">
        <td className="px-1 py-3 flex items-center justify-center">
          <button className="bg-red-500 p-2 rounded-md text-md" onClick={() => deleteNotes(info._id)}>
            <AiFillDelete />
          </button>
        </td>
        <td className="px-6 py-3 sm:px-2 whitespace-nowrap">{i}</td>
        <td className="px-6 py-4 sm:px-2 whitespace-nowrap">{info.title}</td>
        <td className="px-6 py-4 sm:px-2 whitespace-nowrap">
          <a href={info.notes.url} target="_blank" rel="noopener noreferrer">
            Open Note
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div className="bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-10 text-white shadow-[0_0px_10px_rgba(8,_140,_150,_0.7)] mt-5 overflow-x-auto">
      <h1 className='text-3xl mb-4'>Notes Uploaded By You</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              {" "}
            </th>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Sr.NO
            </th>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Preview
            </th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
