"user client"

import dynamic from 'next/dynamic';
import Navbar from '../components/navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer';
 
const inter = Inter({ subsets: ['latin'] })

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet"/>
    </head>
      <body>
        <div>
          <main>
          <div className="layout">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="other">
              {children}
              <Footer/>
            </div>
          </div>
          </main>
        </div>
      </body>
    </html>
);

export default Layout;