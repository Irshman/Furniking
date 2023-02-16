import React from 'react'

import styles from './FurnitureItem.module.scss'
import img from '../../assets/img/minifurniture1.png'

const FurnitureItem = ({image, name, price}) => {
  return (
    <div className={styles.furniture}>
      <div className={styles.furniture__img}> 
        <img src={image} alt={"img"} /> 
      </div>
      <h3 className={styles.furniture__price}>${price}</h3>
      <span className={styles.furniture__name}>{name}</span>
    </div>
  )
}

export default FurnitureItem