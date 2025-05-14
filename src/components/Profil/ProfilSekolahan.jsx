import React from "react";
import styles from "./ProfilSekolahan.module.css";

export default function ProfilSekolahan() {
  return (
    <div className={styles.profilWrapper}>
      <h2 className={styles.title}>Profil Sekolahan</h2>

      <div className={styles.imageWrapper}>
        <img
          src={`${import.meta.env.BASE_URL}images/sekolahan.jpg`}
          alt="Sekolah"
          className={styles.image}
        />
      </div>

      <div className={styles.descriptionWrapper}>
        <p>
          Sekolah ini bertujuan untuk mendidik generasi muda agar memiliki
          keterampilan dan pengetahuan yang baik dalam bidang akademik serta
          kepribadian yang baik untuk masa depan yang lebih cerah.
        </p>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.card}>
          <h3>Visi</h3>
          <p>Menjadi sekolah unggul di bidang akademik dan karakter siswa.</p>
        </div>
        <div className={styles.card}>
          <h3>Misi</h3>
          <p>
            1. Menyediakan pendidikan berkualitas tinggi.<br />
            2. Mengembangkan karakter siswa yang unggul.
          </p>
        </div>
      </div>
    </div>
  );
}
