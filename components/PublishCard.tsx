"use client";
import { UIMainFont } from "@/app/fonts";
import Link from "next/link";

type PublishProps = {
    title?:           string;
    subtitle?:        string;
    category?:        string;
    backgroundPath?:  string;
    slug?:     string;
}

export function PublishCard({ title, subtitle, category, backgroundPath, slug }: PublishProps) {

    return (
        <div className={`
              flex flex-col align-center
              w-[100%] h-auto
              gap-[1em] text-white
              p-[clamp(10px, 3vw, 20px)]`}
        >
        <Publish title={title} subtitle={subtitle} category={category} backgroundPath={backgroundPath} slug={slug}/>
        </div>
    );
}

export function Publish({ title, subtitle, category, backgroundPath, slug }: PublishProps) {
    return (
        <Link href={`/article/${slug}`}
        className={`
              relative
              w-[95vw] max-w-[clamp(300px,100vw,1200px)]
              min-h-[375px] aspect-[5/3]
              bg-cover bg-center
              border-2 border-black
              mx-auto
              rounded-none cursor-pointer
              shadow-[0_4px_12px_rgba(0,0,0,0.4)]
              overflow-hidden
              transition-transform transition-colors
              duration-400 ease-linear
              hover:border-[goldenrod]
              hover:scale-[1.04]
              group ...`}
        style={{
            backgroundImage: `url(${backgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",}}
        >
        <PublishBanner title={title} subtitle={subtitle} category = {category}/>
        </Link>
    );
}

// DONE
export function PublishBanner({ title, subtitle, category }: PublishProps) {
    return (
        <div className={`
              ${UIMainFont.className} text-white
              absolute bottom-0 left-0
              flex flex-row items-center
              w-full 
              bg-color-var
              p-[clamp(10px,2vw,20px)] 
              px-[clamp(12px,4vw,24px)]
              border-t-var 
              border-color-var
              gap-[clamp(10px, 3vw, 20px)]
              z-[2]

              translate-y-[100%]
              transition-transform
              duration-400
              ease-linear
              group-hover:translate-y-0
              `}>
        <PublishCategory category={category}/>
        <PublishInfo title={title} subtitle={subtitle}/>
        <PublishCategory category={category}/>
        </div>
    );
}

// DONE
export function PublishCategory({ category }: PublishProps) {
    return (
        <div className={`
              w-[clamp(35px,3vw,64px)]
              aspect-square
              category-${category}
              rounded-full
              flex justify-center
              items-center shrink-0`}
        >
        <img
          loading="lazy"
          src={`/page_icons/${category}_icon.svg`}
          className="
            w-[65%] h-[65%]
            object-contain"
        />
        </div>
    );
}


export function PublishInfo( { title, subtitle }: PublishProps) {
    return(
        <div className="
              flex flex-col justify-center
              items-center
              flex-start flex-1"
        >
        <PublishTitle title = {title}/>
        <PublishSubtitle subtitle = {subtitle}/>
        </div>
    );
}

export function PublishTitle({ title }: PublishProps) {
    return (<p className=" text-md md:text-lg lg:text-2xl xl:text-3xl font-bold"> {title} </p>);
}

export function PublishSubtitle({ subtitle }: PublishProps) {
    return (<p className=" text-sm md:text-base lg:text-lg xl:text-xl opacity-70"> {subtitle} </p>);
}



