import { NextPage } from "next";
import { useState } from "react";
import SubjectsDisplay from "~/components/SubjectsDisplay";

const RegistorTutor: NextPage = () => {
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

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };
  return (
    <div className="w-screen h-screen bg-customBg flex flex-col items-center justify-center">
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Pricing Range
      </label>
      <input
        id="default-range"
        type="range"
        value={value}
        min={0}
        max={200}
        step={5}
        onChange={handleSliderChange}
        className="md:w-2/3 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
      />
      <p className="mt-2">Price: {value}</p>

      <SubjectsDisplay title="Primary School" subjects={subjects1} />
      <SubjectsDisplay title="Secondary School" subjects={subjects2} />
      <SubjectsDisplay title="Junior College" subjects={subjects3} />
      <div className="w-full md:w-2/3 px-4">
        <label className="block text-xl font-bold text-gray-700 mt-4">
          Additional Information
        </label>
        <textarea
          rows={3}
          className="mt-3 md:w-1/3 block shadow-sm sm:text-sm rounded-sm focus:outline-none focus:ring-0"
          placeholder="Enter additional information"
        ></textarea>
      </div>
    </div>
  );
};
export default RegistorTutor;
