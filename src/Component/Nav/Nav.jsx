import React, { useState } from "react";
import HeadlessSlideOver from "./HeadlessSlideOver";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../Hooks";
import { useLocation } from "react-router-dom";

//Import component
import Dropdown from "./Dropdown";

//Import Image
import Logo_SMAK1 from "/Image/Logo_SMAK1.webp";
import MobileSlideOver from "./MobileSlideOver";
// import { GiPublicSpeaker } from "react-icons/gi";

const Nav = (props) => {
  const location = useLocation();
  const mainPath = location.pathname;
  const lowerPath = mainPath.toLowerCase();
  function removeTrailingSlash(str) {
    return str.endsWith("/") ? str.slice(0, -1) : str;
  }
  const path = removeTrailingSlash(lowerPath);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  const pathSMAK1 =
    path === "" ||
    path === "/tentang_smak1" ||
    path === "/tentang_smak1/sejarah" ||
    path === "/tentang_smak1/fasilitas" ||
    path === "/tentang_smak1/logo" ||
    path === "/tentang_smak1/lagu";

  const pathOSIS =
    path === "/osis" ||
    path === "/osis/bph" ||
    path === "/osis/bidang1" ||
    path === "/osis/bidang2" ||
    path === "/osis/bidang3" ||
    path === "/osis/bidang4" ||
    path === "/osis/bidang5" ||
    path === "/osis/bidang6" ||
    path === "/osis/bidang7" ||
    path === "/osis/bidang8" ||
    path === "/osis/bidang9" ||
    path === "/osis/bidang10" ||
    path === "/osis/emagz" ||
    path === "/osis/ass1st" ||
    path === "/osis/ass1st/kedokteran" ||
    path === "/osis/ass1st/farmasi" ||
    path === "/osis/ass1st/keguruan" ||
    path === "/osis/ass1st/sosiologi" ||
    path === "/osis/ass1st/akutansi" ||
    path === "/osis/ass1st/hukum" ||
    path === "/osis/ass1st/psikologi" ||
    path === "/osis/ass1st/teknik_sipil" ||
    path === "/osis/ass1st/pertambangan";

  const pathKehidupan =
    path === "/kehidupan_smukiers" ||
    path === "/kehidupan_smukiers" ||
    path === "/clubs" ||
    path === "/kehidupan_smukiers/tips" ||
    path === "/kehidupan_smukiers/kegiatan" ||
    path === "/kehidupan_smukiers/alumni" ||
    path === "/kehidupan_smukiers/alumni/billystevanus" ||
    path === "/kehidupan_smukiers/alumni/scottmoses" ||
    path === "/kehidupan_smukiers/alumni/nicolecharlene" ||
    path === "/kehidupan_smukiers/calendar";

  const pathKegiatan =
    path === "/kegiatan" ||
    path === "/kegiatan/soc" ||
    path === "/kegiatan/soundscape" ||
    path === "/kegiatan/sapxsms" ||
    path === "/clubs/kr1za" ||
    path === "/kegiatan/seni" ||
    path === "/kegiatan/scj" ||
    path === "/kegiatan/pramuka" ||
    path === "/kegiatan/onecast" ||
    path === "/kegiatan/dofe" ||
    path === "/kegiatan/muneds" ||
    path === "/kegiatan/lainnya";

  let menuArray = [pathSMAK1, pathOSIS, pathKehidupan, pathKegiatan];
  const [menu, setMenu] = useState(menuArray);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const [mobileNavbarisOpen, setMobileNavbarIsOpen] = useState(false);
  const setMenuValue = (props) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  };

  function openHandler() {
    setIsHeadlessOpen(true);
  }

  function closeHandler() {
    setIsHeadlessOpen(false);
  }

  return (
    <>
      <div className="Circle"></div>
      <MobileSlideOver
        isOpen={mobileNavbarisOpen}
        setMobileNavbarIsOpen={setMobileNavbarIsOpen}
      />
      <nav className="">
        <div
          className={classNames(
            props.forceNavbar ||
              props.carouselCurrentSlide > 0 ||
              scrollPosition > 0
              ? "bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
              : "lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]",
            "lg:flex lg:flex-rows lg:flex-wrap items-center pt-4 sm:pt-5 sm:pb-4 md:py-5 lg:px-18 md:px-10 px-4 lg:py-0 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200",
          )}
        >
          <div className="lg:grid-cols-none grid grid-cols-3 pb-3 sm:pb-0">
            <Link to="/" className="rounded-lg cursor-pointer col-span-2">
              <div className="">
                <img
                  className="object-scale-down h-5 md:h-6 lg:h-7 "
                  alt="smakone"
                  src={Logo_SMAK1}
                />
              </div>
            </Link>
            <div
              aria-label="toggler"
              className="flex justify-end items-center pr-2 lg:hidden"
            >
              <button
                aria-label="open"
                id="open"
                onClick={() => {
                  setMobileNavbarIsOpen(mobileNavbarisOpen ? false : true);
                }}
                className={`${
                  mobileNavbarisOpen ? "hidden" : ""
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="close"
                id="close"
                onClick={() => {
                  setMobileNavbarIsOpen(mobileNavbarisOpen ? false : true);
                }}
                className={`${
                  mobileNavbarisOpen ? "" : "hidden"
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:items-center lg:w-auto w-full sm:pt-1 lg:py-5 leading-normal hidden lg:block ">
            <div className="flex flex-rows place-items-center gap-4 sm:gap-8 md:gap-3 md:justify-end lg:justify-center">
              <Dropdown
                title="Tentang SMAK 1"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                      path === "/tentang_smak1" ||
                      path === "/tentang_smak1/sejarah" ||
                      path === "/tentang_smak1/fasilitas" ||
                      path === "/tentang_smak1/logo" ||
                      path === "/tentang_smak1/lagu"
                        ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                        : "link-underline"
                    }`}
                dir1="/tentang_smak1"
                dir2="/tentang_smak1/Sejarah"
                dir3="/tentang_smak1/Fasilitas"
                dir4="/tentang_smak1/Logo"
                dir5="/tentang_smak1/Lagu"
                menu1="Sekilas Pandang"
                menu2="Sejarah, Visi, dan Misi"
                menu3="Fasilitas"
                menu4="Logo"
                menu5="Lagu Tema"
                smak1={true}
              />
              <Dropdown
                title="OSIS"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                      path === "/osis" ||
                      path === "/osis/bph" ||
                      path === "/osis/bidang1" ||
                      path === "/osis/bidang2" ||
                      path === "/osis/bidang3" ||
                      path === "/osis/bidang4" ||
                      path === "/osis/bidang5" ||
                      path === "/osis/bidang6" ||
                      path === "/osis/bidang7" ||
                      path === "/osis/bidang8" ||
                      path === "/osis/bidang9" ||
                      path === "/osis/bidang10" ||
                      path === "/osis/emagz" ||
                      path === "/osis/ass1st" ||
                      path === "/osis/ass1st/kedokteran" ||
                      path === "/osis/ass1st/farmasi" ||
                      path === "/osis/ass1st/keguruan" ||
                      path === "/osis/ass1st/sosiologi" ||
                      path === "/osis/ass1st/akutansi" ||
                      path === "/osis/ass1st/hukum" ||
                      path === "/osis/ass1st/psikologi" ||
                      path === "/osis/ass1st/teknik_sipil" ||
                      path === "/osis/ass1st/pertambangan"
                        ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                        : "link-underline"
                    }`}
                dir1="/OSIS"
                dir2="/OSIS/Emagz"
                dir3="/OSIS/ASS1ST"
                // dir3=""
                menu1="Tentang Osis"
                menu2="E-Magazine (Archived)"
                menu3="Ass1st"
                // menu3=""
                osis={true}
              />
              <Dropdown
                title="Kehidupan SMUKIERS"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                      path === "/kehidupan_smukiers" ||
                      path === "/kehidupan_smukiers" ||
                      // path === "/clubs" ||
                      path === "/kehidupan_smukiers/tips" ||
                      path === "/kehidupan_smukiers/kegiatan" ||
                      path === "/kehidupan_smukiers/alumni" ||
                      path === "/kehidupan_smukiers/alumni/billystevanus" ||
                      path === "/kehidupan_smukiers/alumni/scottmoses" ||
                      path === "/kehidupan_smukiers/alumni/nicolecharlene" ||
                      path === "/kehidupan_smukiers/calendar"
                        ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]"
                        : "link-underline"
                    }`}
                dir1="/Kehidupan_smukiers"
                // dir2="/Clubs"
                dir2="/Kehidupan_smukiers/Tips"
                dir3="/Kehidupan_smukiers/Kegiatan"
                dir4="/Kehidupan_smukiers/Alumni"
                dir5="/Kehidupan_smukiers/Calendar"
                menu1="Kehidupan SMUKIERS"
                // menu2="Clubs"
                menu2="Tips Belajar"
                menu3="Kegiatan Setelah Kelas"
                menu4="Alumni"
                menu5="Calendar"
                Kehidupan={true}
              />
              <Dropdown
                title="Kegiatan"
                class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                      path === "/kegiatan" ||
                      path === "/kegiatan/soc" ||
                      path === "/kegiatan/soundscape" ||
                      path === "/kegiatan/sapxsms" ||
                      path === "/clubs/kr1za" ||
                      path === "/kegiatan/seni" ||
                      path === "/kegiatan/scj" ||
                      // path === "/kegiatan/pramuka" ||
                      // path === "/kegiatan/onecast" ||
                      path === "/kegiatan/dofe" ||
                      path === "/kegiatan/muneds" ||
                      path === "/kegiatan/lainnya"
                        ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.5)]"
                        : "link-underline"
                    }`}
                dir1="/Kegiatan"
                dir2="/Kegiatan/SOC"
                dir3="/Kegiatan/Soundscape"
                dir4="/kegiatan/sapxsms"
                dir5="/clubs/KR1ZA"
                dir6="/Kegiatan/Seni"
                dir7="/Kegiatan/SCJ"
                // dir8="/Kegiatan/Pramuka"
                // dir9="/Kegiatan/OneCast"
                dir8="/Kegiatan/DofE"
                // dir9="/Kegiatan/MUNEDS"
                // dir10="/Kegiatan/Lainnya"
                menu1="Kegiatan"
                menu2="Smakonecup"
                menu3="Soundscape"
                menu4="Smukiez Art Performance"
                menu5="KR1ZA"
                menu6="Seni"
                menu7="Science Club"
                menu8="The Duke of Edinburgh’s International Award"
                kegiatan={true}
              />
              <button
                className={`md:px-3 py-2 transition duration-500 border-b-2 border-transparent cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl bg-transparent text-black relative after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-left after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  path === "/clubs"
                    ? "after:scale-x-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.125)]"
                    : ""
                }`}
              >
                <p
                  className={`${
                    path === "/clubs"
                      ? "drop-shadow-[0_4px_4px_rgba(0,0,0,0.125)]"
                      : ""
                  }`}
                >
                  <Link to="/clubs">Clubs</Link>
                </p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
