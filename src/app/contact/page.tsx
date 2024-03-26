"use client"
import React, { useState } from 'react';
import styles from './Contact.module.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const mailtoURI = `mailto:abhyadav1@gmail.com?subject=Project Inquiry from ${name}&body=${message}\n\n Contact Details:\nName: ${name}\nEmail: ${email}`;
    window.location.href = mailtoURI;
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Got A Project? Let&rsquo;s Talk.</h2>
      <p className={styles.contactSubtitle}>I&rsquo;m available for freelance work and interesting projects. Reach out to me, and let&rsquo;s create something impactful together.</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          className={styles.inputField} 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className={styles.inputField} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <textarea 
          placeholder="Your Message" 
          className={styles.textArea} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className={styles.contactButton}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
