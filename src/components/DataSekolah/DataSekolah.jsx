import styles from './DataSekolah.module.css';

function DataSekolah({ dataGuru }) {
  return (
    <div className={styles.container}>
      <section className={styles.dataSekolah}>
        <h2 className={styles.title}>Data Sekolah</h2>
        <p className={styles.subtitle}>Data guru, siswa, dan alumni terkini Sekolah Pintar.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.card__title}>Guru</h3>
            <h3 className={styles.guru}>{dataGuru.length}</h3>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card__title}>Siswa</h3>
            <h3 className={styles.siswa}>200</h3>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card__title}>Alumni</h3>
            <h3 className={styles.alumni}>500+</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataSekolah;
