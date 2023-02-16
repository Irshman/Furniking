import React, {useState} from 'react';
import {motion} from 'framer-motion'
import {MNav} from '../../Components/Nav/Nav'
import Logo from '../../UI/Logo/Logo'
import { MCollections } from '../Collections/Collections'

import styles from './BottomHeader.module.scss'

const BottomHeader = () => {
  const [isActive, setIsActive] = useState(false);
  
  const animationL = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      transition: { 
        ease: "easeOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }
  const animationR = {
    hidden: {
      x: 50,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      transition: { 
        ease: "easeOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }

  return (
    <motion.section 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.header}>
      <div className='container'>
        <div className={styles.header__body}>
          <motion.div custom={3} variants={animationL} className={styles.header__wrap}>
            <Logo />
          </motion.div>
          <MCollections 
            custom={3}
            variants={animationL}
            isActive={isActive} setIsActive={setIsActive} />
          <MNav 
            custom={3}
            variants={animationR}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default BottomHeader