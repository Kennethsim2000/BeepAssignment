import React from 'react';
import styles from '../styles/TutorCard.module.css';

export interface Student {
  name: string;
  age: number;
  subjects: string[];
}

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student: student }) => {
  const handleAccept = () => {
    console.log('Student accepted');
  };

  const handleReject = () => {
    console.log('Student rejected');
  };

  return (
    <div className={styles['tutor-card']}>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Subjects: {student.subjects.join(', ')}</p>
      <div className={styles['button-container']}>
        <button onClick={handleAccept}>Yes</button>
        <button onClick={handleReject}>No</button>
      </div>
    </div>
  );
};

export default StudentCard;
