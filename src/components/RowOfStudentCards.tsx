import React from 'react';
import StudentCard from './StudentCard';
import {User} from './StudentCard';



interface RowProps {
  studentGroup: User[];
  isMatchCard: boolean;
}

const RowOfStudentCards: React.FC<RowProps> = ({studentGroup, isMatchCard}) => {
  return (
      <div className="flex flex-wrap gap-4">
        {studentGroup.map((student, index) => (
          <StudentCard key={index} user={student} isMatchCard={isMatchCard} />
        ))}
      </div>
  );
};

export default RowOfStudentCards;
