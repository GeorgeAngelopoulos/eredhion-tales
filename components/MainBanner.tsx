"use client";
import React, { useEffect, useState, useRef, RefObject } from "react";
import { UIMainFont } from "@/app/fonts";
import data from "@/public/data/data.json"
import { SearchBanner, SearchBar } from "./SearchBar";     
import SearchHandler from "./SearchHandler";

export type NavLink = {
  text: string;
  href: string;
}

type MainButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type VerticalMenuProps = {
  navLinks: NavLink[];
  isOpen?: boolean;
  manualToggle: RefObject<boolean>;
}

type MenuProps = {
  navLinks: NavLink[];
  isOpen?: boolean;
}

export default function MainBanner() {

    const [isWide, setIsWide] = useState<boolean>(() => {
      if (typeof window === "undefined") return true;
      return window.innerWidth > 765;
    });

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [typed, setTyped] = useState<boolean>(false);

    const manualToggle = useRef(false);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    const resetSearch = () => {
      setQuery("");
      setResults([]);
      setTyped(false);
    }

    const navLinks: NavLink[] = [
      { text: "Home", href: "/" },
      { text: "Map", href: "/map" },
      { text: "Explore", href: "/explore" },
      { text: "About", href: "/about" },      
    ];

    // Track screen width
    useEffect(() => {
      const checkWidth = () => {
        setIsWide(window.innerWidth > 765);
      };
      window.addEventListener("resize", checkWidth);
      return () => window.removeEventListener("resize", checkWidth);
    }, []);

    // Close menu when switching to wide
    useEffect(() => {
      if (isWide) setMenuOpen(false);
    }, [isWide]);

    // Flag for when anything is typed in the SearchBar
    useEffect(() => {
      setTyped(query.trim().length > 2);
    }, [query]);

    // reset Search when clicked outside of MainBanner
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!bannerRef.current) return;
        if (!bannerRef.current.contains(e.target as Node)) {
          resetSearch(); // CHANGE: click-away resets search
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <>
        <header 
          ref={bannerRef}
          className={`
            ${UIMainFont.className}
            fixed top-0 left-0
            w-full z-[1000]
            bg-color-var
            border-b-var 
            border-color-var`}
        >
          <div className="flex items-center justify-between h-banner px-[1.5vh]">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">
              {isWide ? (<HorizontalMenu navLinks={navLinks}/>)
                      : (<MainButton onClick= {() => { manualToggle.current = true; setMenuOpen((v) => !v);}}> ☰ </MainButton>)}

              <SearchBar query={query} setQuery={setQuery} onFocus={resetSearch}/>
              <SearchHandler query={query} setResults={setResults}/>
              <SearchBanner results={results} typed={typed} onSelect={resetSearch}/>
            </div>

            {/* RIDE SIDE */}
            <BannerVersion/>

          </div>
        </header>

        {!isWide && (<VerticalMenu isOpen = {menuOpen} navLinks={navLinks} manualToggle={manualToggle}/>)}
      </>
    );   
}

export function HorizontalMenu({ navLinks }: MenuProps) {
    return (
      <nav
        className="flex gap-1 items-center">
          <BannerLogo/>
          {navLinks.map((link, i) => (
            <MainButton key={i} onClick={() => (window.location.href = link.href)} children={link.text}/>
          ))}
      </nav>
    );
}

export function VerticalMenu({ navLinks, isOpen, manualToggle }: VerticalMenuProps) {

    const open = isOpen ?? false;
    const prevIsOpen = useRef<boolean | null>(null);

    // Track only manual clicks
    useEffect(() => {
      if (!manualToggle.current) return; // ignore automatic re-renders
      prevIsOpen.current = open;       // update previous state
      manualToggle.current = false;      // reset after handling
    }, [open, manualToggle]);

    const shouldAnimate = prevIsOpen.current !== null;
    const isOpening = prevIsOpen.current === false && open;
    const isClosing = prevIsOpen.current === true && !open;

    return (
      <nav 
        className={`
          ${UIMainFont.className}
          fixed left-0
          top-banner-offset
          text-white
          bg-color-var
          border-var
          border-color-var
          shadow-[0_4px_10px_rgba(0,0,0,0.3)]
          px-[30px] py-[15px]
          z-[999] overflow-y-auto        
          
        ${shouldAnimate
          ? isOpening
            ? "[animation:slideFromTopIn_0.7s_ease-in-out_forwards] pointer-events-auto"
            : isClosing
              ? "[animation:slideFromTopOut_0.7s_ease-in-out_forwards] pointer-events-none"
              : ""
          : open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-2 items-center">
            <BannerLogo/>
            {navLinks.map((link, i) => (
              <MainButton key={i} onClick={() => (window.location.href = link.href)} children={link.text}/>
            ))}
        </div>
      </nav>
    );
}

export function MainButton({ onClick, children }: MainButtonProps) {
    return (
      <button
        onClick={onClick}
        className="
          text-left text-white
          text-lg md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl
          px-4 py-2 rounded-md
          hover:bg-white/20
          active:bg-white/70"
      >
      {children}
      </button>
    );
}

export function BannerLogo() {
    return (
      <img
        src = "/page_icons/et_logo.svg"
        className="h-[5vh] w-auto object-contain max-h-[100px]"/>
    );
}

export function BannerVersion() {
    return (
        <div 
          className="
            text-center text-white
            text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl"
        > 
        {data.versionName} <br/> {data.versionNumber}
        </div>
    );
}





