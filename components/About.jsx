import React from 'react';
import styles from '@/app/styles/about.module.css';
import Image from 'next/image';

function About() {
  return (
    <section className={styles.contenedor}>
      <h1 className={styles.title}>FILOSOFIA</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/images/peso.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>ENTRENAMIENTOS</h2>
          <p className={styles.texto}>
            Tenemos programas para todos los tipos de entrenamientos,
            dependiendo de tus objetivos y lo que mas te guste
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/tareas.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>DISCIPLINA</h2>
          <p className={styles.texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            deleniti totam rerum deserunt quae laboriosam fugiat ad
            delectus,consectetur dolor minus non. Officia voluptatem repellat
            autem eaque eos, cumque aut?
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/evaluacion.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>CONSTANCIA</h2>
          <p className={styles.texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            deleniti totam rerum deserunt quae laboriosam fugiat ad delectus,
            consectetur dolor minus non. Officia voluptatem repellat autem eaque
            eos, cumque aut?
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
