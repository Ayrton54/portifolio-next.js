import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#presentation">Apresentação</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
