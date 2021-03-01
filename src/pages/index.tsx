import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import styles from '../styles/Pages/Index.module.css';

export default function Index() {
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const username = event.target[0].value;

    try {
      fetch(`https://api.github.com/users/${username}`).then(function (
        response
      ) {
        return response.json();
      });

      // router.push('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>move.it</title>
      </Head>

      <div className={styles.container}>
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
              required
            />

            <button type="submit">
              <img src="icons/right-arrow.svg" alt="Entrar" />
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
