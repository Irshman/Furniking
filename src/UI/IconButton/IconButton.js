import React from 'react'

import styles from './IconButton.module.scss'

const IconButton = ({icon, iconName, sum}) => {
  return (
    <button className={styles.button}>
      <img src={icon} alt={iconName} />
      {sum === 0 ? null : <span className={styles.button__notification}>{sum}</span>}
      
    </button>
  )
}

export default IconButton