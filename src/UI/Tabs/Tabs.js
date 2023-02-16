import React, {forwardRef} from 'react';
import {motion} from 'framer-motion'
import styles from './Tabs.module.scss';

const Tabs = forwardRef(({tabs, currentTab, handleTabClick}, ref) => {
  return (
    <ul ref={ref} className={styles.tabs}>
        {tabs.map((tab, i) =>
          <li  key={i} id={tab.key} className={currentTab === `${tab.key}` ? styles.tabs__active : null} onClick={(handleTabClick)}>{tab.tabTitle}</li>
        )}
    </ul>
  )
})

export const MTabs = motion(Tabs)
export default Tabs