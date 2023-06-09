import { useState } from "react";
import SubjectsDisplay from "./SubjectsDisplay";
import axios from "axios";

interface RegisterStudentProps {
  name: string;
  password: string;
  email: string;
  number: number;
  gender: string;
  school: string;
}
const RegisterTutor: React.FC<RegisterStudentProps> = ({
  name,
  password,
  email,
  number,
  gender,
  school,
}) => {
  const subjects1 = [
    "Primary-English",
    "Primary-Math",
    "Primary-Science",
    "Primary-Chinese",
  ];
  const subjects2 = [
    "Secondary-English",
    "Secondary-Math",
    "Secondary-Chemistry",
    "Secondary-History",
    "Secondary-Chinese",
    "Secondary-Geography",
    "Secondary-English Literature",
  ];
  const subjects3 = [
    "JC-General Paper",
    "JC-History",
    "JC-Math",
    "JC-Chinese",
    "JC-Chemistry",
    "JC-Physics",
    "JC-Biology",
    "JC-Economics",
  ];
  const [price, setPrice] = useState<number>(50);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [info, setInfo] = useState<string>("");

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setPrice(newValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: name,
      password: password,
      email: email,
      number: number,
      gender: gender,
      pricing: price,
      selectedSubjects: selectedSubjects,
      school: school,
    };

    console.log(formData);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/tutor/add",
    //     formData
    //   );
    //   console.log(response.data); // Handle the response as needed
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center flex-col"
    >
      <label
        htmlFor="large-range"
        className=" mt-16 mb-2 text-xl font-bold text-gray-700 "
      >
        Pricing Range
      </label>
      <input
        id="large-range"
        type="range"
        value={price}
        min={0}
        max={100}
        step={10}
        onChange={handleSliderChange}
        className="range-lg md:w-2/3  h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer "
      />

      <p className="mt-2 text-gray-700 ">Price: ${price}/h</p>

      {school == "primary school" && (
        <SubjectsDisplay
          title="Primary School"
          subjects={subjects1}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
        />
      )}

      {school == "secondary school" && (
        <SubjectsDisplay
          title="Secondary School"
          subjects={subjects2}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
        />
      )}
      {school == "junior college" && (
        <SubjectsDisplay
          title="Junior College"
          subjects={subjects3}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
        />
      )}

      <div className="w-full md:w-2/3 px-4">
        <label className="block text-xl font-bold text-gray-700 mt-4">
          Additional Information
        </label>
        <textarea
          rows={3}
          className="mt-3 md:w-2/3 block shadow-sm sm:text-sm rounded-sm text-md focus:outline-none focus:ring-0 px-3 py-3"
          placeholder="Enter additional information"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-customIntro hover:bg-blue-700 mt-8 mb-8 text-xl font-bold text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterTutor;
