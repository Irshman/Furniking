import React from 'react'
import SpecialOffer from '../../Components/SpecialOffer/SpecialOffer'
import {MTitle} from '../../UI/Title/Title'

import styles from './SpecialOffers.module.scss';
import specialItem1 from '../../assets/img/special_item_1.png'
import specialItem2 from '../../assets/img/special_item_2.png'
import {motion} from 'framer-motion'
const SpecialOffers = () => {

  const offers = [
    {id: 1, img: specialItem1, title: "Living Room Furniture", text: "You don't have a chair. Are you ready for growth? Shop with us 40% discount!", newPrice: 150, oldPrice: 250},
    {id: 2, img: specialItem2, title: "Modern chair", text: "Hot chairs of the modern era are now available in our stock.", newPrice: 75, oldPrice: 150}
  ]

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
  const animationT = {
    hidden: {
      y: -100,
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
      className='container'>
      <MTitle variants={animationT} text={"SPECIAL OFFER"} />
      <motion.div 
        variants={animationB}
        className={styles.offers}>
        {offers.map(offer => <SpecialOffer key={offer.id} title={offer.title} img={offer.img} text={offer.text} newPrice={offer.newPrice} oldPrice={offer.oldPrice} />)}   
      </motion.div>
    </motion.div>
  )
}

export default SpecialOffers