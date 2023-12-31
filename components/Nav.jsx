"use client";

import { useState, useEffect } from "react";
import leerhuislogo from "../public/images/leerhuislogo2.png";
import hamburger from "../public/icons/hamburger.png";
import Image from "next/image";
import navLinks from "../utils/Menu";
import DropDown from "./DropDown";
import Menuoverlay from "./Menuoverlay";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setShowMenuOverlay(true);
  };

  return (
    <>
      <div
        className={`${
          scrolled
            ? "navbar flex justify-between px-20 py-4 transform ease-in-out duration-500 -translate-y-[100px]"
            : "navbar flex justify-between px-20 py-4 transform ease-in-out duration-500 -translate-y-0"
        } max-hamburger:px-8`}
      >
        <div className="cursor-pointer">
          <Image
            src={leerhuislogo}
            width={100}
            height={40}
            alt="leerhuis"
            priority={true}
          />
        </div>

        <div className="w-[820px] flex justify-between items-center pl-8 text-md max-hamburger:hidden">
          {navLinks.map((item) => {
            const { submenu } = item;
            return <DropDown key={item.id} item={item} submenu={submenu} />;
          })}
        </div>
        <div className="max-hamburger:block pt-2 hamburger:hidden cursor-pointer">
          <Image
            src={hamburger}
            width={50}
            height={50}
            alt="hamburger"
            onClick={openMenu}
          />
        </div>
      </div>

      <Menuoverlay
        setShowMenuOverlay={setShowMenuOverlay}
        showMenuOverlay={showMenuOverlay}
      />
    </>
  );
};

export default Nav;

