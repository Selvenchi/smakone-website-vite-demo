import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Icon for Email, Instagram, Line, and Youtube
import { ImMail2 } from "react-icons/im";
import {
  FaYoutubeSquare,
  FaTiktok,
  FaInstagramSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto">
          <div className="px-5 py-20 sm:px-10 md:px-12">
            <div className="bg-cover bg-footer-image rounded-xl ">
              <div className="relative -z-10">
                <img
                  className="rounded-xl object-cover w-full h-[16rem] md:h-[20rem] xl:h-[24rem]  "
                  src="/Image/Background_Footer.webp"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                  <p className="mx-6 mb-10 text-xl font-bold leading-normal text-center text-white sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    Cari Tahu Informasi Terkini Mengenai SMAK 1 <br />
                    di Instagram Kami
                  </p>
                  <div>
                    <a
                      href="https://www.instagram.com/smukiee/"
                      target="blank"
                      className="flex justify-center px-6 py-3 text-xl font-bold text-white rounded-full md:text-2xl bg-light-blue md:px-8 md:py-4 lg:py-4 lg:px-9 xl:px-10 hover:bg-blue-700"
                    >
                      <div className="flex gap-1.5">
                        <div className="mt-0.5">
                          <FaInstagram className="w-full h-full" />
                        </div>
                        <span>smukiee</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-scale-down w-1/2 h-8 mx-auto mb-8 sm:w-9/12 sm:mb-12"
                alt="smakone"
                src={"/Image/Logo_SMAK1.webp"}
              />
            </div>

            <div>
              <div className="flex justify-center gap-3 px-8 md:justify-around md:mx-10 md:pb-12">
                <div className="flex flex-col gap-y-2 xl:gap-y-4 text-gray-500 md:font-bold text-[0.9rem] sm:text-lg xl:text-xl">
                  <Link
                    to="/OSIS"
                    className="font-bold text-black hover:text-gray-500"
                  >
                    Tentang OSIS
                  </Link>
                  <HashLink to="/OSIS#visi&misi" className="hover:text-black">
                    Visi & Misi Kami
                  </HashLink>
                  <HashLink to="/OSIS#bidang" className="hover:text-black">
                    Services
                  </HashLink>
                  <Link to="/OSIS/Emagz" className="hover:text-black">
                    E-Magazine
                  </Link>
                  <Link to="/OSIS/ASS1ST" className="hover:text-black">
                    Ass1st
                  </Link>
                </div>
                <div className="flex flex-col text-[0.9rem] sm:text-lg xl:text-xl gap-y-2 xl:gap-y-4 text-gray-500 md:font-bold">
                  <Link
                    to="/Kehidupan_smukiers"
                    className="font-bold text-black hover:text-gray-500"
                  >
                    Kehidupan SMUKIERS
                  </Link>
                  <Link
                    to="/Kehidupan_smukiers/Tips"
                    className="hover:text-black"
                  >
                    Tips Belajar
                  </Link>
                  <Link
                    to="/Kehidupan_smukiers/Kegiatan"
                    className="hover:text-black"
                  >
                    Kegiatan
                  </Link>
                  <Link
                    to="/Kehidupan_smukiers/Alumni"
                    className="hover:text-black"
                  >
                    Alumni
                  </Link>
                </div>

                <div className="hidden md:inline">
                  <p className="pb-2 text-lg font-semibold text-right">
                    Contact Us
                  </p>
                  <div className="md:flex md:flex-row md:gap-x-1">
                    <a
                      href="mailto:smak1.osis@bpkpenaburjakarta.or.id"
                      className="mt-[0.1em]"
                    >
                      <ImMail2 size={27} />
                    </a>
                    <a href="https://www.instagram.com/smukiee/" target="blank">
                      <FaInstagramSquare size={30} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@smukierz"
                      target="blank"
                      className="mt-[0.1em]"
                    >
                      <FaTiktok size={27} />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ"
                      target="blank"
                    >
                      <FaYoutubeSquare size={30} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center md:hidden">
                <p className="pt-4 pb-2 text-lg font-semibold">Contact Us</p>
                <div className="flex flex-row justify-center pb-12 gap-x-1">
                  <a
                    href="mailto:smak1.osis@bpkpenaburjakarta.or.id"
                    className="mt-[0.1em]"
                  >
                    <ImMail2 size={27} />
                  </a>
                  <a href="https://www.instagram.com/smukiee/" target="blank">
                    <FaInstagramSquare size={30} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@smukierz"
                    target="blank"
                    className="mt-[0.1em]"
                  >
                    <FaTiktok size={27} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ"
                    target="blank"
                  >
                    <FaYoutubeSquare size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="px-10 bg-gray-200">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                  <div className="flex pt-6 pb-3 justify-self-center lg:justify-self-start">
                    <img
                      src={"/Image/Penabur_logo.webp"}
                      className="object-scale-down h-20 mr-2"
                      alt="BPK PENABUR Logo"
                    />
                    <img
                      src={"/Image/OSIS_Logo.webp"}
                      className="object-scale-down h-20"
                      alt="OSIS SMAK 1 Logo"
                    />
                  </div>
                  <div className="flex object-center my-auto justify-self-center">
                    <p className="font-bold text-center text-gray-500 align-center xl:text-lg">
                      Jalan Tanjung Duren Raya Nomor 4<br />
                      Jakarta Barat, DKI Jakarta 11470
                      <br />
                      Tel: (+62)21 5666962
                    </p>
                  </div>
                  <div className="flex py-5 my-auto justify-self-center lg:justify-self-end">
                    <img
                      src={"/Image/logo_codeone.webp"}
                      className="object-scale-down h-12 mr-2"
                      alt="Logo CodeOne"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-1 text-xs text-center bg-gray-100">
              <p>
                Copyright © 2024 SMAK ONE Student Council All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
