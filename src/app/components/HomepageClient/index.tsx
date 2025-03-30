"use client"
import React, { useState } from 'react';
import styles from './styles.module.css';
import Step from '../Step';
import SkipCard from "../SkipCard";

interface Skip {
  id: string;
  size: number;
  hirePeriod: number;
  onRoad: boolean;
  price: number;
  vat: number;
  forbidden: boolean;
  heavyWaste: boolean;
  costTransport: number;
}

interface HomeClientProps {
  skips: Skip[];
}

const HomeClient: React.FC<HomeClientProps> = ({ skips }) => {
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);

  const handleSelectCard = (id: string) => {
    if (selectedSkipId === id) {
      setSelectedSkipId(null);
    } else {
      setSelectedSkipId(id);
    }
  };
  
  const steps = [
    {
      text: 'Postcode',
      isChecked: true,
      noLine: false,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-map-pin w-6 h-6'
        >
          <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
          <circle cx='12' cy='10' r='3'></circle>
        </svg>
      ),
    },
    {
      text: 'Waste Type',
      isChecked: true,
      noLine: false,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-trash2 w-6 h-6'
        >
          <path d='M3 6h18'></path>
          <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
          <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
          <line x1='10' x2='10' y1='11' y2='17'></line>
          <line x1='14' x2='14' y1='11' y2='17'></line>
        </svg>
      ),
    },
    {
      text: 'Select Skip',
      isChecked: true,
      noLine: false,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-truck w-6 h-6'
        >
          <path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'></path>
          <path d='M15 18H9'></path>
          <path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14'></path>
          <circle cx='17' cy='18' r='2'></circle>
          <circle cx='7' cy='18' r='2'></circle>
        </svg>
      ),
    },
    {
      text: 'Permit Check',
      isChecked: false,
      noLine: false,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-shield w-6 h-6'
        >
          <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'></path>
        </svg>
      ),
    },
    {
      text: 'Choose Date',
      isChecked: false,
      noLine: false,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-calendar w-6 h-6'
        >
          <path d='M8 2v4'></path>
          <path d='M16 2v4'></path>
          <rect width='18' height='18' x='3' y='4' rx='2'></rect>
          <path d='M3 10h18'></path>
        </svg>
      ),
    },
    {
      text: 'Payment',
      isChecked: false,
      noLine: true,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-credit-card w-6 h-6'
        >
          <rect width='20' height='14' x='2' y='5' rx='2'></rect>
          <line x1='2' x2='22' y1='10' y2='10'></line>
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.stepper}>
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              text={step.text}
              isChecked={step.isChecked}
              noLine={step.noLine}
            />
          ))}
        </div>
        <h2 className={styles.title}>Choose Your Skip Size</h2>
        <p className={styles.description}>Hire the skip that best suits you</p>

        <div className={styles.skipsContainer}>
          {skips.map((skip: any) => (
            <SkipCard
              key={skip.id}
              id={skip.id}
              size={skip.size}
              hirePeriod={skip.hire_period_days}
              onRoad={skip.allowed_on_road}
              price={skip.price_before_vat}
              vat={skip.vat}
              forbidden={skip.forbidden}
              heavyWaste={skip.allows_heavy_waste}
              costTransport={skip.transport_cost}
              isSelected={selectedSkipId === skip.id}
              onSelect={handleSelectCard}
            />
          ))}
        </div>

        {selectedSkipId && (
        <div>
          <h3>Selected Skip:</h3>
          <p>Skip ID: {selectedSkipId}</p>
        </div>
      )}
      </main>
    </div>
  );
}

export default HomeClient;