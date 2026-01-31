"use client";
import React from "react";
import { TalesFont } from "@/app/fonts";

export function MainContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={`
                flex flex-col
                items-center self-center
                w-[clamp(90%, 80%, 80%)]
                gap-c
                pb-[clamp(2em,5vw,6.25em)]
                relative z-[1]`}
        >
        {children}
        </div>
    );
}

export function AboutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={`
                ${TalesFont.className}
                flex justify-center flex-wrap items-start
                font-bold text-white
                text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl

                w-[65%] min-h-[90vh] 
                gap-wr
                mx-auto
                
                max-[1280px]:w-[75%] max-[1280px]:min-h-auto
                max-[480px]:w-[90%] max-[480px]:min-h-auto`}     
        >
        {children}
        </div>
    );
}

export function CardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={`
                flex flex-wrap 
                items-start justify-center
                w-[100%] h-[90%] min-h-[30vw]`}
        >
        {children}
        </div>
    );
}

export function ArticleContainer ( { children }: { children: React.ReactNode }) {
    return (
        <div className={`
                ${TalesFont.className}
                text-white font-bold
                text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                w-[65%]
                gap-wr 
                flex flex-wrap justify-center items-start
                z-[1]
                mx-auto
                
                max-[1280px]:w-[70%] max-[1280px]:min-h-auto
                max-[480px]:w-[85%] max-[480px]:min-h-auto`}
        >
        {children}
        </div>
    );
}


// .article-container {

//     font-size: clamp(1.75em, 2.5vw, 2.5em);                     --------
//     padding-bottom: 100px;
//     top: -40vh;
//     width: 60%;
//     gap: 1em;

//     transform: translateY(30px);
//     transition: opacity 1.2s ease, transform 1.2s ease;
//     color: rgb(255, 255, 255);                                --------
//     font-family: 'Tangerine', serif;                            --------
//     font-weight: bold;                                          --------
//     display: flex;                                              --------
//     flex-wrap: wrap;                                            --------
//     justify-content: center;                                    --------
//     align-items: top;                                           --------
//     margin: 0 auto;                                             --------
//     position: relative;                                         --------
//     z-index: 1;                                                 --------
// }
  
// .article-container.visible {
//     opacity: 1;
//     transform: translateY(0);
// }
