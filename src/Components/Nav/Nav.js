import React, {forwardRef} from 'react'
import {motion} from 'framer-motion'
import NavItem from '../../UI/NavItem/NavItem'

import styles from './Nav.module.scss'

export const Nav = forwardRef(({}, ref) => {

  const menuItem = ['Home', 'Shop', 'Blog', 'About', 'Contact us']

  return (
    <nav ref={ref} className={styles.nav}>
      <ul className={styles.nav__list}>
        {menuItem.map((el, index )=> <NavItem key={index} title={el} />)}
      </ul>
    </nav>
  )
})

export const MNav = motion(Nav)