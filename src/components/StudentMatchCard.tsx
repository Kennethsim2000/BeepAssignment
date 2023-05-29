import React from 'react';
import styles from '../styles/TutorCard.module.css';
import { Student } from './StudentCard';

interface StudentMatchCardProps {
  student: Student;
}

const StudentMatchCard: React.FC<StudentMatchCardProps> = ({ student: student }) => {
  const handleChat = () => {
    console.log('Chat with Student');
  };

  const handleUnmatch = () => {
    console.log('Unmatch with Student');
  };

  return (
    <div className={styles['tutor-card']}>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Subjects Taught: {student.subjects.join(', ')}</p>
      <div className={styles['button-container']}>
        <button onClick={handleChat}>Chat</button>
        <button onClick={handleUnmatch}>Unmatch</button>
      </div>
    </div>
  );
};

export default StudentMatchCard;
