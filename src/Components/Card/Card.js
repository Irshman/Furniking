import React from 'react';
import TagStatus from '../../UI/TagStatus/TagStatus';
import StarsRating from '../../UI/StarsRating/StarsRating';

import styles from './Card.module.scss'
import BlockFrames from '../BlockFrames/BlockFrames';

const Card = ({img, status, status_text, kind, title, new_price, old_price, stars_value}) => {
  return (
    <div className={styles.card}>
      <picture className={styles.card__img}>
        <TagStatus text={status_text} status={status} />
        <img src={img} alt={title} />
        {/* <div className={styles.card__frames}> */}
          <BlockFrames />
        {/* </div> */}
      </picture>
      <span className={styles.card__kind}>{kind}</span>
      <h4 className={styles.card__title}>{title}</h4>
      <div className={styles.card__info}>
        <div className={styles.card__price}>
          <p className={styles.card__new}>${new_price}</p>
          <p className={styles.card__old}>${old_price}</p>
        </div>
        <StarsRating stars={stars_value} />
      </div>
    </div>
  )
}

export default Card