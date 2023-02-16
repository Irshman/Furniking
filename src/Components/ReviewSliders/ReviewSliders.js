import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import {MTitle} from '../../UI/Title/Title';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import {motion} from 'framer-motion'
import styles from './ReviewSliders.module.scss'
import "swiper/css/navigation";
import "./navigation.scss";


function ReviewSliders() {

  const reviews = [
    {id: 1, name: 'Angelina Joly', position: 'Co-founder', text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.', },
    {id: 2, name: 'Bred Pitt', position: 'Developer', text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.', },
    {id: 3, name: 'Max', position: 'Big boss', text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered.', },
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
      <MTitle variants={animationT} text={"What Our Customer Says"} />
      <Swiper
        className={styles.swiper}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}>
          {reviews.map((slider, index) => {
            return (
              <SwiperSlide key={index}>
                <ReviewInfo name={slider.name} text={slider.text} position={slider.position} />
              </SwiperSlide>
          )})}
      </Swiper>
    </motion.div>
  )
}

export default ReviewSliders
