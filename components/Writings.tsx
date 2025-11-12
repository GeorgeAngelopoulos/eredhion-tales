"use client";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";

export function MainPageHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p className={`
            ${UIMainFont.className} 
            text-[clamp(2em,6vw,4.375em)] text-white text-center
            pt-[19vh] mb-[5%] `}
        >     
        {children}
        </p>
    );
}

export function HomeHeadline({ children }: { children: React.ReactNode }) {
    return (
        <p  className={`
            ${UIMainFont.className}
            text-[clamp(1.375em, 4vw, 2.2em)] italic text-white text-center
            mt-[clamp(1em, 3%, 2.5em)]`}
        >
        {children}
        </p>
    );
}








