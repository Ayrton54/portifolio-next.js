import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Home.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const result = await emailjs.send(
        'service_5bhed7b', // Substitua pelo seu Service ID
        'template_lf996bl', // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'XLCQa5H2TENMt0Ehn' // Substitua pelo seu User ID
      );
      setStatus('Email enviado com sucesso!');
    } catch (error) {
      setStatus(`Erro: ${error.text}`);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
      <div className={styles.socials}>
        <a href="https://wa.me/77991801038" target="_blank" rel="noopener noreferrer">
          <img src="/Whatsapp.png" alt="WhatsApp" className={styles.icon} />
        </a>
        <a href="https://github.com/Ayrton54" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/ayrton-lopes/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
        </a>
      </div>
    </section>
  );
}