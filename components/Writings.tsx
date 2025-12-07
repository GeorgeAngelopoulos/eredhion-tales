"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";

type ArticleProps = {
    slug?:     string;
    children?: React.ReactNode;
}

// DONE ***************************************************************************
export function MainPageHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p className={`
            ${UIMainFont.className} 
            text-xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white text-center
            pt-[19vh] mb-[5%] `}
        >     
        {children}
        </p>
    );
}

// DONE ***************************************************************************
export function HomeHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p  className={`
            ${UIMainFont.className}
            text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl
            italic text-white text-center
            mt-[clamp(1em, 10%, 2.5em)]`}
        >
        {children}
        </p>
    );
}

export function APara ( { children }: { children: React.ReactNode }) {
    return (
        <p className={`
            `}
        >
        {children}
        </p>
    );
}

export function AQuote ( { children }: { children: React.ReactNode }) {
    return (
        <p className="italic"> {children} </p>
    );
}

export function ASect ( { children }: { children: React.ReactNode }) {
    return (
        <p className="
            text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            font-bold underline
            decoration-2 align-left
            w-full flex-start"
        >
        {children}
        </p>
    );
}

export function ATest ( { children }: { children: React.ReactNode }) {
    return (
        <p className="align-center"> {children} </p>
    );
}

export function ALink ({ slug, children }: ArticleProps) {
    return (
        <Link href={`/article/${slug}`}
        className="
            smooth-underline
            gold-glow
            transition-colors duration-200 ease-in-out delay-200"
        >
        {children}
        </Link>
    );
}

// .artsection {
//   font-size: clamp(1.5rem, 10vw, 3.5rem); /* scales between mobile and large screens */
//   font-weight: bold;
//   text-decoration: underline;
//   text-decoration-thickness: 0.08em;
//   text-align: left;
//   width: 100%;
//   align-self: flex-start;
//   margin-bottom: 1em;
// }

// .artparagraph{

//     font-size: inherit;
// }

// .testimony{
//     text-align: center;
// }

// .shortparagraph{

//     font-size: inherit;
//     font-style: italic;

// }

// .artlink{

//     font-size: inherit;
//     text-decoration: underline;
//     text-decoration-thickness: 3px;
//     color: inherit;
//     transition: color 0.2s ease 0.2s;
// }

// .artlink:hover{color: goldenrod;}






