import React from 'react';
import DisplayedUserCard from './StudentCard';
import {User} from './StudentCard';



interface RowProps {
  displayedUserGroup: User[];
  isMatchCard: boolean;
}

const RowOfCards: React.FC<RowProps> = ({displayedUserGroup: displayedUserGroup, isMatchCard}) => {
  return (
      <div className="flex flex-wrap gap-4">
        {displayedUserGroup.map((displayedUser, index) => (
          <DisplayedUserCard key={index} displayedUser={displayedUser} isMatchCard={isMatchCard} />
        ))}
      </div>
  );
};

export default RowOfCards;
