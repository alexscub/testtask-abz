/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InputFile.module.css';

class InputFile extends Component {
  static defaultProps = {
    touched: false,
    error: '',
  };

  static propTypes = {
    touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    form: PropTypes.shape({
      setFieldValue: PropTypes.func.isRequired,
    }).isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  state = {
    file: '',
    fileUrl: '',
  };

  // reset state file after resetForm in Formik
  componentDidUpdate(prevProps) {
    const { touched } = this.props;
    if (!touched && prevProps.touched !== touched) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ file: null, theInputKey: Date.now() });
    }
  }

  // open file for getting width and heigth
  openFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ fileUrl: reader.result });
    };
  };

  onImgLoad = ({ target: img }) => {
    const { file } = this.state;
    this.props.form.setFieldValue('photo', {
      file,
      dimensions: {
        height: img.naturalHeight,
        width: img.naturalWidth,
      },
    });
    this.setState({ fileUrl: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const file = this.fileInput.current.files[0];
    if (file) {
      this.props.form.setFieldValue('photo', { file });
      this.setState({ file });
      this.openFile(file);
    } else {
      this.props.form.setFieldValue('photo', null);
      this.setState({ file: null });
    }
  };

  handleBlur = () => {
    this.props.onBlur('photo', true);
  };

  render() {
    const { file, theInputKey, fileUrl } = this.state;
    const { touched, error } = this.props;
    return (
      <>
        <img
          className={styles.previewImg}
          onLoad={this.onImgLoad}
          src={fileUrl}
          alt=""
        />
        <p>Photo</p>
        <input
          className={styles.inputfile}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          id="file"
          type="file"
          key={theInputKey || ''}
          ref={this.fileInput}
        />
        <label
          className={
            touched
              ? !error
                ? styles.customFileTouched
                : styles.error
              : styles.customFile
          }
          htmlFor="file"
        >
          <span className={file ? styles.filename : styles.placeholder}>
            {touched
              ? file
                ? file.name
                : 'No file chosen'
              : 'Upload your photo'}
          </span>
          <span className={styles.browseButton}>Browse</span>
        </label>
      </>
    );
  }
}

export default InputFile;
