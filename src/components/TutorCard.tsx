import React from 'react';
import styles from '../styles/TutorCard.module.css';

export interface Tutor {
  name: string;
  age: number;
  subjectsTaught: string[];
  pricing: string;
}

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const handleAccept = () => {
    // Logic for accepting tutor
    console.log('Tutor accepted');
  };

  const handleReject = () => {
    // Logic for rejecting tutor
    console.log('Tutor rejected');
  };

  return (
    <div className={styles['tutor-card']}>
      <h2>{tutor.name}</h2>
      <p>Age: {tutor.age}</p>
      <p>Subjects Taught: {tutor.subjectsTaught.join(', ')}</p>
      <p>Pricing: {tutor.pricing}</p>
      <div className={styles['button-container']}>
        <button onClick={handleAccept}>Yes</button>
        <button onClick={handleReject}>No</button>
      </div>
    </div>
  );
};

export default TutorCard;
