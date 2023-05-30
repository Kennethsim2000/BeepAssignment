import React from 'react';
import StudentCard from './StudentCard';
import {Student} from './StudentCard';



interface SectionProps {
  header: String;
  students: Student[];
  isMatchCard: boolean;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, students, isMatchCard}) => {
  return (
    <div className='m-10 p-10 bg-slate-50 rounded-lg'>
      <h2 className="text-3xl font-bold mb-4">{header}</h2>
      <div className="flex flex-wrap gap-4">
        {students.map((student, index) => (
          isMatchCard ?
          <StudentCard key={index} student={student} isMatchedCard={true} /> :
          <StudentCard key={index} student={student} isMatchedCard={false} />
        ))}
      </div>
    </div>
  );
};

export default DisplayTutorSection;
