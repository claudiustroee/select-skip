"use client"
import React from 'react';
import styles from './styles.module.css';

type StepProps = {
  icon: React.ReactNode;
  text: string;
  isChecked?: boolean;
  noLine?: boolean;
};

const Step = ({ icon, text, isChecked, noLine }: StepProps) => {
  return (
    <button disabled className={styles.step}>
      <span className={`${styles.icon} ${isChecked && styles.isCheckedIcon}`}>
        {icon}
      </span>
      <span className={`${styles.text} ${isChecked && styles.isCheckedText}`}>
        {text}
      </span>
      <div
        className={`${styles.line} ${isChecked && styles.isCheckedLine} ${
          noLine && styles.noLine
        }`}
      ></div>
    </button>
  );
};

export default Step;
