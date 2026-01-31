"use client";

import { UIMainFont } from "@/app/fonts";
import Link from "next/link";

type ExploreProps = {
    title?:           string;
    subtitle?:        string;
    date?:            string;
    category?:        string;
    label?:           string;
    backgroundPath?:  string;
    slug?:            string;
}

export default function ExploreCard({ title, subtitle, date, category, label, backgroundPath, slug }: ExploreProps) {

    let rarity = "";
    if (label?.includes("Common")) rarity = "common";
    else if (label?.includes("Rare")) rarity = "rare";
    else if (label?.includes("Unique")) rarity = "unique";

    return (
        <Link href={`/article/${slug}`}
        className={`
            card card-${category}
            flex flex-col justify-between items-start relative     
            border-2 border-black
            w-[300px] aspect-[3/4]
            m-[10px] p-[5px] 
            shadow-[0_4px_8px_rgba(0,0,0,0.1)]                
            filter drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]
            
            overflow-hidden transition-opacity duration-[900ms] ease-in-out opacity-100
            cursor-pointer ${rarity}`}
        style={{
            backgroundImage: `url(${backgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",}}
        >

        <div
        className="
            et-shadow
            absolute inset-0
            bg-no-repeat bg-cover bg-center
            opacity-0
            pointer-events-none
            transition-opacity duration-500
            mix-blend-mode: multiply;
        "
        style={{
            backgroundImage: "url(/page_icons/et_shadow.webp)",
        }}
        />  
        <div className=" z-[2]">
        <CardCategory category={category} label={label}/>
        <CardDate date = {date}/>
        </div>
        <div className="relative z-[2] flex flex-col items-start gap-1">
        <CardTitle title = {title}/>
        <CardSubtitle subtitle = {subtitle}/>
        </div>
        </Link>
    );
}

export function CategoryIcon({ category }: ExploreProps) {
    return (
        <div className={`
            flex items-center justify-center
            w-[34px] h-[34px] 
            mr-[8px] category-${category}`}
        >
        <img
        src={`/page_icons/${category}_icon.svg`}
        className="w-[28px] h-[28px] object-contain"
        />
        </div>
    );
}

export function CategoryLabel({ label }: ExploreProps) {
    return (
        <span className={`${UIMainFont.className} text-lg text-white mr-[6px]`}> {label} </span>
    );
}

export function CardCategory({ category, label }: ExploreProps) {
    return (
        <div className="flex items-center bg-black/60 border border-black rounded-none w-fit mt-card ml-card">
        <CategoryIcon category = {category}/>
        <CategoryLabel label = {label}/>
        </div>
    );
}

export function CardDate({ date }: ExploreProps) {
    return (
        <span className={`${UIMainFont.className} text-sm text-white/70 text-left mt-card ml-card`}> {date} </span>
    );
}

export function CardTitle({ title }: ExploreProps) {
    return (
        <span className={`${UIMainFont.className} text-2xl text-white w-full leading-tight text-left mx-auto ml-card `}> {title} </span>
    );
}

export function CardSubtitle({ subtitle }: ExploreProps) {
    return (
        <span className={`${UIMainFont.className} text-lg text-white/70 text-left w-full leading-snug ml-card `}> {subtitle} </span>
    );
}

