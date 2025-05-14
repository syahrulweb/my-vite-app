import React from "react";
import styles from "./Berita.module.css";

const Berita = ({ beritaData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Berita Terbaru</h2>
      <div className={styles.cardWrapper}>
        {beritaData.map((berita) => (
          <div className={styles.card} key={berita.id}>
            <img src={berita.gambar} alt={berita.judul} className={styles.image} />
            <h3 className={styles.cardTitle}>{berita.judul}</h3>
            <p className={styles.cardDescription}>{berita.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
