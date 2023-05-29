import React from 'react';
import StudentCard from './StudentCard';
import styles from '../styles/TutorCard.module.css';
import {Student} from './StudentCard';
import StudentMatchCard from '../components/StudentMatchCard';



interface SectionProps {
  header: String;
  students: Student[];
  isMatchCard: boolean;
}

const DisplayTutorSection: React.FC<SectionProps> = ({header, students, isMatchCard}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{header}</h2>
      <div className={styles['card-container']}>
        {students.map((student, index) => (
          isMatchCard ?
          <StudentMatchCard key={index} student={student} /> :
          <StudentCard key={index} student={student}/>
        ))}
      </div>
    </div>
  );
};

export default DisplayTutorSection;
