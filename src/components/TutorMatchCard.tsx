import React from 'react';
import styles from '../styles/TutorCard.module.css';
import { Tutor } from '../components/TutorCard';

interface TutorMatchCardProps {
  tutor: Tutor;
}

const TutorMatchCard: React.FC<TutorMatchCardProps> = ({ tutor }) => {
  const handleChat = () => {
    console.log('Chat with Tutor');
  };

  const handleUnmatch = () => {
    console.log('Unmatch with Tutor');
  };

  return (
    <div className={styles['tutor-card']}>
      <h2>{tutor.name}</h2>
      <p>Age: {tutor.age}</p>
      <p>Subjects Taught: {tutor.subjectsTaught.join(', ')}</p>
      <p>Pricing: {tutor.pricing}</p>
      <div className={styles['button-container']}>
        <button onClick={handleChat}>Chat</button>
        <button onClick={handleUnmatch}>Unmatch</button>
      </div>
    </div>
  );
};

export default TutorMatchCard;
