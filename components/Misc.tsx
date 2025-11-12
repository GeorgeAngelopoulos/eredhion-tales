import React from "react";

interface URLProps {imageUrl: string;}

export function Background({imageUrl}: URLProps) {
    return (
        <>
        <div className="
            fixed inset-0 -z-20 
            bg-cover bg-center bg-no-repeat bg-fixed" 
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="
            fixed inset-0 -z-10 pointer-events-none 
            bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_10%,rgba(0,0,0,0.9)_100%)]"
        />
        </>
    );
}

export function HomeLogo() {
    return (
        <>
        <img
          src="/page_icons/et_logo.svg"
          alt="HomeLogo"
          className="
            w-[clamp(200px,45%,600px)] 
            h-auto 
            pt-[19vh] 
            object-contain block self-center 
            drop-shadow-[0_0_35px_rgba(0,0,0,0.9)]"
        />
        </>
    );
}


