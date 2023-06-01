import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTutorSection from '~/components/DisplayTutorSection';
import { User } from '~/components/StudentCard';
import NavBar from "~/components/Navbar";

export const userID = 15;
export const userIsTutor = false;

export interface ResponseData {
  code: number;
  message: string;
  data: {
    interestedUsers: User[];
    matchedUsers: User[];
    otherUsers: User[];
  };
  success: boolean;
}


const DisplayPage: React.FC = () => {

  const [interestedStudents, setInterestedStudents] = useState<User[]>([]);
  const [otherStudents, setOtherStudents] = useState<User[]>([]);

  useEffect(() => {
    fetchAndSetData();
  }, [interestedStudents, otherStudents]);

  //function to load, fetch data from backend
  function fetchAndSetData() {
    if (userIsTutor) {
      axios
        .get<ResponseData>(`http://localhost:8080/tutor/getStudentListsVo/${userID}`)
        .then((response) => {
          const { interestedUsers: interestedStudents, otherUsers: otherStudents } = response.data.data;
          setInterestedStudents(interestedStudents);
          setOtherStudents(otherStudents);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    } else {
      axios
        .get<ResponseData>(`http://localhost:8080/student/getTutorListsVo/${userID}`)
        .then((response) => {
          const { interestedUsers: interestedStudents, otherUsers: otherStudents } = response.data.data;
          setInterestedStudents(interestedStudents);
          setOtherStudents(otherStudents);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
      }
  }

  const interestedHeader = userIsTutor ? 'Interested Students' : 'Interested Tutors';
  const otherHeader = userIsTutor ? 'Other Students' : 'Other Tutors';

  return (
    <div>
      <DisplayTutorSection header={interestedHeader} displayedUsers={interestedStudents} isMatchCard={false} />
      <DisplayTutorSection header={otherHeader} displayedUsers={otherStudents} isMatchCard={false}/>
    </div>
  );
};

export default DisplayPage;
