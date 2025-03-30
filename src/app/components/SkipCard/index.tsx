'use client';
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

interface SkipProps {
  id: string;
  size: number;
  hirePeriod: number;
  onRoad: boolean;
  price: number;
  vat: number;
  forbidden: boolean;
  heavyWaste: boolean;
  costTransport: number;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

const skipData: any = {
  4: {
    binBags: '30-40 Bin Bags',
    soilCapacity: '3.75T Soil Pile Capacity',
  },
  6: {
    binBags: '50-60 Bin Bags',
    soilCapacity: '6T Soil Pile Capacity',
  },
  8: {
    binBags: '60-80 Bin Bags',
    soilCapacity: '8T Soil Pile Capacity',
  },
  10: {
    binBags: '80-100 Bin Bags',
    soilCapacity: 'Open Top',
  },
  12: {
    binBags: '100-120 Bin Bags',
    soilCapacity: 'Open Top',
  },
  14: {
    binBags: '120-140 Bin Bags',
    soilCapacity: '14T Soil Pile Capacity',
  },
  16: {
    binBags: '140-160 Bin Bags',
    soilCapacity: '16T Soil Pile Capacity',
  },
  20: {
    binBags: '160-180 Bin Bags',
    soilCapacity: '20T Soil Pile Capacity',
  },
  40: {
    binBags: '400-440 Bin Bags',
    soilCapacity: '40T Soil Pile Capacity',
  },
};

const SkipCard = ({
  id,
  size,
  hirePeriod,
  onRoad,
  price,
  vat,
  forbidden,
  heavyWaste,
  costTransport,
  isSelected,
  onSelect,
}: SkipProps) => {
  const totalPrice = price + (price * vat) / 100;
  const pricePerWeek = Math.ceil(totalPrice / 2);

  let imageSrc = '';

  if (size >= 4 && size <= 6) {
    imageSrc = '/images/5-skip.jpeg';
  } else if (size >= 8 && size <= 12) {
    imageSrc = '/images/10-skip.jpeg';
  } else if (size >= 14 && size <= 20) {
    imageSrc = '/images/16-skip.jpg';
  } else if (size === 40) {
    imageSrc = '/images/40-skip.jpeg';
  }

  const skipDetails = skipData[size];

  return (
    <div
      id={id}
      className={`${isSelected && styles.isSelected} ${
        forbidden ? styles.wrapper_forbidden : styles.wrapper
      }`}
    >
      <div className={styles.relative}>
        {imageSrc && (
          <Image
            width={1200}
            height={800}
            layout='responsive'
            src={imageSrc}
            alt={`${size} yard skip`}
            className={styles.skipImage}
            objectFit='cover'
          />
        )}

        {heavyWaste ? (
          <p className={styles.label}>Allows Heavy Waste</p>
        ) : (
          <p></p>
        )}

        {onRoad ? (
          ''
        ) : (
          <div className={styles.label_warning}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0'
            >
              <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'></path>
              <path d='M12 9v4'></path>
              <path d='M12 17h.01'></path>
            </svg>
            <p>Private Property Only</p>
          </div>
        )}

        {forbidden ? (
          <div className={styles.label_error}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-alert-triangle w-4 h-4 text-red-500 shrink-0'
            >
              <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'></path>
              <path d='M12 9v4'></path>
              <path d='M12 17h.01'></path>
            </svg>
            <p>Not suitable</p>
          </div>
        ) : (
          ''
        )}
      </div>

      <h2>{size} Cubic Yards Skip</h2>
      <p className={styles.paragraph}>{hirePeriod} days Hire Period</p>
      <div className={styles.list}>
        <p>✅ Mixed Waste</p>
        <p>✅ Garden Waste</p>
        <p>✅ {skipDetails.binBags}</p>
        <p>✅ {skipDetails.soilCapacity}</p>
      </div>

      <div className={styles.section}>
        <p className={styles.paragraph}>
          <span className={styles.price}>£{pricePerWeek}</span> per week
        </p>

        {costTransport ? (
          <p className={styles.label_transport}>
            Transport Cost £{costTransport}
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <button
        className={isSelected ? styles.selectedButton : styles.selectButton}
        onClick={() => onSelect(id)}
      >
        {isSelected ? 'Selected' : 'Select your skip'}
      </button>
    </div>
  );
};

export default SkipCard;
