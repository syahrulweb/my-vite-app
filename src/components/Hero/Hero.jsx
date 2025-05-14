import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <p className={styles.hero__genre}>Selamat Datang di </p>
          <h2 className={styles.hero__title}>SMA WIJAYA PLUS</h2>
          <p className={styles.hero__description}>
            Sekolah Menengah Atas Terbaik di Kabupaten Bogor, Jawa Barat. Kami
            menyediakan pendidikan berkualitas tinggi untuk mempersiapkan
            siswa-siswi kami menghadapi tantangan masa depan.
          </p>
          <button className={styles.hero__button}>Lihat Profil</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
              src={`${import.meta.env.BASE_URL}images/gedung.png`}
              alt="gedung sekolah"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
