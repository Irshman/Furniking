import React from 'react'

import styles from './ReviewInfo.module.scss'
import img from '../../assets/img/people.png'

const ReviewInfo = ({name, text, position}) => {
  return (
    <div className={styles.review}>
      <picture className={styles.review__img}>
        <img src={img} alt={"people"} />
      </picture>
      <div className={styles.review__info}>
        <p className={styles.review__text}>{text}</p>
        <h4 className={styles.review__name}>{name}</h4>
        <span className={styles.review__position}>{position}</span>
      </div>
    </div>
  )
}

export default ReviewInfo