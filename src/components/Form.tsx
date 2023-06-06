import axios from "axios";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

interface FormDisplayProps {
  name: string;
  password: string;
  email: string;
  dob: string;
  number: number;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setDOB: (dob: string) => void;
  setNumber: (number: number) => void;
  setTutorDone: (ready: boolean) => void;
}
const Form: React.FC<FormDisplayProps> = ({
  name,
  password,
  email,
  dob,
  number,
  setName,
  setPassword,
  setEmail,
  setDOB,
  setNumber,
  setTutorDone,
}) => {
  const [isStudent, setIsStudent] = useState<Boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: name,
      password: password,
      age: new Date(dob),
    };

    console.log(formData);
    if (isStudent) {
      // try {
      //   const response = await axios.post(
      //     "http://localhost:8080/student/add",
      //     formData
      //   );
      //   console.log(response.data); // Handle the response as needed
      //   if (response.data.code == 200) {
      //     window.alert("Added students successfully");
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    } else {
      setTutorDone(true);
      // try {
      //   const response = await axios.post(
      //     "http://localhost:8080/tutor/add",
      //     formData
      //   );
      //   console.log(response.data); // Handle the response as needed
      // } catch (error) {
      //   console.error(error);
      // }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-customForm shadow-md rounded px-6 py-5 md:h-120 md:w-96"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-700 font-semibold text-lg">I am a ...</p>
        <div className="flex gap-0">
          <button
            type="button"
            className={`text-white  ${
              isStudent ? "bg-tutorButton" : "bg-studentButton"
            } focus:outline-none   font-medium  text-sm px-5 py-2.5  `}
            onClick={() => setIsStudent(true)}
          >
            Student
          </button>
          <button
            type="button"
            className={`text-white ${
              isStudent ? "bg-studentButton" : "bg-tutorButton"
            }  focus:outline-none   font-medium text-sm px-5 py-2.5 `}
            onClick={() => setIsStudent(false)}
          >
            Tutor
          </button>
        </div>
      </div>

      <div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-1.5 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded py-1.5 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded py-1.5 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <div className="mb-2">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full border rounded py-1.5 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pricing"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Number:
            </label>
            <input
              type="text"
              id="pricing"
              value={number}
              onChange={(e) =>
                setNumber(e.target.value === "" ? 0 : parseInt(e.target.value))
              }
              className="w-full  border rounded py-2 px-3 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* <div className="mb-2">
          <label
            htmlFor="pricing"
            className="block text-gray-700 font-bold mb-2"
          >
            Subjects: (Can select more than one)
          </label>
          <select
            value=""
            onChange={handleSubjectChange}
            className="w-full border rounded py-1.5 px-3 border-gray-400 focus:outline-none focus:border-blue-500 w-full"
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
        </div> */}
      </div>

      <button
        type="submit"
        className="bg-customIntro hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </form>
  );
};

export default Form;
