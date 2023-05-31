import React from 'react';
import {User} from './StudentCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RowOfStudentCards from './RowOfStudentCards';


interface SectionProps {
  header: String;
  users: User[];
  isMatchCard: boolean;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, users, isMatchCard}) => {

  //students array get sliced into array of studentArrays [[a,b,c,d,e],[f,g,h,i,j],[k,l,m,n,o]]
  function sliceStudentsIntoGroups(users: User[], groupSize: number): User[][] {
    const userGroups: User[][] = [];
    for (let i = 0; i < users.length; i += groupSize) {
      const group = users.slice(i, i + groupSize);
      userGroups.push(group);
    }
    return userGroups;
  }

  return (
    <div className='m-10 p-10 bg-slate-50 rounded-lg'>
      <h2 className="text-3xl font-bold mb-4">{header}</h2>

      <Carousel>
        {sliceStudentsIntoGroups(users, 5).map((userGroup, index) => (
          <RowOfStudentCards key={index} studentGroup={userGroup} isMatchCard={isMatchCard} />
        ))}
      </Carousel>

    </div>
  );
};

export default DisplayTutorSection;
