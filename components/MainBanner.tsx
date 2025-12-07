"use client";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";
import data from "@/public/data/data.json"

export default function MainBanner() {
  const [isWide, setIsWide] = useState(false);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Map", href: "/map" },
    { text: "Explore", href: "/explore" },
    { text: "About", href: "/about" },
  ];

  // Track screen width
  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth > 765);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <header className={`${UIMainFont.className} fixed top-0 left-0 w-full z-[1000] bg-black border-b-[3px] border-white/20`}>
      <div className="flex items-center justify-between h-[8vh] px-[1.5vh]">
        {/* LEFT: Logo + Horizontal menu */}
        <div className="flex items-center gap-[1.5vh]">
          <img
            src="/page_icons/et_logo.svg"
            alt="Logo"
            className="h-[5vh] w-auto object-contain max-h-[48px]"
          />

          {isWide && (
            <nav className="flex gap-[1vw]">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => (window.location.href = link.href)}
                  className="text-white text-[clamp(1rem,1.8vw,1.4rem)] px-[clamp(0.6em,1.5vw,1em)] py-[0.3em] rounded-md transition-colors hover:bg-white/20 active:bg-white/70"
                >
                  {link.text}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* RIGHT: Version */}
        <div className="text-white text-[1.5rem]">{data.versionName} <br/> {data.versionNumber}</div>
      </div>
    </header>
  );
}




