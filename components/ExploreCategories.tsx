"use client";
import React, { useState, useEffect } from "react";
import { UIMainFont } from "@/app/fonts";

export type FilterProps = {
    id: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
};

export default function ExploreCategories() {

    const [activeFilter, setActiveFilter] = useState<string>(("everything"));

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>(".card");

        cards.forEach(card => {

            // Card should be shown
            if (activeFilter === "everything" || card.classList.contains(`card-${activeFilter}`)) {
                
                // First remove hidden state
                card.classList.remove("hidden");

                // Restart animation cleanly:
                card.classList.remove("show");      
                void card.offsetWidth;              
                card.classList.add("show");      
            }

            // Card should be hidden
            else {
                card.classList.remove("show");
                card.classList.add("hidden");
            }
        });
    }, [activeFilter]);

    const filters = [
        { id: "everything", label: "Everything" },
        { id: "world", label: "Worlds" },
        { id: "nation", label: "Nations" },
        { id: "faction", label: "Factions" },
        { id: "tradition", label: "Traditions" },
        { id: "region", label: "Regions" },
        { id: "US", label: "Units & Structures" },
        { id: "race", label: "Races" },
        { id: "short", label: "Short Stories" },
        { id: "item", label: "Items" },
        { id: "creature", label: "Creatures" },
        { id: "character", label: "Characters" }
    ];

    return (
        <div className="
            flex flex-wrap
            justify-center items-center
            w-full
            mx-auto mb-[2%]
        ">
            {filters.map((filter, i) => (
                <ExploreButton
                    key={i}
                    id={filter.id}
                    label={filter.label}
                    isActive={activeFilter === filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                />
            ))}
        </div>
    );
}

export function ExploreButton({ id, label, isActive, onClick }: FilterProps) {
    return (
        <a
            onClick={onClick}
            className={`
                explore-button
                filter-${id}
                ${isActive ? "pressed" : ""}

                ${UIMainFont.className}
                relative align-top
                cursor-pointer border-none rounded-none
                bg-[rgba(255,255,255,0)]
                text-white
                text-text-base md:text-base lg:text-md xl:text-lg 2xl:text-1xl
                mr-0            
                drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]
                transition-colors duration-300 ease-linear
                py-[0.8rem] px-[1.5rem]
                hover:bg-white/20 
                active:bg-white/70
            `}
        >
            {label}
        </a>
    );
}