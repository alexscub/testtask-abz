import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import closeIcon from '../../../assets/images/Close.svg';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    document.body.style.overflow = 'unset';
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.closeModal();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    const { closeModal, success, message } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>
              {success ? 'Congratulations' : 'something wrong!'}
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className={styles.titleButton}
            >
              <img alt="" src={closeIcon} />
            </button>
          </div>
          <p className={styles.paragraph}>{message}</p>
          <div className={styles.buttonWrapper}>
            <Button
              customClassName={styles.button}
              label="Great"
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    );
  }
}
