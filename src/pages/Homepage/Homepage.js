import React from 'react';

import { App } from '../../core/App';
import { NavBar } from '../../core/NavBar';
import { Dropdown } from '../../core/Dropdown';

import styles from './Homepage.css';

const Homepage = () => {
  return (
    <App>
      <NavBar className={styles.navbar}>
        <Dropdown title='alan'>
          <ul>
            <li>
              <button>Click Me!</button>
            </li>
          </ul>
        </Dropdown>
      </NavBar>
    </App>
  );
};

export { Homepage };
