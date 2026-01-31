"use client";

import { UIMainFont } from "@/app/fonts";

type ArticleProps = {
    title?:           string;
    subtitle?:        string;
    backgroundPath?:  string;
    lastUpdated?:     string;
}

export default function ArticleBanner({ title, subtitle, backgroundPath, lastUpdated }: ArticleProps) {

    return (
        <div
        className={`
            top-article-offset left-0
            ${UIMainFont.className}
            text-white
            fixed w-full h-screen 
            flex flex-col justify-center items-center text-center
            relative z-[200]
            pointer-events-auto
            bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${backgroundPath})` }}
        >
        <ArticleTitle title={title}/>
        <ArticleSubtitle subtitle={subtitle}/>
        <ArticleLastUpdated lastUpdated={lastUpdated}/>
        </div>
    );
}

export function ArticleTitle({ title }: ArticleProps) {
    return (
        <div className="text-1xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl m-0"> {title}</div>
    );
}

export function ArticleSubtitle({ subtitle }: ArticleProps) {
    return (
        <div className="text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl opacity-80 mt-4"> {subtitle}</div>
    );
}

export function ArticleLastUpdated({ lastUpdated }: ArticleProps) {
    return (
        <div className="
                absolute bottom-6 right-6 text-right 
                text-sm md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl 
                opacity-60 mt-2"
        > 
        Last Updated: {lastUpdated}
        </div>
    );
}
