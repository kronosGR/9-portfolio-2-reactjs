import React from 'react';

import styles from './Navbar.module.css';
import NavProfile from './NavProfile';
import Spacer from '../Layout/Spacer';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <>
      <input type='checkbox' className={styles.hamb} id='hamb' />
      <label htmlFor='hamb' className={styles.hamb_icon}>
        &#9776;
      </label>
      <div className={styles.container}>
        <NavProfile />
        <Spacer size='2rem' />
        <h1>Georgios Katsanakis</h1>
        <span>Frontend Developer</span>

        <ul className={styles.navmenu}>
          <NavItem name='Home' link='#home' />
          <NavItem name='About' link='#about' />
          <NavItem name='Projects' link='#projects' />
          <NavItem name='Contact' link='#contact' />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
