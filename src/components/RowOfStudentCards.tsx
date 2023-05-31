import React from 'react';
import StudentCard from './StudentCard';
import {Student} from './StudentCard';



interface RowProps {
  studentGroup: Student[];
  isMatchCard: boolean;
}

const RowOfStudentCards: React.FC<RowProps> = ({studentGroup, isMatchCard}) => {
  return (
      <div className="flex flex-wrap gap-4">
        {studentGroup.map((student, index) => (
          <StudentCard key={index} student={student} isMatchCard={isMatchCard} />
        ))}
      </div>
  );
};

export default RowOfStudentCards;
