import Image from "next/image";
import { Background, HomeLogo, HomeSection } from "@/components/Misc";
import { HomeHeadline } from "@/components/Writings";
import { MainContainer } from "@/components/Containers";
import { VersionControl } from "@/components/VersionControl";
import { PublishCard } from "@/components/PublishCard";
import data from "@/public/data/data.json"

export default function HomePage() {

  const { articles } = data;
  const newestArticle =  [...articles].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  )[0];

  return (
    <>
      <Background imageUrl="/page_artworks/ERDTL_Raaina_Plains.png"/>
      
      <MainContainer>

        <HomeLogo/>
        <HomeHeadline> A New World awaits...</HomeHeadline>
        <HomeSection imageUrl="/page_icons/et_new.svg"/>
        <PublishCard
          title={newestArticle.title}
          subtitle={newestArticle.subtitle}
          category={newestArticle.category}
          backgroundPath={newestArticle.backgroundPath}
          slug={newestArticle.slug}
        />
        <VersionControl/>

      </MainContainer>
    </>
  );
}

function parseDate(d: string) {
  const [day, month, year] = d.split("/").map(Number);
  return new Date(year, month - 1, day);
}

