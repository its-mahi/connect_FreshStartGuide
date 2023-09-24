import React from 'react'
import explore from '../../assets/explore.jpeg'

export default function Cards() {
  return (
    <div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-14 h-14 mb-3 rounded-full shadow-lg" src={explore} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Explore Blogs</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 text-justify">Explore our diverse collection of blogs created by students for students. Dive into a world of insights, knowledge, and experiences that cover a wide range of topics, from academic tips and career advice to lifestyle hacks and personal growth stories. Whether you're seeking inspiration, guidance, or simply a break from your studies, our blog section is a hub of valuable content crafted to enrich your student journey.</span>
       
    </div>
</div>

    </div>
  )
}
