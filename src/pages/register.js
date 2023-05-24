import React, { useState } from "react";
import axios from "axios";

const register = () => {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform form submission or validation logic here

      const currentDate = new Date();
      const dob = new Date(formData.dob);
      const ageInMilliseconds = currentDate - dob;
      const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
      const ageInYears = Math.floor(ageInMilliseconds / millisecondsInYear);

      // Send POST request to the server
      const response = await axios.post("http://localhost:8080/user/add", {
        name: formData.name,
        dob: new Date(formData.dob),
        sex: formData.sex === "male" ? 1 : 0, // Set sex as 1 for male, 0 for other genders
        password: formData.password,
      });
      // Handle the response from the server
      console.log(response.data);
      if (response.data.code != 200) {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="p-8 bg-gray-100 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium" htmlFor="sex">
            Sex:
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium" htmlFor="dob">
            Date of Birth:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-lg font-medium"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-500 mt-2">User already exist.</p>}
        </div>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default register;
