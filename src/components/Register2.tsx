import { useState } from "react";
import SubjectsDisplay from "./SubjectsDisplay";

const Register: React.FC = () => {
  const subjects1 = ["English", "Math", "Science", "Chinese"];
  const subjects2 = [
    "English",
    "Math",
    "Chemistry",
    "History",
    "Chinese",
    "Geography",
    "English Literature",
  ];
  const subjects3 = [
    "General Paper",
    "History",
    "Math",
    "Chinese",
    "Chemistry",
    "Physics",
    "Biology",
    "Economics",
  ];
  const [value, setValue] = useState<number>(50);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <label
        htmlFor="large-range"
        className=" mt-16 mb-2 text-xl font-bold text-gray-700 "
      >
        Pricing Range
      </label>
      <input
        id="large-range"
        type="range"
        value={value}
        min={0}
        max={100}
        step={10}
        onChange={handleSliderChange}
        className="range-lg md:w-2/3  h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer "
      />

      <p className="mt-2 text-gray-700 ">Price: ${value}/h</p>

      <SubjectsDisplay
        title="Primary School"
        subjects={subjects1}
        selectedSubjects={selectedSubjects}
        setSelectedSubjects={setSelectedSubjects}
      />
      <SubjectsDisplay
        title="Secondary School"
        subjects={subjects2}
        selectedSubjects={selectedSubjects}
        setSelectedSubjects={setSelectedSubjects}
      />
      <SubjectsDisplay
        title="Junior College"
        subjects={subjects3}
        selectedSubjects={selectedSubjects}
        setSelectedSubjects={setSelectedSubjects}
      />
      <div className="w-full md:w-2/3 px-4">
        <label className="block text-xl font-bold text-gray-700 mt-4">
          Additional Information
        </label>
        <textarea
          rows={3}
          className="mt-3 md:w-2/3 block shadow-sm sm:text-sm rounded-sm text-md focus:outline-none focus:ring-0 px-3 py-3"
          placeholder="Enter additional information"
        ></textarea>
        <button className="bg-customIntro hover:bg-blue-700 mt-8 mb-8 text-xl font-bold text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
