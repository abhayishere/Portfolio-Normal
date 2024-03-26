import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Built with Next.js</p>
      <p>
        <Link href="https://github.com/abhayishere/Ojay" target="_blank" rel="noopener noreferrer" className={styles.sourceCodeLink}>
            View Source Code
        </Link>
      </p>
    </div>
  );
};

export default Footer;
