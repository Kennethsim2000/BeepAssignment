import React from 'react';
import TutorCard from '../components/TutorCard';
import styles from '../styles/TutorCard.module.css';
import {Tutor} from '../components/TutorCard';
import TutorMatchCard from '../components/TutorMatchCard';



interface SectionProps {
  header: String;
  tutors: Tutor[];
  isMatchCard: boolean;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, tutors, isMatchCard}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{header}</h2>
      <div className={styles['card-container']}>
        {tutors.map((tutor, index) => (
          isMatchCard ?
          <TutorMatchCard key={index} tutor={tutor} /> :
          <TutorCard key={index} tutor={tutor}/>
        ))}
      </div>
    </div>
  );
};

export default DisplayTutorSection;
