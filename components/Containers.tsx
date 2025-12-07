"use client";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";

export function MainContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={`
                flex flex-col
                items-center self-center
                w-[clamp(90%, 80%, 80%)]
                gap-[5vh]
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
                text-[clamp(2em,2vw,4.375em)] font-bold text-white
                w-[65%] min-h-[90vh] 
                gap-[1em]
                mx-auto mb-[5%]
                
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
                mx-auto
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
                text-1xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                w-[60%] gap-[1em] top-[40vh]
                flex flex-wrap justify-center
                align-top relative z-[1]
                mx-auto pb-[100px]`}
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
