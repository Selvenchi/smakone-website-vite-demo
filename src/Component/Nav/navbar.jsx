import Logo_SMAK1 from "/Image/Logo_SMAK1.webp";
import SOC from "/Image/Nav/SMAKONECUP.webp";
import DoFE from "/Image/Nav/DofE.webp";

import { IoEyeSharp } from "react-icons/io5";
import { AiFillFlag } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { RiShieldCrossFill } from "react-icons/ri";
import { IoMdMusicalNotes } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { GiLightBulb } from "react-icons/gi";
import { GiThrowingBall } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import { MdTheaters } from "react-icons/md";
import { IoIosBasketball } from "react-icons/io";
import { BsFillBrushFill } from "react-icons/bs";
import { IoFlaskSharp } from "react-icons/io5";
import { GiCalendar } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
const ICON_SIZE = 24;

export const navigations = [
  {
    title: "TENTANG SMAK 1",
    nav: [
      {
        title: "Sekilas Pandang",
        link: "/tentang_smak1",
        icon: <IoEyeSharp size={ICON_SIZE} />,
      },
      {
        title: "Sejarah, Visi, dan Misi",
        link: "/tentang_smak1/Sejarah",
        icon: <AiFillFlag size={ICON_SIZE} />,
      },
      {
        title: "Fasilitas",
        link: "/tentang_smak1/Fasilitas",
        icon: <FaBuilding size={ICON_SIZE} />,
      },
      {
        title: "Logo",
        link: "/tentang_smak1/Logo",
        icon: <RiShieldCrossFill size={ICON_SIZE} />,
      },
      {
        title: "Lagu",
        link: "/tentang_smak1/Lagu",
        icon: <IoMdMusicalNotes size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "OSIS",
    nav: [
      {
        title: "Tentang OSIS",
        link: "/osis",
        icon: <BsFillPeopleFill size={ICON_SIZE} />,
      },
      {
        title: "E-Magazine (Archived)",
        link: "/osis/emagz",
        icon: <BsBookFill size={ICON_SIZE} />,
      },
      {
        title: "Ass1st",
        link: "/osis/ass1st",
        icon: <FaUniversity size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "KEHIDUPAN SMUKIERS",
    nav: [
      {
        title: "Kehidupan SMUKIERS",
        link: "/kehidupan_smukiers",
        icon: <IoIosPaperPlane size={ICON_SIZE} />,
      },
      {
        title: "Tips Belajar",
        link: "/kehidupan_smukiers/tips",
        icon: <GiLightBulb size={ICON_SIZE} />,
      },
      {
        title: "Kegiatan Setelah Kelas",
        link: "/kehidupan_smukiers/kegiatan",
        icon: <GiThrowingBall size={ICON_SIZE} />,
      },
      {
        title: "Alumni",
        link: "/kehidupan_smukiers/alumni",
        icon: <IoSchool size={ICON_SIZE} />,
      },
      {
        title: "Calendar",
        link: "/kehidupan_smukiers/calendar",
        icon: <GiCalendar size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "KEGIATAN",
    nav: [
      {
        title: "Kegiatan",
        link: "/kegiatan",
        icon: <FaRunning size={ICON_SIZE} />,
      },
      {
        title: "Smakonecup",
        link: "/kegiatan/SOC",
        icon: <img src={SOC} alt="SMAKONECUP" className="grayscale w-6" />,
      },
      {
        title: "Soundscape",
        link: "/kegiatan/soundscape",
        icon: <SiGooglepodcasts size={ICON_SIZE} />,
      },
      {
        title: "Smukiez Art Performance",
        link: "/kegiatan/SAP",
        icon: <BsFillBrushFill size={ICON_SIZE} />,
      },
      {
        title: "KR1ZA",
        link: "/clubs/kr1za",
        icon: <IoIosBasketball size={ICON_SIZE} />,
      },
      {
        title: "Seni",
        link: "/kegiatan/seni",
        icon: <MdTheaters size={ICON_SIZE} />,
      },
      {
        title: "Science Club",
        link: "/kegiatan/SCJ",
        icon: <IoFlaskSharp size={ICON_SIZE} />,
      },
      {
        title: "DofE",
        link: "/kegiatan/dofe",
        icon: <img src={DoFE} alt="DofE" className="w-6 h-6 " />,
      },
    ],
  },
  {
    title: "CLUBS",
    nav: [
      {
        title: "Daftar Clubs",
        link: "/clubs",
        icon: <MdGroups size={ICON_SIZE} />,
      },
    ],
  },
];
