"use client";

import { UIMainFont } from "@/app/fonts";

type ArticleProps = {
    title?:           string;
    subtitle?:        string;
    date?:            string;
    backgroundPath?:  string;
}

export default function ArticleBanner({ title, subtitle, date, backgroundPath }: ArticleProps) {

    return (
        <div className={`
                ${UIMainFont.className}
                text-white
                flex flex-col justify-center
                items-center text-center
                w-full h-screen
                relative z-[200]
                pointer-events-auto
                opacity-100

                bg-cover
                bg-center
                bg-no-repeat
                
                article-banner
                transition-opacity transition-transform
                duration-1000 ease-in-out`}
            style={{backgroundImage: `url(${backgroundPath})`,}}
        >
        <ArticleTitle title={title}/>
        <ArticleSubtitle subtitle={subtitle}/>
        <ArticleDate date={date}/>
        </div>
    );
}

export function ArticleTitle({ title }: ArticleProps) {
    return (
        <div className="text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl m-0"> {title}</div>
    );
}

export function ArticleSubtitle({ subtitle }: ArticleProps) {
    return (
        <div className="text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl opacity-80 mt-2"> {subtitle}</div>
    );
}

export function ArticleDate({ date }: ArticleProps) {
    return (
        <div className="text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl opacity-80 mt-2"> {date}</div>
    );
}

// .article-banner {
//     width: 100%;
//     height: 100vh;

//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     transition: opacity 1.0s ease, transform 1.0s ease;
//     opacity: 1;
//     pointer-events: auto;
//     position: relative;
//     z-index: 200; 

// }

/* Shadow gradient overlay */
