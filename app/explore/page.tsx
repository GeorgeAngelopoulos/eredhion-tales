import Image from "next/image";
import data from "@/public/data/data.json";
import {Background} from "@/components/Misc";
import { MainPageHeadline } from "@/components/Writings";
import ExploreCard from "@/components/ExploreCard";
import { CardContainer} from "@/components/Containers";
import ExploreCategories from "@/components/ExploreCategories";

export default function ExplorePage() {

  return (
    <>
      <Background imageUrl="/page_artworks/ERDTL_Raaina_Plains.png"/>
      <MainPageHeadline> Explore the Archives </MainPageHeadline>
      <ExploreCategories/>
      <CardContainer>
        {data.articles.map((article, index) => (
          <ExploreCard
            key={index}
            title={article.title}
            subtitle={article.subtitle}
            date={article.date}
            category={article.category}
            label={article.label}
            backgroundPath={article.backgroundPath}
            slug={article.slug}
          />
        ))}
      </CardContainer>
    </>
  );
}

export const metadata = {
  title: "Explore the Archives - Eredhion Tales",
};