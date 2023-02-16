import React from 'react'

import styles from './Logo.module.scss'
import logo from '../../assets/img/Logo.png'

const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src={logo} alt={"logo"} />
    </figure>
  )
}

export default Logo