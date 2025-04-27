import NewsCard from "@/components/news-card";

export default function Page(){
    return (
        <div>
            <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Home
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
}