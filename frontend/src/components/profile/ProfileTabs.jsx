import React, { useState } from 'react';

const ProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="mt-6 space-x-4 flex justify-center">
    <button
      onClick={() => onTabChange('blogs')}
      className={`${
        activeTab === 'blogs'
          ? 'bg-blue-400 text-white'
          : 'bg-gray-200 text-gray-700'
      } py-2 px-4 rounded-md text-md transition transform hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md`}
    >
      Blogs
    </button>
    <button
      onClick={() => onTabChange('notes')}
      className={`${
        activeTab === 'notes'
          ? 'bg-blue-400 text-white'
          : 'bg-gray-200 text-gray-700'
      } py-2 px-4 rounded-md text-md transition transform hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md`}
    >
      Notes
    </button>
    <button
      onClick={() => onTabChange('rooms')}
      className={`${
        activeTab === 'rooms'
          ? 'bg-blue-400 text-white'
          : 'bg-gray-200 text-gray-700'
      } py-2 px-4 rounded-md text-md transition transform hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md`}
    >
      Rooms
    </button>
  </div>
  );
};

export default ProfileTabs;
