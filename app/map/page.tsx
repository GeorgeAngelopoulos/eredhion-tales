import Image from "next/image";
import {Background} from "@/components/Misc";
import { MainPageHeadline} from "@/components/Writings";

export default function MapPage() {
  return (
    <>
      <Background imageUrl="/page_artworks/ERDTL_Raaina_Plains.png"/>
     
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>
      <MainPageHeadline> Coming Soon... </MainPageHeadline>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
      </div>
    </>
  );
}