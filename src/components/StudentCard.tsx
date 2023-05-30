import React from 'react';

export interface Student {
  name: string;
  age: number;
  subjects: string[];
}

interface StudentCardProps {
  student: Student;
  isMatchedCard: boolean;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, isMatchedCard }) => {
  const handleAccept = () => {
    console.log('Student accepted');
  };

  const handleReject = () => {
    console.log('Student rejected');
  };

  function handleChat(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  function handleUnmatch(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className= "flex flex-col p-4 w-72 bg-indigo-100 rounded-lg shadow-lg h-48">

      <h2 className="my-1">{student.name}</h2>
      <p className="font-light">{student.age} y.o.</p>
      <p className="font-light">{student.subjects.join(', ')}</p>
      <div className="mt-auto">
        {isMatchedCard ? (
          <div className="flex justify-between">
            <button className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300" onClick={handleChat}>Chat</button>
            <button className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-gray-200 hover:bg-gray-300" onClick={handleUnmatch}>Unmatch</button>
          </div>
        ) : (
          <div className="flex justify-between">
            <button className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300" onClick={handleAccept}>Yes</button>
            <button className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300" onClick={handleReject}>No</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default StudentCard;
