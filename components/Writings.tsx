"use client";
import React from "react";
import Link from "next/link";
import { UIMainFont } from "@/app/fonts";

type ArticleProps = {
    slug?:     string;
    children?: React.ReactNode;
}

export function MainPageHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p className={`
            ${UIMainFont.className} 
            text-xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white text-center
            mb-[5%]`}
        >     
        {children}
        </p>
    );
}

export function HomeHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p  className={`
            ${UIMainFont.className}
            text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl
            italic text-white text-center
            mt-c`}
        >
        {children}
        </p>
    );
}

export function AQuote ( { children }: { children: React.ReactNode }) {
    return ( 
        <p className="italic w-full block"> "{children}" </p> 
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
        <p className="align-center italic"> {children} </p>
    );
}

export function ALink ({ slug, children }: ArticleProps) {
    return ( 
        <Link href={`/article/${slug}`} className="gold-glow"> {children} </Link> 
    );
}






