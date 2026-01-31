"use client";

interface URLProps {imageUrl: string;}

export function Background({ imageUrl }: URLProps) {
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
        <img
          loading="lazy"
          src="/page_icons/et_logo.svg"
          alt="HomeLogo"
          className="
            w-[clamp(250px,40%,800px)] 
            h-auto 
            object-contain block self-center 
            drop-shadow-[0_0_35px_rgba(0,0,0,0.9)]"
        />
    );
}


export function HomeSection({ imageUrl }: URLProps) {
    return (
        <img
          loading="lazy"
          src={imageUrl}
          className="
            object-contain
            align-center block
            w-[95vw] max-w-[clamp(300px,100vw,1200px)]
            mt-[10%]
            drop-shadow-[0_0_35px_rgba(0,0,0,0.9)]"
        />
    );
}

export function Artwork ({ imageUrl }: URLProps) {
    return (
        <img
          loading="lazy"
          src={imageUrl}
          className="
            object-contain block
            w-full h-auto max-h-[90vh]
            rounded-lg
            drop-shadow-[0_0_2.5em_rgba(0,0,0,0.2)]"
        />
    );
}
