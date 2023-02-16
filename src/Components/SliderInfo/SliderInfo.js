import React from 'react'
import Button from '../../UI/Button/Button'

import styles from './SliderInfo.module.scss'

const SliderInfo = () => {
  return (
    <div className={styles.slider_info}>
      <span className={styles.slider_info__sub_title}>TOP COLLECTIONS 2023</span>
      <h1 className={styles.slider_info__title}>We Serve Your Dream Furniture</h1>
      <p className={styles.slider_info__text}>Get 50% off all products</p>
      <Button text={"Shop now"} />
    </div>
  )
}

export default SliderInfo