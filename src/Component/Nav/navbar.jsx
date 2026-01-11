import { RiShieldCrossFill } from "react-icons/ri";

const ICON_SIZE = 24;

export const navigations = [
  {
    title: "TENTANG SMAK 1",
    nav: [
      {
        title: "Sekilas Pandang",
        link: "/tentang_smak1",
        icon: <RiShieldCrossFill size={ICON_SIZE} />,
      },
      {
        title: "Sejarah, Visi, dan Misi",
        link: "/tentang_smak1/Sejarah",
        icon: <RiShieldCrossFill size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "OSIS",
    nav: [],
  },
  {
    title: "KEHIDUPAN SMUKIERS",
    nav: [],
  },
];
