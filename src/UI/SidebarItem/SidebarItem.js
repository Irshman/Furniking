import React from 'react'

import styles from './SidebarItem.module.scss'

const SidebarItem = ({title}) => {
  return (
    <li className={styles.item}>{title}</li>
  )
}

export default SidebarItem