import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import DataSekolah from "../components/DataSekolah/DataSekolah";
import TabelGuru from "../components/TabelGuru/TabelGuru";
import AddGuru from "../components/AddGuru/AddGuru";
import Berita from "../components/Berita/Berita"; 
import beritaData from "../utils/constants/berita";
import dataGuru from "../utils/constants/dataGuru";
import ProfilSekolahan from "../components/Profil/ProfilSekolahan";

function Home() {
  const [guruList, setGuruList] = useState(dataGuru);

  function handleAddGuru(newGuru) {
    setGuruList([...guruList, newGuru]);
  }

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProfilSekolahan />
        <DataSekolah dataGuru={guruList} />
        <TabelGuru dataGuru={guruList} />
        <AddGuru onAddGuru={handleAddGuru} />
        <Berita beritaData={beritaData} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
