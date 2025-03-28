import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNews = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(
        ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2264da4f1984460aa1247d02b019c3e4`
    );
    return { articles: data.articles, nextPage: pageParam + 1 };
};
const Home = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
        getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    });


    const observer = useRef(null);

    const lastArticleRef = useCallback(
        (node) => {
            if (isFetchingNextPage || !hasNextPage) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        fetchNextPage();
                    }
                },
                { threshold: 0.5 } // Trigger when 50% of element is visible
            );

            if (node) observer.current.observe(node);
        },
        [isFetchingNextPage, hasNextPage, fetchNextPage]
    );


    if (error) return <h1 className="text-center text-2xl font-semibold text-red-500 mt-10">Error fetching news</h1>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Latest News</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.pages.map((page, pageIndex) =>
                    page.articles.map((article, index) => {
                        const isLastArticle = pageIndex === data.pages.length - 1 && index === page.articles.length - 1;
                        return (
                            <div
                                key={index}
                                ref={isLastArticle ? lastArticleRef : null}
                                className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
                            >
                                <img
                                    src={article?.urlToImage && article.urlToImage.trim() !== ""
                                        ? article.urlToImage
                                        : "https://images.unsplash.com/photo-1561491431-71b89da6056a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    alt={article?.title || "Default News"}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <h2 className="text-xl font-semibold mt-3">{article.title}</h2>
                                <p className="text-gray-700 mt-2">{article.description}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-blue-500 hover:underline"
                                >
                                    Read more
                                </a>
                            </div>
                        );
                    })
                )}
            </div>

            {isFetchingNextPage && <p className="text-center text-xl font-semibold my-4">Loading more...</p>}
        </div>
    );
};

export default Home;
