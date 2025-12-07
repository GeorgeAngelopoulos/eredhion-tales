"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const banner = document.getElementById("ABN");
    const container = document.getElementById("AC");

    if (!banner || !container) return;

    const onScroll = () => {
      const triggerPoint = window.innerHeight * 0.001;

      if (window.scrollY > triggerPoint) {
        banner.classList.add("hidden");
        container.classList.add("visible");
      } else {
        banner.classList.remove("hidden");
        container.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null; // This component only runs logic
}