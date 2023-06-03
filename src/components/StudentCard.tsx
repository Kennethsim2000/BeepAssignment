import React from 'react';
import axios from 'axios';
import { userID, userIsTutor } from '~/pages/displayPage';
import Modal from './Modal';

export interface User {
  id: number;
  name: string;
  age: number;
  subjects: string[];
  pricing?: number;
}

export type CardType = 'match' | 'interested' | 'other';

interface DisplayedUserCardProps {
  displayedUser: User;
  cardType: CardType;
  fetchFunction: () => void;
  openModalFunction: (user : User) => void;
}

const DisplayedUserCard: React.FC<DisplayedUserCardProps> = ({ displayedUser, cardType, fetchFunction, openModalFunction }) => {
  const handleAccept = () => {
    if (userIsTutor) {
      console.log('Student accepted');
      axios
      .put(`http://localhost:8080/tutor/like/${userID}/${displayedUser.id}`)
      .catch((error) => {
        console.error('Error liking student', error);
      });
    } else {
      console.log('Tutor accepted');
      axios
      .put(`http://localhost:8080/student/like/${userID}/${displayedUser.id}`)
      .catch((error) => {
        console.error('Error liking tutor', error);
      });
    }
    openModalFunction(displayedUser);
    fetchFunction();
  };

  const handleReject = () => {
    if (userIsTutor) { // make student unlike tutor
      console.log('Student rejected');
      axios
        .delete(`http://localhost:8080/student/unlike/${displayedUser.id}/${userID}`)
        .catch((error) => {
          console.error('Error student unliking tutor', error);
        });
    } else {
      console.log('Tutor rejected');
      axios
        .delete(`http://localhost:8080/tutor/unlike/${displayedUser.id}/${userID}`)
        .catch((error) => {
          console.error('Error tutor unliking student', error);
        });
    }
    fetchFunction();
  };

  function handleChat(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  const handleUnmatch = () => {
    if (userIsTutor) {
      console.log('Unmatching student');
      axios
        .delete(`http://localhost:8080/tutor/unmatch/${userID}/${displayedUser.id}`)
        .catch((error) => {
          console.error('Error unmatching student', error);
        });
    } else {
      console.log('Unmatching tutor');
      axios
      .delete(`http://localhost:8080/student/unmatch/${userID}/${displayedUser.id}`)
      .catch((error) => {
        console.error('Error unmatching tutor', error);
      });
    }
  };

  return (
    <div className= "flex flex-col p-4 w-72 bg-lightbiege rounded-lg shadow-lg min-h-[208px]">

      <h2 className="my-1">{displayedUser.name}</h2>
      <p className="font-light">{displayedUser.age} y.o.</p>
      <p className="font-light">{displayedUser.subjects.join(', ')}</p>
      {!userIsTutor && <p className="font-light">${displayedUser.pricing} /hr</p>}

      {cardType == 'match' && (
        <div className="flex justify-between mt-auto px-2">
          <button className="px-4 w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300" onClick={handleChat}>Chat</button>
          <button className="px-4 min-w-fit h-10 text-center rounded-md shadow-md text-gray-700 bg-gray-200 hover:bg-gray-300" onClick={handleUnmatch}>Unmatch</button>
        </div>
      )}
      {cardType == 'interested' && (
        <div className="flex justify-between mt-auto px-2">
          <button className="px-4 w-20 h-10 rounded-md shadow-md text-gray-700 bg-lightbrown hover:bg-amber-50" onClick={handleAccept}>Match</button>
          <button className="px-4 w-20 h-10 rounded-md shadow-md bg-mattebrown hover:bg-gray-300 text-dirtwhite" onClick={handleReject}>Reject</button>
        </div>
      )}
      {cardType == 'other' && (
        <div className="flex justify-center mt-auto">
          <button className="px-4 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-lightbrown hover:bg-amber-50" onClick={handleAccept}>Yes</button>
        </div>
      )}


    </div>
  );
};

export default DisplayedUserCard;
