"use client";

import { useEffect } from "react";
import data from "@/public/data/data.json";

type SearchHandlerProps = {
    query: string;
    setResults: (results: any[]) => void;
}

export default function SearchHandler({ query, setResults }: SearchHandlerProps) {
    useEffect(() => {
        const q = query.trim().toLowerCase();

        if (q.length < 3) {
            setResults([]);
            return;
        }

        const titleMatches = data.articles.filter(article =>
            article.title.toLowerCase().includes(q)
        );

        const subtitleMatches = data.articles.filter(article =>
            !titleMatches.includes(article) && 
            article.subtitle?.toLowerCase().includes(q)
        );

        setResults([...titleMatches, ...subtitleMatches]);

    }, [query, setResults]);
    return null;
}