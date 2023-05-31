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

export const userID = 13;
export const userIsTutor = true;

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


const DisplayTutor: React.FC = () => {

  const [interestedUsers, setInterestedUsers] = useState<User[]>([]);
  const [otherUsers, setOtherUsers] = useState<User[]>([]);

  useEffect(() => {
    // if (userIsTutor) {
      axios
        .get<ResponseData>(`http://localhost:8080/tutor/getListsVo/${userID}`)
        .then((response) => {
          const { interestedUsers, otherUsers } = response.data.data;
          setInterestedUsers(interestedUsers);
          setOtherUsers(otherUsers);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    // } else {
    //   axios
    //     .get<ResponseData>(`http://localhost:8080/student/getListsVo/${userID}`)
    //     .then((response) => {
    //       const { interestedUsers, otherUsers } = response.data.data;
    //       setInterestedUsers(interestedUsers);
    //       setOtherUsers(otherUsers);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching tutor data:', error);
    //     });
    //   }
  }, []);

  const interestedHeader = userIsTutor ? 'Interested Students' : 'Interested Tutors';
  const otherHeader = userIsTutor ? 'Other Students' : 'Other Tutors';

  return (
    <div>
      <DisplayTutorSection header={interestedHeader} users={interestedUsers} isMatchCard={false} />
      <DisplayTutorSection header={otherHeader} users={otherUsers} isMatchCard={false}/>
    </div>
  );
};

export default DisplayTutor;
