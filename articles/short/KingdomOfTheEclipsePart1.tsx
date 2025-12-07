"use client";
import { ArticleContainer } from "@/components/Containers";
import { AQuote, APara, ATest, ASect, ALink } from "@/components/Writings";
import { Artwork } from "@/components/Misc";

export default function KingdomOfTheEclipsePart1() {
    return (
        <ArticleContainer>
            <ASect> Governance & Hierarchy</ASect>
            <p>
                Dawn'ar is a Theocratic Kingdom, where the Highlord rules above all, bestowed directly from the Sun God himself. 
                Some might even suggest that it's the Sun God's own reincarnation in the physical realm. 
                He is revered above all else and has absolute power over everything the light of <ALink slug="kingdom-of-the-eclipse-part-1"> Dawn'ar </ALink> touches. 
                Others might question such an abusive political position, even call him a "tyrant", but for the Dawn'ari, he is the embodiment of their faith in the world, a radiant person who inspires confidence and hope for the future. 
                Many advisors stand by the Highlord's side but none of them truly hold any important political power.
            </p>

            
        </ArticleContainer>
    );
}