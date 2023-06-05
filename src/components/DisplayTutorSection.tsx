import React, { useState } from 'react';
import {CardType, User} from './StudentCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RowOfCards from './RowOfStudentCards';
import Modal from './Modal';


interface SectionProps {
  header: String;
  displayedUsers: User[];
  cardType: CardType;
  fetchFunction: () => void;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, displayedUsers, cardType, fetchFunction}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (user : User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectedUser, setSelectedUser] = useState<User|null>(null);

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
    <div className='m-10 p-10 bg-dirtwhite rounded-lg min-h-[360px]'>

      {isModalOpen && (<Modal user={selectedUser} closeModalFunction={closeModal} />)}


      <h2 className="text-3xl font-bold mb-6">{header}</h2>

      {displayedUsers.length === 0 ? (
        <p>Nothing at the moment...</p>
        ) : (
        <Carousel showThumbs={false}>
          {sliceUsersIntoGroups(displayedUsers, 5).map((displayedUserGroup, index) => (
            <RowOfCards key={index} displayedUserGroup={displayedUserGroup} cardType={cardType}
              fetchFunction={fetchFunction} openModalFunction={openModal} />
          ))}
        </Carousel>
        )}

    </div>
  );
};

export default DisplayTutorSection;
