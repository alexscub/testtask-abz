import React, { Component } from 'react';
import 'normalize.css';
import { scroller } from 'react-scroll';
import { getUsers, getPositions, postUser } from '../services/api';
import Header from './Header/Header';
import Heading from './Heading/Heading';
import About from './About/About';
import Users from './Users/Users';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Footer from './Footer/Footer';
import Modal from './Shared/Modal/Modal';

class App extends Component {
  state = {
    users: null,
    page: 0,
    positions: null,
    postResult: null,
  };

  async componentDidMount() {
    try {
      this.loadUsers();
      const positions = await getPositions();
      this.setState({
        positions,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  loadUsers = async () => {
    try {
      const users = await getUsers();
      this.setState({
        users,
        page: 1,
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  loadMoreUsers = async () => {
    try {
      const { page } = this.state;
      const moreUsers = await getUsers(page + 1);
      this.setState(prevState => ({
        users: [...prevState.users, ...moreUsers],
        page: prevState.page + 1,
      }));
    } catch (err) {
      throw new Error(err);
    }
  };

  postNewUser = async userFormData => {
    try {
      const response = await postUser(userFormData);
      this.setState({
        postResult: response.data,
      });
      this.loadUsers();
    } catch (err) {
      this.setState({
        postResult: err.data,
      });
    }
  };

  goToSignUp = () => {
    scroller.scrollTo('CTA', {
      duration: 500,
      smooth: true,
      offset: 50,
    });
  };

  closeModal = () => {
    this.setState({ postResult: null });
  };

  render() {
    const { users, positions, postResult } = this.state;
    return (
      <>
        {!!postResult && (
          <Modal
            success={postResult.success}
            message={postResult.message}
            closeModal={this.closeModal}
          />
        )}
        <Header />
        <main>
          <Heading CTA={this.goToSignUp} id="requirments" />
          <About CTA={this.goToSignUp} id="about" />
          <Users id="users" users={users} loadMoreUsers={this.loadMoreUsers} />
          <RegistrationForm
            id="CTA"
            postNewUser={this.postNewUser}
            positions={positions}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
