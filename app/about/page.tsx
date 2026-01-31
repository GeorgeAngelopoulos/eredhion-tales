import Image from "next/image";
import {Background} from "@/components/Misc";
import { MainPageHeadline } from "@/components/Writings";
import { AboutContainer } from "@/components/Containers";

export default function AboutPage() {
  return (
    <>
      <Background imageUrl="/page_artworks/ERDTL_Raaina_Plains.png"/>

      <AboutContainer>
        <MainPageHeadline> About Eredhion Tales </MainPageHeadline>
        <span>
          Eredhion Tales is a long-standing passion project created by George Angelopoulos. 
          Its earliest roots stretch back to my high school days...born from my imagination and a few close friends. 
          Since 2020, I’ve been dedicated to building this world from the ground up, crafting its lore, history, and mythos as a foundation for my digital art journey.
        </span>
        <span>
          This world serves as a narrative canvas... a place where new and existing art pieces and projects can live, breathe, and connect through story. 
          Much of its inspiration is drawn from real places, personal experiences, and people reimagined in a whimsical, allegorical way within a medium-fantasy medieval setting. 
          Literary influences include genre-defining works like The Lord of the Rings, World of Warcraft, League of Legends and many others that shaped my creative outlook.
        </span>
        <span>
          At the heart of the project lies Eredhion, a curious and solitary Lorekeeper. 
          Tasked with archiving the stories of this rich and mysterious world... and the worlds that lie beyond the fractal rifts... Eredhion seems to know things no ordinary scholar should. 
          He is not particulary polite to reveal the grand schemes of the world all at once... fragments of his archives will appear over time...Where his journey leads is yet to unfold...
        </span>
        <span>
          This website is currently hosted via Vercel-app. 
          While the source repository is always available on GitHub, I strongly encourage you to explore the articles here on the site for the most immersive experience possible!
        </span>
      </AboutContainer>
    </>
  );
}

export const metadata = {
  title: "About - Eredhion Tales",
};