import React, { useState } from "react";
import styles from "./AddGuru.module.css"; // kalau mau pakai CSS module

const AddGuru = ({ onAddGuru }) => {
  const [nama, setNama] = useState("");
  const [mapel, setMapel] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newGuru = {
      nama,
      mapel,
      email,
      foto: foto || `${import.meta.env.BASE_URL}images/ayuy.png`,
    };

    onAddGuru(newGuru);

    // Reset form setelah submit
    setNama("");
    setMapel("");
    setEmail("");
    setFoto("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <h2 className={styles.title}>Tambah Guru Baru</h2>

      <input
        className={styles.input}
        type="text"
        placeholder="Nama Guru"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Mata Pelajaran"
        value={mapel}
        onChange={(e) => setMapel(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Link Foto (Opsional)"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
      />

      <button type="submit" className={styles.button}>
        Tambah Guru
      </button>
    </form>
  );
};

export default AddGuru;
