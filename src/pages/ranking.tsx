import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/Pages/Ranking.module.css';
import Sidebar from '../components/Sidebar';

interface RankingProps {
  name: string;
  avatar: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Ranking(props: RankingProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <>
        <div className={styles.container}>
          <Head>
            <title>Ranking | move.it</title>
          </Head>

          <main>
            <h1>Leaderboard</h1>

            <section className={styles.sectionContainer}>
              <ul>
                <li>
                  <span>Posição</span>
                  <span>Usuário</span>
                  <span>Desafios</span>
                  <span>Experiência</span>
                </li>

                {array.map((item) => (
                  <li key={item}>
                    <div>{item}</div>

                    <div className={styles.profileData}>
                      <img src={props.avatar} alt={props.name} />
                      <div>
                        <strong>{props.name}</strong>
                        <small>
                          <img src="icons/level.svg" alt="level" />
                          Level {props.level}
                        </small>
                      </div>
                    </div>
                    <div>
                      <strong>{props.challengesCompleted}</strong>
                      &nbsp;completados
                    </div>
                    <div>
                      <strong>{props.currentExperience}</strong>&nbsp;xp
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    name,
    avatar,
    level,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;

  if (!name) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      name,
      avatar,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
