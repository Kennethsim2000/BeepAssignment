import React from 'react';
import {CardType, User} from './StudentCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RowOfCards from './RowOfStudentCards';


interface SectionProps {
  header: String;
  displayedUsers: User[];
  cardType: CardType;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, displayedUsers, cardType}) => {

  //students array get sliced into array of studentArrays [[a,b,c,d,e],[f,g,h,i,j],[k,l,m,n,o]]
  function sliceUsersIntoGroups(users: User[], groupSize: number): User[][] {
    const userGroups: User[][] = [];
    for (let i = 0; i < users.length; i += groupSize) {
      const group = users.slice(i, i + groupSize);
      userGroups.push(group);
    }
    return userGroups;
  }

  return (
    <div className='m-10 p-10 bg-slate-50 rounded-lg min-h-[360px]'>
      <h2 className="text-3xl font-bold mb-6">{header}</h2>

      {displayedUsers.length === 0 ? (
        <p>Nothing at the moment...</p>
        ) : (
        <Carousel>
          {sliceUsersIntoGroups(displayedUsers, 5).map((displayedUserGroup, index) => (
            <RowOfCards key={index} displayedUserGroup={displayedUserGroup} cardType={cardType} />
          ))}
        </Carousel>
        )}

    </div>
  );
};

export default DisplayTutorSection;
