import React, { useState } from "react";
import styles from "./TabelGuru.module.css";

const TabelGuru = ({ dataGuru }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.tabelWrapper}>
      <h2 className={styles.title}>Daftar Guru</h2>

      {/* Tabel Desktop */}
      <table className={styles.tabel}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nama</th>
            <th>Mapel</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataGuru && dataGuru.length > 0 ? (
            dataGuru.map((guru, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={guru.foto}
                    alt={`Foto ${guru.nama}`}
                    className={styles.foto}
                    onClick={() => setSelectedImage(guru.foto)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/default.jpg";
                    }}
                    style={{ cursor: "pointer" }} 
                  />
                </td>
                <td>{guru.nama}</td>
                <td>{guru.mapel}</td>
                <td>{guru.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "1rem" }}>
                Tidak ada data guru.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Versi Mobile */}
      <div className={styles.responsiveCard}>
        {dataGuru && dataGuru.map((guru, index) => (
          <div className={styles.cardItem} key={index}>
            <div className={styles.cardRow}>
              <img
                src={guru.foto}
                alt={`Foto ${guru.nama}`}
                className={styles.cardFoto}
                onClick={() => setSelectedImage(guru.foto)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default.jpg";
                }}
                style={{ cursor: "pointer" }} // Menandakan gambar bisa diklik
              />
              <div className={styles.cardInfo}>
                <p><strong>Nama :</strong> {guru.nama}</p>
                <p><strong>Mapel :</strong> {guru.mapel}</p>
                <p><strong>Email :</strong> {guru.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal untuk foto besar */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Foto besar" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelGuru;
