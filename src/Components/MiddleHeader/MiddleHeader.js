import React from 'react'
import { motion } from 'framer-motion';
import { MSearchBar } from '../SearchBar/SearchBar'
import IconButton from '../../UI/IconButton/IconButton'
import Logo from '../../UI/Logo/Logo'
import styles from './MiddleHeader.module.scss'
import logo from '../../assets/img/Logo.png'
import cart from '../../assets/img/icon-shop.png'
import notification from '../../assets/img/Notification.png'
import avatar from '../../assets/img/avatar.png'

const MiddleHeader = () => {

  const animationL = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      transition: { 
        ease: "easeInOut", 
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
        ease: "easeInOut", 
        duration: 1,
        delay: custom * 0.2 
      },
      opacity: 1
    })
  }

  const icons = [
    {url: cart, title: 'Cart', sum: 1},
    {url: notification, title: 'Notification', sum: 2},
    {url: avatar, title: 'Avatar', sum: 0}
  ]

  return (
    <motion.section 
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={styles.header}>
      <div className='container'>
        <div className={styles.header__body}>
          <motion.div 
            custom={2}
            variants={animationL}
            className={styles.header__logo}>
            <Logo />
          </motion.div>
          <MSearchBar  
            custom={2}
            variants={animationL} />
          <motion.div 
            custom={2}
            variants={animationR}
            className={styles.header__btns} >
            {icons.map((icon, index )=> {
              return (<IconButton key={index} sum={icon.sum} icon={icon.url} iconName={icon.title} />)
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default MiddleHeader