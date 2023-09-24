import React from "react";

export default function NotesTable(props) {
  let { notes } = props;
  const DisplayData = notes.map((info, i) => {
    return (
      <tr key={i} className="bg-gray-700 border-b border-gray-200">
        <td className="px-6 py-3 sm:px-2 whitespace-nowrap">{i}</td>
        <td className="px-6 py-4 sm:px-2 whitespace-nowrap">{info.title}</td>
        <td className="px-6 py-4 sm:px-2 whitespace-nowrap">
          {info.author.name}
        </td>
        <td className="px-6 py-4 sm:px-2 whitespace-nowrap">
          <a href={info.notes.url} target="_blank">
            Open Note
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div
      className="bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
     p-10 text-white shadow-[0_0px_10px_rgba(8,_140,_150,_0.7)] mt-5 overflow-x-auto"
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Sr.NO
            </th>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="md:px-6 py-3 text-center text-xl sm:px-2 font-medium uppercase tracking-wider">
              Owner
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
