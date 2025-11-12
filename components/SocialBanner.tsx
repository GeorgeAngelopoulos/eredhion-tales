"use client";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";

export default function SocialBanner() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth > 765);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100064840174534",
      img: "/page_icons/et_facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/gangelopoulos_creative/",
      img: "/page_icons/et_instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UC6D149T7AaC8EcsCr8dGk4A",
      img: "/page_icons/et_youtube.svg",
      alt: "YouTube",
    },
    {
      href: "https://gangelopoulos_creative.artstation.com/projects",
      img: "/page_icons/et_artstation.svg",
      alt: "ArtStation",
    },
  ];

  return (
    <div
      id="SBNN"
      className="
        relative bottom-0 left-0 w-full h-[18vh]
        flex items-center justify-center flex-shrink-0
        bg-black z-[1] box-border
        gap-[clamp(0.6em,2.5vw,1.5em)]
        py-[clamp(0.5em,2vw,1em)]
        m-0
      "
    >
      {isWide && (
        <>
          <img
            src="/page_icons/gangelo_logo.svg"
            alt="Logo"
            className="
              w-[clamp(3em,6vw,5em)]
              h-[clamp(3em,6vw,5em)]
              object-contain mb-[0.5%]
            "
          />
          <span className={`
              ${UIMainFont.className}
              italic text-white
              text-[clamp(1.2em,2.5vw,2em)]
              mr-[clamp(0.5em,2vw,1em)]`}
          >
          Follow George Angelopoulos Creative
          </span>
        </>
      )}

      {socials.map((social, i) => (
        <a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[clamp(4em,5vw,6em)]
            h-[clamp(4em,5vw,6em)]
            rounded-full bg-[#111]
            flex items-center justify-center
            mx-[clamp(0.3em,1vw,0.7em)]
            transition-all duration-300 ease-in-out
            shadow-[0_0_0.5em_rgba(255,255,255,0.1)]
            hover:bg-[#444] hover:scale-110
          "
        >
          <img
            src={social.img}
            alt={social.alt}
            className="
              w-[clamp(2em,3.0vw,3.2em)]
              w-[clamp(2em,3.0vw,3.2em)]
              object-contain
            "
          />
        </a>
      ))}
    </div>
  );
}