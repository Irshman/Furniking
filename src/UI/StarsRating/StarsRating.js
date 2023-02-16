import React from 'react';
import ReactStars from 'react-rating-stars-component';
import styles from './StarsRating.module.scss';
import { BiStar } from 'react-icons/bi'

const StarsRating = ({stars}) => {
  const activeColor = '#7AC751';
  return (
    <div className={styles.stars}>   
      <ReactStars
        count={5}
        value={stars}
        size={18} 
        char={<BiStar />}
        activeColor={activeColor}
      />
    </div>
  );
};

export default StarsRating;
