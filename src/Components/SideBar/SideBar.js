import React, { forwardRef } from 'react';
import SidebarItem from '../../UI/SidebarItem/SidebarItem';
import {motion} from 'framer-motion'
import styles from './SideBar.module.scss';

const SideBar = forwardRef(({}, ref) => {
  const sidebarItem = ['All', 'New Arrivals', 'Hot Sale', "Furniture", "Amrature", "Tabble", 'Chair', 'Sofa', 'Mirrors', 'Stools', 'Benches'];

  return (
    <aside ref={ref} className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        {sidebarItem.map((item, index) => <SidebarItem key={index} title={item} />)}
      </ul>
    </aside>
  );
});

export const MSideBar = motion(SideBar);
export default SideBar;
