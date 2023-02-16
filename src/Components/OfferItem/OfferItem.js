import React, {forwardRef} from 'react'
import {motion } from 'framer-motion'
import styles from './OfferItem.module.scss'

const OfferItem = forwardRef(({title, text, img}, ref) => {

  return (
    <figure 
      ref={ref}
      className={styles.offer}>
      <img 
        src={img} alt={title} />
      <figcaption className={styles.offer__info}>
        <h3 className={styles.offer__title}>{title}</h3>
        <p className={styles.offer__text}>{text}</p>
        <a className={styles.offer__link} href={title}>Read more</a>
      </figcaption>
    </figure>
  )
});

export const MOfferItem = motion(OfferItem);
export default OfferItem