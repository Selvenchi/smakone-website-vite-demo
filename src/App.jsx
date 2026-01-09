import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Component
import ScrollToTop from "./Component/ScrollToTop.jsx";

// Import Pages
import Home from "./Pages/Home/Home.jsx";
import Soundscape from "./Pages/Kegiatan/soundscape.jsx";
import STN from "./Pages/Kegiatan/stn.jsx";
import SAPxSMS from "./Pages/Kegiatan/SAPxSNM/SAPxSMS.jsx";
import Paintings from "./Pages/Kegiatan/SAPxSNM/Paintings.jsx";
import PaintingDetails from "./Pages/Kegiatan/SAPxSNM/PaintingDetails.jsx";
import SOC from "./Pages/Kegiatan/soc.jsx";

import Edward from "./Pages/Home/Alasan/Edward.jsx";
import Emily from "./Pages/Home/Alasan/Emily.jsx";
import Rania from "./Pages/Home/Alasan/Rania.jsx";
import Jayden from "./Pages/Home/Alasan/Jayden.jsx";

import Osis from "./Pages/Osis/Osis.jsx";

import SeleksiOsis from "./Pages/Osis/ListKepanitiaan/Osis2025.jsx";
import PanitiaBazone2024 from "./Pages/Osis/ListKepanitiaan/Bazone2024.jsx";
import PesertaTOS from "./Pages/Osis/ListKepanitiaan/TOS2025.jsx";
import CuratorsTedx from "./Pages/Osis/ListKepanitiaan/curatorsTedx2025.jsx";
import SOCTahap12025 from "./Pages/Osis/ListKepanitiaan/SOCTahap12025.jsx";
import SOC2025Gel2 from "./Pages/Osis/ListKepanitiaan/SOC25Tahap1-gel2.jsx";
import OneJournal25 from "./Pages/Osis/ListKepanitiaan/oneJournal25.jsx";
import KrizaEsports25 from "./Pages/Osis/ListKepanitiaan/krizaEsports25.jsx";
import OneFM from "./Pages/Osis/ListKepanitiaan/onefm2025.jsx";
import Sapxsms25 from "./Pages/Osis/ListKepanitiaan/sapxsms2025.jsx";
import Sapext25 from "./Pages/Osis/ListKepanitiaan/sapextend25.jsx";
import Sog25 from "./Pages/Osis/ListKepanitiaan/sog25.jsx";
import ShutterOne25 from "./Pages/Osis/ListKepanitiaan/shutterOne25.jsx";
import TOS25 from "./Pages/Osis/ListKepanitiaan/TOS25.jsx";
import Literasi25 from "./Pages/Osis/ListKepanitiaan/literasi25.jsx";
import Tedx25 from "./Pages/Osis/ListKepanitiaan/tedx25.jsx";
import Tedxs25 from "./Pages/Osis/ListKepanitiaan/tedxs.jsx";
import Osis26 from "./Pages/Osis/ListKepanitiaan/osis26.jsx";

import Emagz from "./Pages/Emagz/Emagz.jsx";
import Ass1st from "./Pages/Ass1st/Ass1st.jsx";
import Kedokteran from "./Pages/Ass1st/Jurusan/Kedokteran.jsx";
import Farmasi from "./Pages/Ass1st/Jurusan/Farmasi.jsx";
import Keguruan from "./Pages/Ass1st/Jurusan/Keguruan.jsx";
import Sosiologi from "./Pages/Ass1st/Jurusan/Sosiologi.jsx";
import Akutansi from "./Pages/Ass1st/Jurusan/Akutansi.jsx";
import Hukum from "./Pages/Ass1st/Jurusan/Hukum.jsx";
import Psikologi from "./Pages/Ass1st/Jurusan/Psikologi.jsx";
import Sipil from "./Pages/Ass1st/Jurusan/Sipil.jsx";
import Pertambangan from "./Pages/Ass1st/Jurusan/Pertambangan.jsx";

import TentangKami from "./Pages/TentangSMAK1/TentangSMAK1.jsx";
import Sejarah from "./Pages/TentangSMAK1/Sejarah.jsx";
import Fasilitas from "./Pages/TentangSMAK1/Fasilitas.jsx";
import Logo from "./Pages/TentangSMAK1/Logo.jsx";
import Lagu from "./Pages/TentangSMAK1/Lagu.jsx";

import KehidupanSmukiers from "./Pages/Smukiers/KehidupanSmukiers.jsx";
import Clubpage from "./Pages/Clubs/Clubpage.jsx";
import TipsBelajar from "./Pages/Smukiers/TipsBelajar.jsx";
import KegiatanSetelahKelas from "./Pages/Smukiers/KegiatanSetelahKelas.jsx";

import BPH from "./Pages/Osis/BPH/BPH.jsx";
import OSIS_1 from "./Pages/Osis/Osis_1/Osis_1.jsx";
import OSIS_2 from "./Pages/Osis/Osis_2/Osis_2.jsx";
import OSIS_3 from "./Pages/Osis/Osis_3/Osis_3.jsx";
import OSIS_4 from "./Pages/Osis/Osis_4/Osis_4.jsx";
import OSIS_5 from "./Pages/Osis/Osis_5/Osis_5.jsx";
import OSIS_6 from "./Pages/Osis/Osis_6/Osis_6.jsx";
import OSIS_7 from "./Pages/Osis/Osis_7/Osis_7.jsx";
import OSIS_8 from "./Pages/Osis/Osis_8/Osis_8.jsx";
import OSIS_9 from "./Pages/Osis/Osis_9/Osis_9.jsx";
import OSIS_10 from "./Pages/Osis/Osis_10/Osis_10.jsx";

import NoMatchPages from "./Pages/NoMatchPages/NoMatchPages.jsx";

import AlumniPage from "./Pages/Alumni/alumni.jsx";
import Billy from "./Pages/Alumni/BillyStevanus.jsx";
import Scoot from "./Pages/Alumni/ScottMoses.jsx";
import Nicole from "./Pages/Alumni/NicoleCharlene.jsx";
import Seni from "./Pages/Kegiatan/seni.jsx";
import Pramuka from "./Pages/Kegiatan/pramuka.jsx";
import DoFEIA from "./Pages/Kegiatan/DoFEIA.jsx";
import Kegiatan from "./Pages/Kegiatan/Kegiatan.jsx";
import OneCast from "./Pages/Kegiatan/onecast.jsx";
import BukuAcara from "./Pages/Home/Buku_Acara.jsx";

import CodeOne from "./Pages/Clubs/CodeOne.jsx";
import F1RST from "./Pages/Clubs/F1RST/F1RST.jsx";
import Monograph from "./Pages/Clubs/Monograph/Monograph.jsx";
import Shutterone from "./Pages/Clubs/Shutterone/Shutterone.jsx";
import SYC from "./Pages/Clubs/SYC/SYC.jsx";
import SmukiezChoir from "./Pages/Clubs/SmukiezChoir/SmukiezChoir.jsx";
import Serenity from "./Pages/Clubs/Serenity.jsx";
import Flashone from "./Pages/Clubs/Flashone/Flashone.jsx";
import Cressendo from "./Pages/Clubs/Cressendo/Cressendo.jsx";
import SClub from "./Pages/Clubs/scj.jsx";
import MUN from "./Pages/Clubs/MUN.jsx";
import Kriza from "./Pages/Clubs/kriza.jsx";
import EDS from "./Pages/Clubs/EDS/EDS.jsx";
import OneMUN from "./Pages/Clubs/OneMUN/OneMUN.jsx";
import OneJournal from "./Pages/Clubs/OneJournal/OneJournal.jsx";
import OneAID from "./Pages/Clubs/OneAID.jsx";
import Mask from "./Pages/Clubs/Mask/Mask.jsx";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="w-full h-full font-Product">
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BukuAcara" element={<BukuAcara />} />
        <Route path="/kegiatan/" element={<Kegiatan />} />
        <Route path="/kegiatan/soc" element={<SOC />} />
        <Route path="/kegiatan/soundscape" element={<Soundscape />} />
        <Route path="/kegiatan/sap" element={<STN />} />
        <Route path="/kegiatan/sapxsms" element={<SAPxSMS />} />
        <Route path="/kegiatan/sapxsms/artwork" element={<Paintings />} />
        {/* ketuker istilah artwork sama paintings pas bikin */}
        <Route
          path="/kegiatan/sapxsms/artwork/:id"
          element={<PaintingDetails />}
        />
        <Route path="/kegiatan/seni" element={<Seni />} />
        <Route path="/kegiatan/scj" element={<SClub />} />
        <Route path="/kegiatan/pramuka" element={<Pramuka />} />
        <Route path="/kegiatan/onecast" element={<OneCast />} />
        <Route path="/kegiatan/DoFE" element={<DoFEIA />} />
        {/* Clubs */}
        <Route path="/clubs/scj" element={<SClub />} />
        <Route path="/clubs/muneds" element={<MUN />} />
        <Route path="/clubs/kr1za" element={<Kriza />} />
        <Route path="/Clubs" element={<Clubpage />} />
        <Route path="/clubs/codeone" element={<CodeOne />} />
        <Route path="/clubs/f1rst" element={<F1RST />} />
        <Route path="/clubs/monograph" element={<Monograph />} />
        <Route path="/clubs/shutterone" element={<Shutterone />} />
        <Route path="/clubs/SYC" element={<SYC />} />
        <Route path="/clubs/smukiezchoir" element={<SmukiezChoir />} />
        <Route path="/clubs/serenity" element={<Serenity />} />
        <Route path="/clubs/Flashone" element={<Flashone />} />
        <Route path="/clubs/Cressendo" element={<Cressendo />} />
        <Route path="/clubs/OneMUN" element={<OneMUN />} />
        <Route path="/clubs/EDS" element={<EDS />} />
        <Route path="/clubs/OneJournal" element={<OneJournal />} />
        <Route path="/clubs/oneaid" element={<OneAID />} />
        <Route path="/clubs/Mask" element={<Mask />} />
        {/* Alasan */}
        <Route path="/alasan/Edward" element={<Edward />} />
        <Route path="/alasan/Emily" element={<Emily />} />
        <Route path="/alasan/Rania" element={<Rania />} />
        <Route path="/alasan/Jayden" element={<Jayden />} />
        <Route path="/tentang_smak1" element={<TentangKami />} />
        <Route path="/tentang_smak1/sejarah" element={<Sejarah />} />
        <Route path="/tentang_smak1/fasilitas" element={<Fasilitas />} />
        <Route path="/tentang_smak1/logo" element={<Logo />} />
        <Route path="/tentang_smak1/lagu" element={<Lagu />} />
        <Route path="/Kehidupan_smukiers" element={<KehidupanSmukiers />} />
        <Route path="/Clubs" element={<Clubpage />} />
        <Route path="/Kehidupan_smukiers/tips" element={<TipsBelajar />} />
        <Route
          path="/Kehidupan_smukiers/kegiatan"
          element={<KegiatanSetelahKelas />}
        />
        <Route path="/Kehidupan_smukiers/Alumni" element={<AlumniPage />} />
        <Route
          path="/Kehidupan_smukiers/Alumni/BillyStevanus"
          element={<Billy />}
        />
        <Route
          path="/Kehidupan_smukiers/Alumni/ScottMoses"
          element={<Scoot />}
        />
        <Route
          path="/Kehidupan_smukiers/Alumni/NicoleCharlene"
          element={<Nicole />}
        />
        {/* Hasil Seleksi Kepanitiaan */}
        {/* Hasil Seleksi Kepanitiaan */}
        {/* Hasil Seleksi Kepanitiaan */}
        <Route path="/OSIS/panitiabazone2024" element={<PanitiaBazone2024 />} />
        <Route path="/OSIS/PengumumanOSIS2025" element={<SeleksiOsis />} />
        <Route path="/OSIS/PesertaTOS2025" element={<PesertaTOS />} />
        <Route path="/OSIS/CuratorsTEDx2025" element={<CuratorsTedx />} />
        <Route path="/OSIS/SOC2025" element={<SOCTahap12025 />} />
        <Route path="/OSIS/soc2025-gel2-final" element={<SOC2025Gel2 />} />
        <Route path="/OSIS/onejournal2025" element={<OneJournal25 />} />
        <Route path="/OSIS/krizaesports2025" element={<KrizaEsports25 />} />
        <Route path="/OSIS/onefm2025" element={<OneFM />} />
        <Route path="/OSIS/sapxsms2025" element={<Sapxsms25 />} />
        <Route path="/OSIS/sapxsms2025-extended" element={<Sapext25 />} />
        <Route path="/OSIS/tahap3-shutterone2025" element={<ShutterOne25 />} />
        <Route path="/OSIS/tahap-final-TOS25" element={<TOS25 />} />
        <Route path="/OSIS/sog2025" element={<Sog25 />} />
        <Route path="/OSIS/LitClub2025" element={<Literasi25 />} />
        <Route path="/OSIS/TEDx2025" element={<Tedx25 />} />
        <Route path="/OSIS/TEDx2025-StudentSpeaker" element={<Tedxs25 />} />
        <Route path="/OSIS/Osis2026" element={<Osis26 />} />
        {/* OSIS */}
        <Route path="/OSIS" element={<Osis />} />
        <Route path="/OSIS/bph" element={<BPH />} />
        <Route path="/OSIS/bidang1" element={<OSIS_1 />} />
        <Route path="/OSIS/bidang2" element={<OSIS_2 />} />
        <Route path="/OSIS/bidang3" element={<OSIS_3 />} />
        <Route path="/OSIS/bidang4" element={<OSIS_4 />} />
        <Route path="/OSIS/bidang5" element={<OSIS_5 />} />
        <Route path="/OSIS/bidang6" element={<OSIS_6 />} />
        <Route path="/OSIS/bidang7" element={<OSIS_7 />} />
        <Route path="/OSIS/bidang8" element={<OSIS_8 />} />
        <Route path="/OSIS/bidang9" element={<OSIS_9 />} />
        <Route path="/OSIS/bidang10" element={<OSIS_10 />} />
        <Route path="/OSIS/Emagz" element={<Emagz />} />
        <Route path="/OSIS/ASS1ST" element={<Ass1st />} />
        <Route path="/OSIS/ASS1ST/Kedokteran" element={<Kedokteran />} />
        <Route path="/OSIS/ASS1ST/Farmasi" element={<Farmasi />} />
        <Route path="/OSIS/ASS1ST/Keguruan" element={<Keguruan />} />
        <Route path="/OSIS/ASS1ST/Sosiologi" element={<Sosiologi />} />
        <Route path="/OSIS/ASS1ST/Akutansi" element={<Akutansi />} />
        <Route path="/OSIS/ASS1ST/Hukum" element={<Hukum />} />
        <Route path="/OSIS/ASS1ST/Psikologi" element={<Psikologi />} />
        <Route path="/OSIS/ASS1ST/Teknik_sipil" element={<Sipil />} />
        <Route path="/OSIS/ASS1ST/Pertambangan" element={<Pertambangan />} />
        <Route path="*" element={<NoMatchPages />} />
      </Routes>
    </div>
  );
}

export default App;
