import React from 'react';
import {Student} from './StudentCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RowOfStudentCards from './RowOfStudentCards';


interface SectionProps {
  header: String;
  students: Student[];
  isMatchCard: boolean;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, students, isMatchCard}) => {

  //students array get sliced into array of studentArrays [[a,b,c,d,e],[f,g,h,i,j],[k,l,m,n,o]]
  function sliceStudentsIntoGroups(students: Student[], groupSize: number): Student[][] {
    const studentGroups: Student[][] = [];
    for (let i = 0; i < students.length; i += groupSize) {
      const group = students.slice(i, i + groupSize);
      studentGroups.push(group);
    }
    return studentGroups;
  }

  return (
    <div className='m-10 p-10 bg-slate-50 rounded-lg'>
      <h2 className="text-3xl font-bold mb-4">{header}</h2>

      <Carousel>
        {sliceStudentsIntoGroups(students, 5).map((studentGroup, index) => (
          <RowOfStudentCards key={index} studentGroup={studentGroup} isMatchCard={isMatchCard} />
        ))}
      </Carousel>

    </div>
  );
};

export default DisplayTutorSection;
