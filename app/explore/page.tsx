import Image from "next/image";
import {Background} from "@/components/Misc";
import { MainPageHeadline } from "@/components/Writings";
import ExploreCard from "@/components/ExploreCard";

export default function ExplorePage() {

  // Test data for your ExploreCard
  const testArticle = {
    title: "Kardozhan",
    subtitle: "Theocratic Human Kingdom",
    date: "02/05/2025",
    category: "faction",
    label: "Faction",
    backgroundPath: "/page_artworks/ERDTL_Raaina_Plains.png",
    articlePath: "https://www.youtube.com/channel/UC6D149T7AaC8EcsCr8dGk4A"
  };

  return (
    <>
      <Background imageUrl="/page_artworks/ERDTL_Raaina_Plains.png"/>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>

      <MainPageHeadline> Explore the Archives </MainPageHeadline>
      <ExploreCard
      title={testArticle.title}
      subtitle={testArticle.subtitle}
      date={testArticle.date}
      category={testArticle.category}
      label={testArticle.label}
      backgroundPath={testArticle.backgroundPath}
      articlePath={testArticle.articlePath}
      />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
      </div>
    </>
  );
}