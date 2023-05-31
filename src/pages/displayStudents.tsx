import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTutorSection from '~/components/DisplayTutorSection';
import { Student } from '~/components/StudentCard';

// const interestedStudents = [
//   {
//     name: 'John Doe',
//     age: 30,
//     subjects: ['Math', 'Physics'],
//   },
//   {
//     name: 'Jane Smith',
//     age: 25,
//     subjects: ['English', 'History'],
//   },
// ];

export const tutorID = 13;

export interface ResponseData {
  code: number;
  message: string;
  data: {
    interestedStudents: Student[];
    matchedStudents: Student[];
    otherStudents: Student[];
  };
  success: boolean;
}


const DisplayTutor: React.FC = () => {

  const [interestedStudents, setInterestedStudents] = useState<Student[]>([]);
  const [otherStudents, setOtherStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<ResponseData>(`http://localhost:8080/tutor/getListsVo/${tutorID}`)
      .then((response) => {
        const { interestedStudents, otherStudents } = response.data.data;
        setInterestedStudents(interestedStudents);
        setOtherStudents(otherStudents);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);


  return (
    <div>
      <DisplayTutorSection header="Interested Students" students={interestedStudents} isMatchCard={false} />
      <DisplayTutorSection header="Other Students" students={otherStudents} isMatchCard={false}/>
    </div>
  );
};

export default DisplayTutor;
