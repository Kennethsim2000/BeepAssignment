import React from 'react';
import DisplayTutorSection from '~/components/DisplayTutorSection';
import { User } from '~/components/StudentCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseData, userIsTutor } from '~/pages/displayPage';
import { userID } from '~/pages/displayPage';


const DisplayTutor: React.FC = () => {

  const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchAndSetData();
  }, [matchedUsers]);

  function fetchAndSetData() {
    if (userIsTutor) {
      axios
        .get<ResponseData>(`http://localhost:8080/tutor/getStudentListsVo/${userID}`)
        .then((response) => {
          const { matchedUsers: matchedStudents } = response.data.data;
          setMatchedUsers(matchedStudents);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    } else {
      axios
        .get<ResponseData>(`http://localhost:8080/student/getTutorListsVo/${userID}`)
        .then((response) => {
          const { matchedUsers: matchedTutors } = response.data.data;
          setMatchedUsers(matchedTutors);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }

  return (
    <div>
      <DisplayTutorSection header="Matched Students" displayedUsers={matchedUsers} isMatchCard={true}/>
    </div>
  );
};

export default DisplayTutor;
