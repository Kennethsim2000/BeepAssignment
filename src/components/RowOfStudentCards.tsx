import React from 'react';
import DisplayedUserCard, { CardType } from './StudentCard';
import {User} from './StudentCard';



interface RowProps {
  displayedUserGroup: User[];
  cardType: CardType;
}

const RowOfCards: React.FC<RowProps> = ({displayedUserGroup: displayedUserGroup, cardType}) => {
  return (
      <div className="flex flex-wrap gap-4">
        {displayedUserGroup.map((displayedUser, index) => (
          <DisplayedUserCard key={index} displayedUser={displayedUser} cardType={cardType} />
        ))}
      </div>
  );
};

export default RowOfCards;
