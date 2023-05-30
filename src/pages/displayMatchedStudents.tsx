import React from 'react';
import DisplayTutorSection from '~/components/DisplayTutorSection';
import { Student } from '~/components/StudentCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseData } from '~/pages/displayStudents';

// const matchedStudents = [
//   {
//     name: 'Jacky Chan',
//     age: 30,
//     subjects: ['Math', 'Physics'],
//   },
//   {
//     name: 'Johnny English',
//     age: 25,
//     subjects: ['English', 'History'],
//   },
// ];

const DisplayTutor: React.FC = () => {

  const [matchedStudents, setMatchedStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<ResponseData>('http://localhost:8080/tutor/getListsVo/5')
      .then((response) => {
        const { matchedStudents } = response.data;
        setMatchedStudents(matchedStudents);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  return (
    <div>
      <DisplayTutorSection header="Matched Students" students={matchedStudents} isMatchCard={true}/>
    </div>
  );
};

export default DisplayTutor;
