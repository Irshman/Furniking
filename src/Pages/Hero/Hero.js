import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Slider from '../../Components/Slider/Slider'
import {motion} from 'framer-motion'
import styles from './Hero.module.scss'

const Hero = () => {
  const animationB = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      transition: { 
        ease: "easeOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }

  return (
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.hero}>
      <div className='container'>
        <motion.div 
          variants={animationB}
          className={styles.hero__body}>
          <SideBar /> 
          <Slider />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero