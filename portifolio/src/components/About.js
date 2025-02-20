import styles from '../styles/Home.module.css';


export default function About() {
  return (
    <section id="about" className={styles.about} >
      <h2>Sobre Mim</h2>
      <p>Atualmente estou cursando Sistemas de Informação e me especializando em desenvolvimento de software.</p>
      <div className={styles.projects}>
        <h3>Projetos</h3>
        <div className={styles.projectContainer}>
          <a href="https://github.com/Ayrton54/Projeto_em_SpringBoot_Back_End" target="_blank">
            <img src="/Imagem Java.png" alt="projeto java" className={styles.projectImage}/>
          </a>
          <a href="https://github.com/Ayrton54/Trabalho-Em-Grupo-BD" target="_blank">
            <img src="/BD.png" alt="projeto C#" className={styles.projectImage}/>
          </a>
        </div>
      </div>
    </section>
  );
}
