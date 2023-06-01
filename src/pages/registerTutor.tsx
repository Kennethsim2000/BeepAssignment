import { NextPage } from "next";
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
  return (
    <div className="w-screen h-screen bg-customBg flex flex-col items-center justify-center">
      <SubjectsDisplay title="Primary School" subjects={subjects1} />
      <SubjectsDisplay title="Secondary School" subjects={subjects2} />
      <SubjectsDisplay title="Junior College" subjects={subjects3} />
    </div>
  );
};
export default RegistorTutor;
