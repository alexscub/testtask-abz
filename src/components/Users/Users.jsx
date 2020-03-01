import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard/UserCard';
import styles from './Users.module.css';
import Button from '../Shared/Button/Button';

const Users = ({ users = [], loadMoreUsers, id }) => {
  return (
    <section id={id} className={styles.users}>
      <div className="container">
        <h2 className={styles.title}>Our cheerful users</h2>
        <p className={styles.paragraph}>
          Attention! Sorting users by registration date
        </p>
        <ul className={styles.userslist}>
          {users && users.map(user => <UserCard key={user.id} {...user} />)}
        </ul>
        <Button label="Show more" onClick={loadMoreUsers} />
      </div>
    </section>
  );
};
export default Users;

Users.propTypes = {
  // eslint-disable-next-line react/require-default-props
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  id: PropTypes.string.isRequired,
  loadMoreUsers: PropTypes.func.isRequired,
};
