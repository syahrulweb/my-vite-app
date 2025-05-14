import styles from './Navbar.module.css';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.title}>
        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className={styles.logo} />
        SMA WIJAYA PLUS
      </a>

      <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#" className={`${styles.link} ${styles.active}`}>Beranda</a></li>
        <li><a href="#" className={styles.link}>Profil</a></li>
        <li><a href="#" className={styles.link}>Guru</a></li>
        <li><a href="#" className={styles.link}>Berita</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
