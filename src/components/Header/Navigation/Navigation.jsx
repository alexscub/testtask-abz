/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import styles from './Navigation.module.css';
import logo from '../../../assets/images/logo.svg';

const mobileNavList = [
  {
    title: 'About me',
    link: 'about',
  },
  {
    title: 'Relationships',
    link: '',
  },
  {
    title: 'Users',
    link: 'users',
  },
  {
    title: 'Sign Up',
    link: 'CTA',
  },
  {
    title: 'Terms and Conditions',
    link: '',
  },
  {
    title: 'How it works',
    link: '',
  },
  {
    title: 'Partnership',
    link: '',
  },
  {
    title: 'Help',
    link: '',
  },
  {
    title: 'Leave testimonial',
    link: '',
  },
  {
    title: 'Contact us',
    link: '',
  },
  {
    title: 'Articles',
    link: '',
  },
  {
    title: 'Our news',
    link: '',
  },
  {
    title: 'Testimonials',
    link: '',
  },
  {
    title: 'Licenses',
    link: '',
  },
  {
    title: 'Privacy Policy',
    link: '',
  },
];

const Navigation = ({ close }) => {
  const mobileNavItems = mobileNavList.map((el, i) => (
    <Link
      onClick={el.link ? close : null}
      to={el.link || '#'}
      spy
      smooth
      duration={500}
      delay={100}
      key={i}
      className={styles.navItem}
      activeClass="activeClass"
    >
      {el.title}
    </Link>
  ));
  return (
    <>
      <div className={styles.logoContainer}>
        <img src={logo} alt="TestTask" />
      </div>
      <nav>{mobileNavItems}</nav>
    </>
  );
};

export default Navigation;
Navigation.propTypes = {
  close: PropTypes.func.isRequired,
};
