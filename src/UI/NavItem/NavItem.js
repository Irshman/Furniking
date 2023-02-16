import React from 'react'

import styles from './NavItem.module.scss'

const NavItem = ({title}) => {
  return (
    <li className={styles.nav_item}>
      <a href="#">{title}</a>
    </li>
  )
}

export default NavItem