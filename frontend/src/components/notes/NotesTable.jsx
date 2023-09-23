import React from 'react';

export default function NotesTable(props) {
  let { notesData } = props;
  const DisplayData = notesData.map((info) => {
    return (
      <tr key={info.id} className="bg-gray-700 border-b border-gray-200">
        <td className="px-6 py-3 whitespace-nowrap">{info.id}</td>
        <td className="px-6 py-4 whitespace-nowrap">{info.notes_title}</td>
        <td className="px-6 py-4 whitespace-nowrap">{info.notes_owner}</td>
        <td className="px-6 py-4 whitespace-nowrap">{info.notes_location}</td>
      </tr>
    );
  });

  return (
    <div className='bg-gray-700 p-10 rounded-lg text-white shadow-[0_0px_10px_rgba(8,_140,_150,_0.7)] mt-5'>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
              Sr.NO
            </th>
            <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
              Owner
            </th>
            <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
              Preview
            </th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
