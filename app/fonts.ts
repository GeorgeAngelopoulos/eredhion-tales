import { Alike_Angular, Inter, Tangerine } from "next/font/google";

// Alike Angular for Main UI Components
export const UIMainFont = Alike_Angular({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Tangerine for Tales Writing
export const TalesFont = Tangerine({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

// Inter for general
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});