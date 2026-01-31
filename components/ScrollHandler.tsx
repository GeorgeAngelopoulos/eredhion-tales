"use client";
import { useEffect, useRef } from "react";

export default function ScrollHandler() {
  const lastState = useRef<"top" | "scrolled">("top");

  useEffect(() => {
    const banner = document.getElementById("ABN");
    const content = document.getElementById("AC");
    if (!banner || !content) return;

    const triggerPoint = 8;

    const onScroll = () => {
      const scrolled = window.scrollY > triggerPoint;

      // ↓ Scroll DOWN past trigger
      if (scrolled && lastState.current === "top") {
        lastState.current = "scrolled";

        banner.classList.remove("slide-in-top", "is-shown");
        banner.classList.add("slide-out-top", "is-hidden");

        content.classList.remove("slide-out-bot", "is-hidden");
        content.classList.add("slide-in-bot", "is-shown");
      }

      // ↑ Scroll UP above trigger
      if (!scrolled && lastState.current === "scrolled") {
        lastState.current = "top";

        banner.classList.remove("slide-out-top", "is-hidden");
        banner.classList.add("slide-in-top", "is-shown");

        content.classList.remove("slide-in-bot", "is-shown");
        content.classList.add("slide-out-bot", "is-hidden");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}