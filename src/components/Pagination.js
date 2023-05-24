import React, { useState } from "react";
import axios from "axios";

const Pagination = ({ setUsers, page, setPage }) => {
  // const [page, setPage] = useState(1);

  const handlePageChange = async (page) => {
    setPage(page);
    try {
      const pageNumber = page; // The desired page number
      const url = `http://localhost:8080/user/getPage?page=${pageNumber}`;
      const response = await axios.get(url);
      const responseObject = response.data;
      setUsers(responseObject.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const setNext = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      const url = `http://localhost:8080/user/getPage?page=${nextPage}`;
      const response = await axios.get(url);
      const responseObject = response.data;
      setUsers(responseObject.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const setPrevious = async () => {
    const prevPage = page - 1;
    setPage(prevPage);
    try {
      const url = `http://localhost:8080/user/getPage?page=${prevPage}`;
      const response = await axios.get(url);
      const responseObject = response.data;
      setUsers(responseObject.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            onClick={() => setPrevious()}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            Previous
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange(1)}
            className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              page === 1 ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
            }`}
          >
            1
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange(2)}
            className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              page === 2 ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
            }`}
          >
            2
          </a>
        </li>
        <li>
          {/* text-blue-600 bg-blue-50, text-gray-500 bg-white  */}
          <a
            onClick={() => handlePageChange(3)}
            aria-current="page"
            className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              page === 3 ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
            }`}
          >
            3
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange(4)}
            className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              page === 4 ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
            }`}
          >
            4
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange(5)}
            className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              page === 5 ? "text-blue-600 bg-blue-50" : "text-gray-500 bg-white"
            }`}
          >
            5
          </a>
        </li>
        <li>
          <a
            onClick={() => setNext()}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
