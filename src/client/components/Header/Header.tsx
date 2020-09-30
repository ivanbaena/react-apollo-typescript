import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../hooks/';

import * as styles from './Header.module.css';

export const Header = () => {
  const authContext: any = useContext(AuthContext);

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
        {authContext && authContext.currentUser && (
          <li>
            <Link to={`/dashboard/${authContext.currentUser._id}`}>
              Dashboard
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};
