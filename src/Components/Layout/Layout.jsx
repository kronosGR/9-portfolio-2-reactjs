import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';

import styles from './Layout.module.css';
import Spacer from './Spacer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Spacer size='2rem' />
      <Footer />
    </div>
  );
};

export default Layout;
