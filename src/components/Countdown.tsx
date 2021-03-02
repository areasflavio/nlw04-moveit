import React, { useContext, useEffect, useState } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const [progressSeconds, setProgressSeconds] = useState(0);

  useEffect(() => {
    setProgressSeconds(
      ((0.1 * 60 - (minutes * 60 + seconds)) * 100) / (0.1 * 60)
    );
  }, [minutes, seconds]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button type="button" className={styles.countdownButton} disabled>
          Ciclo encerrado
          <img src="/icons/check_circle.svg" alt="" />
        </button>
      ) : (
        <>
          {isActive ? (
            <div className={styles.progressBar}>
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
                {/* <img src="/icons/close-button.svg" alt="" /> */}
              </button>
              <div>
                <div style={{ width: `${progressSeconds}%` }} />
              </div>
            </div>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="/icons/play_arrow.svg" alt="" />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Countdown;
