import React from 'react';

import styles from '../styles/components/Sidebar.module.css';

function Sidebar() {
  function handleNav(e) {
    console.log(e.target);
  }

  return (
    <aside className={styles.sidebarContainer}>
      <img src="logo-sidebar.svg" alt="move.it" />

      <section className={styles.controlsContainer}>
        <span onClick={handleNav} className={styles.active}>
          <img src="/icons/home-hover.svg" alt="Home" />
        </span>
        <span onClick={handleNav}>
          <img src="/icons/award.svg" alt="Ranking" />
        </span>
      </section>
    </aside>
  );
}

export default Sidebar;
