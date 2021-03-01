import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FormEvent, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/Pages/Index.module.css';

export default function Index() {
  const { setUsername } = useContext(UserContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const username = event.target[0].value;

    setUsername(username);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>move.it</title>
      </Head>

      <img src="logo-home.png" alt="" />

      <section className={styles.loginContainer}>
        <img src="logo-full-white.svg" alt="move.it" />

        <h1>Bem-vindo</h1>

        <div className={styles.loginGithubContainer} onClick={() => {}}>
          <img src="icons/github.svg" alt="Github" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu username"
            autoComplete="off"
            required
          />

          <button type="submit">
            <img src="icons/right-arrow.svg" alt="Entrar" />
          </button>
        </form>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.req.cookies;

  if (name) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
