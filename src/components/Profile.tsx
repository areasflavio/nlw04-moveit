import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  name: string;
  avatar: string;
}

function Profile({ name, avatar }: ProfileProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt={name} />
      <div>
        {/* <strong>Flávio Arêas</strong> */}
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
