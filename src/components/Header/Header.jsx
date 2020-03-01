import React, { Component } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/menuicon.svg';
import Navigation from './Navigation/Navigation';
import NavigationWideScreen from './NavigationWideScreens/NavigationWideScreens';

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: true,
    });
    document.body.style.overflow = 'hidden';
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
    document.body.style.overflow = 'unset';
  };

  render() {
    const { isMenuOpen } = this.state;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <img src={logo} alt="TestTask" />
            {windowWidth < 1024 ? (
              <>
                <button
                  type="button"
                  className={styles.burgerMenu}
                  onClick={this.openMenu}
                >
                  <img src={burgerIcon} alt="" />
                  menu
                </button>
                <div
                  className={
                    isMenuOpen ? styles.backdrop : styles.backdropHidden
                  }
                  onClick={this.closeMenu}
                  role="presentation"
                />
                <div
                  className={isMenuOpen ? styles.menuWrap : styles.menuHidden}
                >
                  <Navigation close={this.closeMenu} />
                </div>
              </>
            ) : (
              <NavigationWideScreen />
            )}
          </div>
        </header>
      </>
    );
  }
}
export default Header;
