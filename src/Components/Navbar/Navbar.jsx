import React from 'react';

import styles from './Navbar.module.css';
import NavProfile from './NavProfile';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavProfile />
    </div>
  );
};

export default Navbar;
