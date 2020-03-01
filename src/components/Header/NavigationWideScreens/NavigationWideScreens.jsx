/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavigationWideScreens.module.css';

const navList = [
  {
    title: 'About me',
    link: 'about',
  },
  { title: 'Relationships', link: '' },
  { title: 'Requirements', link: 'requirments' },
  {
    title: 'Users',
    link: 'users',
  },
  {
    title: 'Sign Up',
    link: 'CTA',
  },
];

const NavigationWideScreens = () => {
  const navItems = navList.map((el, i) => (
    <Link
      to={el.link || '#'}
      spy
      smooth
      duration={500}
      key={i}
      className={styles.navItem}
      activeClass="activeClass"
      offset={40}
    >
      {el.title}
    </Link>
  ));
  return <nav>{navItems}</nav>;
};

export default NavigationWideScreens;
