import React from 'react';
import DisplayTutorSection from '~/components/DisplayTutorSection';

const otherTutors = [
  {
    name: 'Jaden Smith',
    age: 30,
    subjectsTaught: ['Biology', 'Physics'],
    pricing: '$30/hour',
  },
  {
    name: 'Tom Hanks',
    age: 25,
    subjectsTaught: ['English', 'Literature'],
    pricing: '$25/hour',
  },
];

const interestedTutors = [
  {
    name: 'John Doe',
    age: 30,
    subjectsTaught: ['Math', 'Physics'],
    pricing: '$30/hour',
  },
  {
    name: 'Jane Smith',
    age: 25,
    subjectsTaught: ['English', 'History'],
    pricing: '$25/hour',
  },
];

const DisplayTutor: React.FC = () => {
  return (
    <div>
      <DisplayTutorSection header="Interested Tutors" tutors={interestedTutors} isMatchCard={false} />
      <DisplayTutorSection header="Other Tutors" tutors={otherTutors} isMatchCard={false}/>
    </div>
  );
};

export default DisplayTutor;
