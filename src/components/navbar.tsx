// components/Navbar.js
"use client"

import Link from 'next/link';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li"><Link href="/">Home</Link></li>
        <li className="navbar_li"><Link href="/about">About</Link></li>
        <li className="navbar_li"><Link href="/projects">Projects</Link></li>
        <li className="navbar_li"><Link href="/contact">Contact</Link></li>
        <li className="navbar_li"><Link href="/posts">Posts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
