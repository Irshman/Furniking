import React from 'react'

import styles from './List.module.scss'

const List = () => {
  return (
    <div className={styles.wrap}>
      <h4 className={styles.wrap__title}>Store</h4>
      <ul className={styles.wrap__list}>
        <li className={styles.wrap__item}><a href='#'>Furniture</a></li>
        <li className={styles.wrap__item}><a href='#'>Tabble</a></li>
        <li className={styles.wrap__item}><a href='#'>Sofa</a></li>
        <li className={styles.wrap__item}><a href='#'>Other</a></li>
      </ul>
  </div>
  )
}

export default List