import React, { useState } from "react";

interface SubjectsDisplayProps {
  title: string;
  subjects: string[];
  selectedSubjects: string[];
  setSelectedSubjects: (value: string[]) => void;
}

const SubjectsDisplay: React.FC<SubjectsDisplayProps> = ({
  title,
  subjects,
  selectedSubjects,
  setSelectedSubjects,
}) => {
  const handleSubjectClick = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const retrieveSubject = (subject: string) => {
    const arr = subject.split("-");
    return arr[1];
  };
  return (
    <div className="w-full md:w-2/3 px-4 mt-4">
      <h3 className="mb-2 text-xl font-bold text-gray-700">{title}</h3>
      <ul className="grid grid-cols-4 gap-2 md:gap-4 text-sm font-medium text-gray-900">
        {subjects.map((subject, index) => (
          <li
            key={index}
            className={`rounded-xl hover:cursor-pointer px-2 hover:bg-blue-500 hover:text-white transition-colors duration-800 ${
              selectedSubjects.includes(subject)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
            onClick={() => handleSubjectClick(subject)}
          >
            <div className="flex items-center justify-center py-2 space-x-2">
              <div className="text-sm font-medium items-center justify-center">
                {retrieveSubject(subject)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectsDisplay;
