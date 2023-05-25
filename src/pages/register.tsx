import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import TagInput from "react-tag-input";
import { RxCross1 } from "react-icons/rx";

const Register: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [dob, setDOB] = useState<string>("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [pricing, setPricing] = useState<number>(0);
  const subjectOptions = ["English", "Math", "Chinese", "Science"];

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubject = event.target.value;
    if (!selectedSubjects.includes(selectedSubject)) {
      setSelectedSubjects([...selectedSubjects, selectedSubject]);
    }
  };

  const handleRemoveSubject = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-400">
      <h1 className="text-3xl font-bold mb-4">Register Page</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            className="w-full border rounded py-2 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <select
            value=""
            onChange={handleSubjectChange}
            className="w-full border rounded py-2 px-3 border-gray-400 focus:outline-none focus:border-blue-500 w-full"
          >
            <option value="">Select a subject</option>
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {selectedSubjects.length > 0 && (
            <div className="flex flex-row w-full ">
              <ul className="flex flex-wrap p-2">
                {selectedSubjects.map((subject, index) => (
                  <li
                    key={index}
                    className="flex items-center py-1 px-2 border-b border-gray-300 rounded-lg bg-gray-200 m-1"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <span>{subject}</span>
                    <RxCross1
                      className="ml-2 cursor-pointer hover:text-red-500 focus:outline-none"
                      onClick={() => handleRemoveSubject(subject)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="pricing"
            className="block text-gray-700 font-bold mb-2"
          >
            Pricing:
          </label>
          <input
            type="text"
            id="pricing"
            value={pricing}
            onChange={(e) =>
              setPricing(e.target.value === "" ? 0 : parseInt(e.target.value))
            }
            className="w-full  border rounded py-2 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
