import React from 'react';
import DisplayTutorSection from '~/components/DisplayTutorSection';

const matchedTutors = [
  {
    name: 'Jacky Chan',
    age: 30,
    subjectsTaught: ['Math', 'Physics'],
    pricing: '$30/hour',
  },
  {
    name: 'Johnny English',
    age: 25,
    subjectsTaught: ['English', 'History'],
    pricing: '$25/hour',
  },
];

const DisplayTutor: React.FC = () => {
  return (
    <div>
      <DisplayTutorSection header="Matched Tutors" tutors={matchedTutors} isMatchCard={true}/>
    </div>
  );
};

export default DisplayTutor;
