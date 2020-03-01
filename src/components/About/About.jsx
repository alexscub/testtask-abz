/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import manLaptop from '../../assets/images/man-laptop-v1.svg';
import FlatButton from '../Shared/FlatButton/FlatButton';

const About = ({ id, CTA }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2 className={styles.title}>Let's get acquainted</h2>
        <div className={styles.imageWithDescription}>
          <div className={styles.imageContainer}>
            <img
              className={styles.decorationImage}
              src={manLaptop}
              alt="Man with laptop"
            />
          </div>
          <div className={styles.sideContainer}>
            <h3 className={styles.subtitle}>I am cool frontend developer</h3>
            <p className={styles.paragraph}>
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p className={styles.paragraph}>
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page P​SD mockup​ into HTML5/CSS3.
            </p>
            <FlatButton onClick={CTA} label="Sign up now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

About.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
