import NewsCard from "@/components/news-card";

export default function Page(){
    return (
        <div className="p-4">
            <div className="py-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Home
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:rid-cols-2 md:grid-cols-4 gap-4">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
}