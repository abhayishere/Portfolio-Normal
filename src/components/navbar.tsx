"use client"

import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.show : ''}`}>
      <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`${styles.navbar_ul} ${isOpen ? styles.show : ''}`}>
        <li className={styles.navbar_li}><a href="/">Home</a></li>
        <li className={styles.navbar_li}><a href="/about">About</a></li>
        <li className={styles.navbar_li}><a href="/projects">Projects</a></li>
        <li className={styles.navbar_li}><a href="/contact">Contact</a></li>
        <li className={styles.navbar_li}><a href="/posts">Posts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
