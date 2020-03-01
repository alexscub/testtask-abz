import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import styles from './UserCard.module.css';
import noImage from '../../../assets/images/noImage.png';
import ParagraphWithTooltip from './ParagraphWithTooltip/ParagraphWithTooltip';

const UserCard = ({ photo, name, position, email, phone }) => {
  const addDefaultSrc = ev => {
    // eslint-disable-next-line no-param-reassign
    ev.target.src = noImage;
  };

  return (
    <li className={styles.card}>
      <ReactTooltip className={styles.tooltip} place="bottom" />
      <img
        onError={addDefaultSrc}
        className={styles.photo}
        src={photo}
        alt={name}
      />
      <ParagraphWithTooltip className={styles.name}>
        {name}
      </ParagraphWithTooltip>
      <ParagraphWithTooltip className={styles.paragraph}>
        {position}
      </ParagraphWithTooltip>
      <ParagraphWithTooltip className={styles.paragraph}>
        {email}
      </ParagraphWithTooltip>
      <ParagraphWithTooltip className={styles.paragraph}>
        {phone}
      </ParagraphWithTooltip>
    </li>
  );
};

export default UserCard;

UserCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
