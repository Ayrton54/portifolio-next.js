// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio desenvolvido em Next.js" />
      </Head>
      
      <Navbar />
      <Presentation />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
