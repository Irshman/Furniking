import React, {forwardRef} from 'react'
import {motion} from 'framer-motion'
import styles from './FeatureItem.module.scss'



const FeatureItem = forwardRef(({img, title, text}, ref) => {
  return (
    <div 
      ref={ref}
      className={styles.reature}>
      <picture className={styles.reature__img}>
        <img src={img}  alt={title} />
      </picture>
      <div className={styles.reature__wrap}>
        <h3 className={styles.reature__title}>{title}</h3>
        <p className={styles.reature__text}>{text}</p>
      </div>
    </div>
  )
});

export const MFeatureItem = motion(FeatureItem);
export default FeatureItem