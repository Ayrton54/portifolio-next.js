import styles from '../styles/Home.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillColumn}>
          <h3>Hard Skills</h3>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>.NET</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className={styles.skillColumn}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Resolução de problemas</li>
            <li>Empatia</li>
            <li>Resolução de conflitos</li>
            <li>Criatividade</li>
            <li>Inteligência emocional</li>
            <li>Trabalho em equipe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
