"use client";

import { UIMainFont } from "@/app/fonts";
import Link from "next/link";


type Props = {
    query: string;
    setQuery: (v: string) => void;
    onFocus: () => void;
}

type SearchResultItem = {
    title?: string;
    category?: string;
    slug?: string;
    onClick?: () => void;
}

type SearchBannerProps = {
    results: SearchResultItem[];
    typed: boolean;
    onSelect: () => void;
}

export function SearchBar({ query, setQuery, onFocus }: Props) {
           
    return (
        <input className={`
                ${UIMainFont.className}
                text-white
                text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-md
                overflow-x-auto overflow-y-hidden
                border-none rounded-[0.6em]
                bg-white/20
                w-[clamp(10em,30vw,25em)] max-w-full
                max-h-[3em]
                px-[clamp(1em,2vw,1.5em)]
                py-[clamp(0.4em,1vh,0.6em)]
                whitespace-nowrap text-ellipsis 
                box-border outline-none
                transition-colors duration-300 ease-in-out
                
                focus:shadow-none
                focus:placeholder-transparent`}
        type="text"
        placeholder="Search..."
        value = {query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={onFocus}
        />
    ); 
}

export function SearchBanner({ results, typed, onSelect }: SearchBannerProps) {
    return (
        <div className={`
                ${UIMainFont.className}
                text-white
                absolute left-[50%]
                top-banner-offset
                -translate-x-1/2
                ${results.length >= 0 && typed
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"}
                z-[1000]
                bg-color-var
                border-var
                border-color-var

                px-[2em] py-[1em]
                shadow-[0_0.25em_0.625em_rgba(0,0,0,0.3)]

                w-[clamp(20em,80vw,50em)]
                max-w-[95vw] max-h-[20em]
                overflow-y-auto

                scrollbar-thin
                scrollbar-thumb-white/40
                scrollbar-track-transparent
            `}
        >
            {results.map(article => (
                <SearchResult
                    key={article.slug}
                    title={article.title}
                    category={article.category}
                    slug={article.slug}

                    onClick={onSelect}
                />
            ))}

            {results.length == 0 && typed && (
                <p className="
                    text-white/60 italic text-center
                    text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl"
                    > 
                    No Results Found... 
                    </p>
            )}
        
        </div>
    );
}

export function SearchResult({ title, category, slug, onClick }: SearchResultItem ) {

    return (
        <Link href={`/article/${slug}`}
        onClick={onClick}
        className={`
            ${UIMainFont.className}
            flex items-center gap-4
            text-white text-left
            text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl
            cursor-pointer
            bg-transparent border-none
            min-w-[80%] max-w-full
            py-[0.5em] pr-[1.5em] pl-[0.75em]

            hover:bg-white/10
            last:mb-0`}
        >
        <ResultIcon category = {category}/>
        <span> {title} </span>
        </Link>
    );
}

export function ResultIcon({ category }: SearchResultItem) {
    return (
        <div className={`
            flex shrink-0 items-center 
            justify-center overflow-hidden
            w-[2.5em] h-[2.5em]
            rounded-full
            category-${category}`}
        >
        <img
        loading="lazy"
        loading="lazy"
        src={`/page_icons/${category}_icon.svg`}
        className="w-[65%] h-[65%] object-contain"
        />
        </div>
    );
}


