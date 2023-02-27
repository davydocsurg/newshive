import api from "@/api";
import { API_BASE_URL } from "@/config";
import { type } from "os";
import { createContext, useContext, useState } from "react";

type SearchTerms = {
    language: string;
    publisherCountry: string;
    publishedWithin: string;
    searchIn: string;
    query: string;
};

type NewsSearchState = {
    newsSearch: SearchTerms;
    setNewsSearch: (search: SearchTerms) => void;
};

type NewsDataState = {
    author: string;
    authors: string;
    content: string;
    clean_url: string;
    country: string;
    excerpt: string;
    is_opinion: boolean;
    language: string;
    link: string;
    media: string;
    published_date: string;
    published_date_precision: string;
    rank: number;
    rights: string;
    summary: string;
    title: string;
    topic: string;
    twitter_account: string;
    _id: string;
    _score: number;
};

type InitialNewsState = {
    // newsSearch: SearchTerms;
    language: string;
    publisherCountry: string;
    publishedWithin: string;
    searchIn: string;
    query: string;
    newsData: NewsDataState[];
    searchNews: () => void;
    setNewsData: (newsData: NewsDataState[]) => void;
    setLanguage: (language: string) => void;
    setPublisherCountry: (publisherCountry: string | null) => void;
    setPublishedWithin: (publishedWithin: string) => void;
    setQuery: (query: string) => void;
    setSearchIn: (searchIn: string) => void;
};

export const NewsContext = createContext<InitialNewsState>({
    language: "",
    publisherCountry: "",
    publishedWithin: "",
    query: "",
    searchIn: "",
    newsData: [
        {
            author: "",
            authors: "",
            content: "",
            clean_url: "",
            country: "",
            excerpt: "",
            is_opinion: false,
            language: "",
            link: "",
            media: "",
            published_date: "",
            published_date_precision: "",
            rank: 0,
            rights: "",
            summary: "",
            title: "",
            topic: "",
            twitter_account: "",
            _id: "",
            _score: 0,
        },
    ],
    setNewsData: () => {},
    searchNews: () => {},
    setLanguage: () => {},
    setPublishedWithin: () => {},
    setPublisherCountry: () => {},
    setQuery: () => {},
    setSearchIn: () => {},
});

export const NewsProvider = ({ children }: JSX.Element | any) => {
    const [language, setLanguage] = useState("");
    const [publisherCountry, setPublisherCountry] = useState<string | any>(
        null
    );
    const [publishedWithin, setPublishedWithin] = useState("");
    const [query, setQuery] = useState("");
    const [searchIn, setSearchIn] = useState("");
    const [newsData, setNewsData] = useState([] as NewsDataState[]);

    const searchNews = async () => {
        const res = await api.get(API_BASE_URL + "news");
        console.log(res);
    };

    return (
        <NewsContext.Provider
            value={{
                newsData,
                searchNews,
                language,
                publishedWithin,
                publisherCountry,
                query,
                searchIn,
                setLanguage,
                setPublishedWithin,
                setPublisherCountry,
                setQuery,
                setSearchIn,
                setNewsData,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

NewsProvider.getInitialProps = async () => {
    return {
        intialState: {
            language: "",
            publisherCountry: "",
            publishedWithin: "",
            query: "",
            searchIn: "",
            newsData: [],
        },
    };
};

export const useNewsContext = () => useContext(NewsContext);
