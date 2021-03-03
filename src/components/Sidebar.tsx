import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/components/Sidebar.module.css';

function Sidebar() {
  const router = useRouter();

  useEffect(() => {
    const allIcons = document.querySelectorAll('img');

    allIcons.forEach((icon) => {
      if (window.location.pathname.includes(icon.alt.toLowerCase())) {
        icon.parentElement.classList.add(`${styles.active}`);

        icon.src = `icons/${icon.alt.toLowerCase()}-hover.svg`;
      }

      return;
    });
  }, []);

  function handleNav(e) {
    const routePath = String(e.target.alt).toLowerCase();

    router.push(`/${routePath}`);
  }

  return (
    <aside className={styles.sidebarContainer}>
      <img src="logo-sidebar.svg" alt="move.it" />

      <section className={styles.controlsContainer}>
        <span onClick={handleNav}>
          <img src="/icons/home.svg" alt="Home" />
        </span>
        <span onClick={handleNav}>
          <img src="/icons/ranking.svg" alt="Ranking" />
        </span>
      </section>
    </aside>
  );
}

export default Sidebar;
