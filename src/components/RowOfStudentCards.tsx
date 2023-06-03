import React from 'react';
import DisplayedUserCard, { CardType } from './StudentCard';
import {User} from './StudentCard';



interface RowProps {
  displayedUserGroup: User[];
  cardType: CardType;
  fetchFunction: () => void;
  openModalFunction: (user: User) => void;
}

const RowOfCards: React.FC<RowProps> = ({displayedUserGroup, cardType, fetchFunction, openModalFunction }) => {
  return (
      <div className="flex flex-wrap gap-4">
        {displayedUserGroup.map((displayedUser, index) => (
          <DisplayedUserCard key={index} displayedUser={displayedUser} cardType={cardType}
            fetchFunction={fetchFunction} openModalFunction={openModalFunction} />
        ))}
      </div>
  );
};

export default RowOfCards;
