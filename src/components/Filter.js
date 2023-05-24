import React, { useState } from "react";
import axios from "axios";

const Filter = ({ filterData, setFilterData, setUsers }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform search logic using formData
    console.log(filterData);
    if (filterData.name != "") {
      try {
        const url = "http://localhost:8080/user/getByName";
        const response = await axios.post(url, {
          name: filterData.name,
        });
        setUsers(response.data.data.list);
      } catch (error) {
        console.log(error);
      }
    } else if (filterData.sex != 2) {
      try {
        const url = "http://localhost:8080/user/getByGender";
        const response = await axios.post(url, {
          gender: filterData.sex,
        });
        setUsers(response.data.data.list);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const url = "http://localhost:8080/user/getByDob";
        const response = await axios.post(url, {
          startDate: new Date(filterData.startDate),
          endDate: new Date(filterData.endDate),
        });
        setUsers(response.data.data.list);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleReset = async (e) => {
    try {
      const response = await axios.get("http://localhost:8080/user/getAll");
      setUsers(response.data.data.list);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <form
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={filterData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />

        <select
          name="sex"
          value={filterData.sex}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value={2}>Select Gender</option>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select>

        <input
          type="date"
          name="startDate"
          value={filterData.startDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />

        <input
          type="date"
          name="endDate"
          value={filterData.endDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Filter;
