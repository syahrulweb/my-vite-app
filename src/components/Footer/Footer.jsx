import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaLinkedin />, url: "#" },
];

const quickLinks = [
  { label: "Beranda", url: "/" },
  { label: "Frofil", url: "/" },
  { label: "Guru", url: "/" },
  { label: "Berita", url: "/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.waveContainer}>
        {/* simple wave SVG */}
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={styles.wave}>
          <path
            d="M0,32 C360,96 1080,0 1440,64 L1440,0 L0,0 Z"
            fill="#1995AD"
          />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.brand}>
          <h2 className={styles.title}>SMA WIJAYA PLUS</h2>
          <p className={styles.tagline}>Membangun Generasi Cemerlang</p>
        </div>

        <div className={styles.links}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.heading}>Contact Us</h3>
          <address>
            Jl. Pendidikan No.10, Bogor<br/>
            Email: <a href="mailto:info@smawp.sch.id">info@smawp.sch.id</a><br/>
            Telp: <a href="tel:+62211234567">(021) 123-4567</a>
          </address>
        </div>

        <div className={styles.newsletter}>
          <h3 className={styles.heading}>Newsletter</h3>
          <form className={styles.form}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <div className={styles.social}>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} aria-label="Social link">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} SMA Wijaya Plus. By Muhammad Syahrul.</span>
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
