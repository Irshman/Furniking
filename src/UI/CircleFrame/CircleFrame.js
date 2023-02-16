import React from 'react'
import { BsHeart, BsBagPlus, BsEye, BsArrowRepeat } from 'react-icons/bs'

import styles from './CircleFrame.module.scss';


const CircleFrame = ({icon, type}) => {
  return (
    <div className={styles.frame}>
      {(type === 'heart') ? <BsHeart /> : (type === 'cart') ? <BsBagPlus /> : (type === 'eye') ? <BsEye /> : (type === 'repeat') ? <BsArrowRepeat /> : null}
    </div>
  )
}

export default CircleFrame