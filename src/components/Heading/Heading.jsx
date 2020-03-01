import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';
import Button from '../Shared/Button/Button';

const Heading = ({ id, CTA }) => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <section id={id} className={styles.heading}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTitle}>
          Test assignment for Frontend Developer position
        </h1>
        <p className={styles.paragraph}>
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.{' '}
          {windowWidth >= 768 &&
            'Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens'}
        </p>
        <Button onClick={CTA} label="Sign up now" />
      </div>
    </section>
  );
};
export default Heading;

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  CTA: PropTypes.func.isRequired,
};
