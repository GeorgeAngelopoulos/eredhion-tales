"use client";
import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";
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
            border-2 border-black bg-[rgba(255,255,255,0.2)] 
            w-[300px] 
            h-[clamp(325px,80vw,400px)] 
            m-[15px] p-[5px] 
            shadow-[0_4px_8px_rgba(0,0,0,0.1)]                
            filter drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]
            hover:scale-[1.04]
            transition-transform
            duration-200
            
            overflow-hidden transition-opacity duration-[900ms] ease-in-out opacity-100
            cursor-pointer ${rarity}`}
        style={{
            backgroundImage: `url(${backgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",}}
        >
           
        <CardCategory category={category} label={label}/>
        <CardDate date = {date}/>
        <CardTitle title = {title}/>
        <CardSubtitle subtitle = {subtitle}/>
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
    return (<span className={`${UIMainFont.className} text-[18px] text-white mr-[6px]`}> {label}</span>);
}

export function CardCategory({ category, label }: ExploreProps) {
    return (
        <div className="flex items-center bg-black/60 border border-black rounded-none w-fit mt-[5px] ml-[5px]">
        <CategoryIcon category = {category}/>
        <CategoryLabel label = {label}/>
        </div>
    );
}

export function CardDate({ date }: ExploreProps) {
    return (<span className={`${UIMainFont.className} text-[14px] text-white/70 text-left mt-[4px] ml-[8px]`}> {date}</span>);
}

export function CardTitle({ title }: ExploreProps) {
    return (<span className={`${UIMainFont.className} text-[24px] text-white w-[90%] text-left mt-auto ml-[5px] `}> {title}</span>);
}

export function CardSubtitle({ subtitle }: ExploreProps) {
    return (<span className={`${UIMainFont.className} text-[18px] text-white/70 text-left ml-[5px] `}> {subtitle}</span>);
}

