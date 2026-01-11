import { FaBuilding } from "react-icons/fa";
import { navigations } from "./navbar";
import { Link, useLocation } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";

export default function MobileSlideOver({ isOpen, setMobileNavbarIsOpen }) {
  return (
    <>
      {/* Background */}
      <nav
        className={`lg:hidden fixed bg-[rgba(0,0,0,0.2)] inset-0 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => {
          setMobileNavbarIsOpen(false);
        }}
      ></nav>
      {/* Content */}
      <div
        className={`lg:hidden fixed inset-0 h-full ml-auto transition-smooth flex flex-col py-6 bg-white shadow-xl overflow-y-scroll max-w-[30rem] pt-24 p-12 ${
          isOpen ? "translate-x-0" : "translate-x-[30rem]"
        }`}
      >
        {navigations.map(function (item) {
          return <MobileDropdown item={item} />;
        })}
      </div>
    </>
  );
}
