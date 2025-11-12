"use client";
import React, { useEffect, useState } from "react";
import { UIMainFont } from "@/app/fonts";
import { TalesFont } from "@/app/fonts";

export function AboutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={`
                ${TalesFont.className}
                flex justify-center flex-wrap items-start
                text-[clamp(2em,2vw,4.375em)] font-bold text-white
                w-[65%] min-h-[90vh] 
                gap-[1em]
                mx-auto
                mb-[5%]
                
                max-[1280px]:w-[75%] max-[1280px]:min-h-auto
                max-[480px]:w-[90%] max-[480px]:min-h-auto`}     
        >
        {children}
        </div>
    );
}

