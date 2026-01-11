import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import january from "/Image/Home/Kehidupan/Calendar/2026-January.webp";

const Calendar = () => {
  return (
    <div>
      <Nav />

      <div className="flex justify-center flex-col mx-auto w-full h-full pb-12 mt-[7rem] sm:mt-[8rem]">
        <p className="flex justify-center sm:text-2xl">Smukie's</p>
        <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem]">
          Calendar
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center flex-col items-center">
          <p>2026</p>
          <div className="flex justify-center items-center gap-5 mb-5">
            <IoIosArrowBack className="cursor-pointer" size={30} />
            <p className="text-2xl">January</p>
            <IoIosArrowForward className="cursor-pointer" size={30} />
          </div>
        </div>

        <img src={january} className="h-full w-full sm:w-[600px] mx-auto" />
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;
