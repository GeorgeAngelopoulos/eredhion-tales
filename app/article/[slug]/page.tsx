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

    const { title, subtitle, date, category, backgroundPath, component } = article;
    
    const ArticleContent = (await import(`@/articles/${category}/${component}`)).default;

    return (
        <>
        {/* <ScrollHandler/> */}

        <Background imageUrl={backgroundPath}/>
        <div id="ABN"> 
            {/* <ArticleBanner title={title} subtitle={subtitle} date={date} backgroundPath={backgroundPath}/>  */}
        </div>
        <div id="AC"> 
            <ArticleContent/> 
        </div>
        </>
    );

}