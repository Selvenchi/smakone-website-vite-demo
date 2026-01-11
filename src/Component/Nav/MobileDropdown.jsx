import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MobileDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation();

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="cursor-pointer select-none flex items-center justify-between"
      >
        {item.title}
        <svg
          id="icon1"
          className={`transform transition-all duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        {item.nav.map(function (nav) {
          return (
            <button
              className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full 
                ${path.pathname === nav.link ? "font-bold" : "text-gray-500"}
                `}
            >
              {nav.icon}
              <p className="text-base leading-4">
                <Link to={nav.link}>{nav.title}</Link>
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
