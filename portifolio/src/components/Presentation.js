import styles from '../styles/Home.module.css';


export default function Presentation() {
  return (
    <section id="presentation" className={`${styles.presentation} ${styles.body}`}>
      <div className={styles.centeredContent}>
        <img src="/perfil.png" alt="Minha Foto" className={styles.photo} />
        <h1>Ayrton Lopes</h1>
        <p>Sou um estudante de 25 anos, atualmente cursando o 5º semestre 
          do Bacharelado em Sistemas de Informação.<br /> Tenho um forte interesse
           em desenvolvimento Back-End <br /> e possuo um vasto conhecimento de habilidades em várias linguagens e 
           frameworks, incluindo Java, Next.js, C#, .NET, HTML e CSS.</p>
      </div>
    </section>
  );
}