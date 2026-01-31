import data from "@/public/data/data.json";
import ArticleBanner from "@/components/ArticleBanner";
import ScrollHandler from "@/components/ScrollHandler";
import { Background } from "@/components/Misc";

export async function generateStaticParams() {
    return data.articles.map(article => ({ slug: article.slug}));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const article = data.articles.find(a => a.slug === slug);

    if (!article) return <h1> Article Not Found... </h1>   

    const { title, subtitle, date, category, backgroundPath, lastUpdated, component } = article;
    const ArticleContent = (await import(`@/articles/${category}/${component}`)).default;

    return (
        <>
        <ScrollHandler/>

        <Background imageUrl={backgroundPath}/>
        <div id="ABN" className="articleBanner is-shown"> 
            <ArticleBanner title={title} subtitle={subtitle} backgroundPath={backgroundPath} lastUpdated={lastUpdated}/>
        </div>

        <div id="AC" className="articleContent is-hidden"> 
            <ArticleContent/> 
        </div>
        </>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const article = data.articles.find(a => a.slug === slug);

    if (!article) { return {title: "Article Not Found – Eredhion Tales",};}

    return {title: `${article.title} – Eredhion Tales`,};
}