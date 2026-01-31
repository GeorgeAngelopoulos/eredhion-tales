"use client";
import { UIMainFont } from "@/app/fonts";
import data from "@/public/data/data.json"

type VersionProps = {
    title?:        string;
    label?:        string;

}

export function VersionControl() {

    const PatchMessages: Record<string, string> = {
            NEW: "- Added new Article!",
            LORE: "- Added new Lore...",
            VISUAL: "- Added new Visuals...",
            REL: "- Revisited existing Lore...",
            REV: "- Revisited existing Visuals...",
            LINK: "- Added additional Links...",
    }

    return(
        <div className={`
            ${UIMainFont.className}
            flex flex-col flex-start
            bg-black/30
            rounded-[10px]
            w-[95%] max-w-[1200px] h-auto
            text-white
            gap-wr
            p-[20px]
            mt-c`}
        >
        <VersionTitle/>
        {data.versionLog.map((patch, i) => (

            <div key={i}>
            <EntryTitle label = {ArticleToLabel(patch.article, data)} title = {patch.article}/>          
            {patch.changes.map((change, j) => (
                <EntryLine key={j}> {PatchMessages[change]} </EntryLine>
            ))}
            </div>
        ))}

        </div>
    );
}

export function VersionTitle() {
    return (
        <p className="
            text-xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl
            text-left underline
            decoration-3"
        >
        What's new with "{data.versionName} {data.versionNumber}":
        </p>
    );
}

export function EntryTitle({ label, title }: VersionProps) {
    return (
        <p className=" text-base md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold"> {label} article: {title} </p>
    );
}

export function EntryLine({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl"> {children} </p>
    );
}

export function ArticleToLabel( title: string, data: { articles: { title: string; label: string }[] }): string | undefined{
    const found = data.articles.find(a => a.title === title);
    return found?.label;
}

export function ArticleToCategory( title: string, data: { articles: { title: string; category: string }[] }): string | undefined{
    const found = data.articles.find(a => a.title === title);
    return found?.category;
}

