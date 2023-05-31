import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTutorSection from '~/components/DisplayTutorSection';
import { User } from '~/components/StudentCard';

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

export const userID = 12;
export const userIsTutor = true;

export interface ResponseData {
  code: number;
  message: string;
  data: {
    interestedStudents: User[];
    matchedStudents: User[];
    otherStudents: User[];
  };
  success: boolean;
}


const DisplayTutor: React.FC = () => {

  const [interestedStudents, setInterestedStudents] = useState<User[]>([]);
  const [otherStudents, setOtherStudents] = useState<User[]>([]);

  useEffect(() => {
    if (userIsTutor) {
      axios
        .get<ResponseData>(`http://localhost:8080/tutor/getListsVo/${userID}`)
        .then((response) => {
          const { interestedStudents, otherStudents } = response.data.data;
          setInterestedStudents(interestedStudents);
          setOtherStudents(otherStudents);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    } else {
      axios
        .get<ResponseData>(`http://localhost:8080/student/getListsVo/${userID}`)
        .then((response) => {
          const { interestedStudents, otherStudents } = response.data.data;
          setInterestedStudents(interestedStudents);
          setOtherStudents(otherStudents);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
      }
  }, []);

  const interestedHeader = userIsTutor ? 'Interested Students' : 'Interested Tutors';
  const otherHeader = userIsTutor ? 'Other Students' : 'Other Tutors';

  return (
    <div>
      <DisplayTutorSection header={interestedHeader} displayedUsers={interestedStudents} isMatchCard={false} />
      <DisplayTutorSection header={otherHeader} displayedUsers={otherStudents} isMatchCard={false}/>
    </div>
  );
};

export default DisplayTutor;
