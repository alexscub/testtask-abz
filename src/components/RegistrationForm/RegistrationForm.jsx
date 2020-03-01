/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './RegistrationForm.module.css';
import Button from '../Shared/Button/Button';
import InputFile from './InputFile/InputFile';
import Schema from './sheme';

const RegistrationForm = ({ positions = [], postNewUser, id }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2 className={styles.title}>Register to get a work</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            position: '',
            photo: null,
            position_id: '',
          }}
          validationSchema={Schema}
          onSubmit={(values, { resetForm }) => {
            const formData = new FormData();
            formData.append('position_id', values.position_id);
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('photo', values.photo.file);
            setTimeout(() => {
              postNewUser(formData);
              resetForm();
            }, 1000);
          }}
        >
          {({ values, touched, errors, setFieldTouched }) => {
            return (
              <Form
                className={styles.registration}
                autoComplete="off"
                method="POST"
              >
                <p className={styles.paragraph}>
                  Attention! After successful registration and alert, update the
                  list of users in the block from the top
                </p>
                <div className={styles.inputContainer}>
                  <label htmlFor="name">Name</label>
                  <Field
                    className={`${styles.input} ${
                      errors.name && touched.name ? styles.inputError : ''
                    }`}
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="email">Email</label>
                  <Field
                    className={`${styles.input} ${
                      errors.email && touched.email ? styles.inputError : ''
                    }`}
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                  {touched.email && errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="phone">Phone number</label>
                  <Field
                    className={`${styles.input} ${
                      errors.phone && touched.phone ? styles.inputError : ''
                    }`}
                    type="tel"
                    name="phone"
                    placeholder="+380 XX XXX XX XX"
                  />
                  {!errors.phone || !touched.phone ? (
                    <p className={styles.assistive}>
                      Еnter phone number in open format
                    </p>
                  ) : null}
                  {touched.phone && errors.phone && (
                    <p className={styles.error}>{errors.phone}</p>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <p>Select your position</p>
                  {positions &&
                    positions.map(el => (
                      <label
                        className={styles.checkContainer}
                        key={el.id}
                        htmlFor={el.id}
                      >
                        {el.name}
                        <Field
                          checked={+values.position_id === el.id}
                          type="radio"
                          id={el.id}
                          value={el.id}
                          name="position_id"
                        />
                        <span className={styles.checkmark} />
                      </label>
                    ))}
                  {touched.position_id && errors.position_id && (
                    <p className={styles.error}>{errors.position_id}</p>
                  )}
                </div>
                <div className={styles.inputFileContainer}>
                  <Field
                    onBlur={setFieldTouched}
                    name="photo"
                    component={InputFile}
                    touched={touched.photo}
                    error={errors.photo}
                  />
                  {touched.photo && errors.photo && (
                    <p className={styles.error}>{errors.photo}</p>
                  )}
                </div>
                <Button type="submit" label="Sing up now" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default RegistrationForm;

RegistrationForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  postNewUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
