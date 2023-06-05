import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { userID, userIsTutor } from '~/pages/displayPage';

const NavBar: React.FC = () => {

  const router = useRouter();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (

    <nav className="bg-darkbrown">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/displayPage" className="flex items-center">
              {/* <img src="" className="h-8 mr-3" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SwipeTutor</span>
          </a>
          <div className="flex items-center md:order-2">
              <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 ring-gray-500" id="user-menu-button" onClick={toggleDropdown} aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-9 h-9 rounded-full" src="/snowy.png" alt="user photo"></img>
              </button>
              {/* <!-- Dropdown menu --> */}
              {isDropdownOpen && <div className="absolute top-10 right-5 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">User ID: {userID}</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">User role: {userIsTutor ? "Tutor" : "Student"}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>}
          </div>

          {/* middle portion */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {/*bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
              <li>
              <a href="/displayPage" className={`block py-2 pl-3 pr-4 md:p-0 ${router.pathname === "/displayPage" ? "md:dark:text-amber-200" : "text-white"}`} aria-current="page">Browse</a>
              </li>
              <li>
                <a href="/displayMatchedPage" className={`block py-2 pl-3 pr-4 md:p-0 ${router.pathname === "/displayMatchedPage" ? "md:dark:text-amber-200" : "text-white"}`}>Matches</a>
              </li>
              <li>
                <a href="/register" className={`block py-2 pl-3 pr-4 md:p-0 ${router.pathname === "/register" ? "md:dark:text-amber-200" : "text-white"}`}>Register</a>
              </li>
              <li>
                <a href="/" className={`block py-2 pl-3 pr-4 md:p-0 ${router.pathname === "/" ? "md:dark:text-amber-200" : "text-white"}`}>Login</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>



  );
};

export default NavBar;
