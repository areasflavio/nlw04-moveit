import React from 'react';

import styles from '../styles/components/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/areasflavio.png" alt="areasflavio" />
      <div>
        <strong>Flávio Arêas</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
