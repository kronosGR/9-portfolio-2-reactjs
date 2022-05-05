import React from 'react';

import styles from './NavItem.module.css';

const NavItem = ({ name, link }) => {
  return (
    <li className={styles.item}>
      <a href={link}>{name}</a>
    </li>
  );
};

export default NavItem;
