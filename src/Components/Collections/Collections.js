import React, {forwardRef} from 'react'
import {motion} from 'framer-motion';
import styles from './Collections.module.scss' 

export const Collections = forwardRef(({}, ref) => {
  return (
    <div ref={ref} className={styles.collections}>
      <div className={styles.collections__burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className={styles.collections__text}>ALL COLLECTIONS</span>
    </div>
  )
});

export const MCollections = motion(Collections);

