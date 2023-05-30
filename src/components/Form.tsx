import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
    <form
      onSubmit={handleSubmit}
      className="bg-customForm shadow-md rounded px-6 py-5 md:h-120 md:w-96"
    >
      <div className="flex flex-col justify-center items-center">
        <p>I am a ...</p>
        <div className="flex gap-0">
          <button
            type="button"
            className="text-white bg-studentButton  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-2.5  "
          >
            Student
          </button>
          <button
            type="button"
            className="text-white bg-tutorButton  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 "
          >
            Tutor
          </button>
        </div>
      </div>
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
        <label className="block text-gray-700 font-bold mb-2">Password:</label>
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
      </div>

      <div className="mb-2">
        <label htmlFor="pricing" className="block text-gray-700 font-bold mb-2">
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
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </form>
  );
};

export default Form;
