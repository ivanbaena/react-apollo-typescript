import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Header.module.css';

export const Header = () => {
  return (
    <header className='header'>
      <ul id='nav' className={styles.header}>
        <li className={styles.red}>
          <Link to='/' className={styles.red}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/404'>404 Page</Link>
        </li>
      </ul>
    </header>
  );
};
