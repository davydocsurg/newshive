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
    newsData: [];
    setNewsData: (newsData: []) => void;
};

type InitialNewsState = {
    // newsSearch: SearchTerms;
    language: string;
    publisherCountry: string;
    publishedWithin: string;
    searchIn: string;
    query: string;
    newsData: [];
    searchNews: () => void;
    // setNewsSearch: (newsSearch: any) => void;
    setLanguage: (language: string) => void;
    setPublisherCountry: (publisherCountry: string) => void;
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
    newsData: [],
    searchNews: () => {},
    setLanguage: () => {},
    setPublishedWithin: () => {},
    setPublisherCountry: () => {},
    setQuery: () => {},
    setSearchIn: () => {},
});

export const NewsProvider = ({ children }: JSX.Element | any) => {
    const [language, setLanguage] = useState("");
    const [publisherCountry, setPublisherCountry] = useState("");
    const [publishedWithin, setPublishedWithin] = useState("");
    const [query, setQuery] = useState("");
    const [searchIn, setSearchIn] = useState("");
    const [newsData, setNewsData] = useState({} as NewsDataState);

    const searchNews = async () => {
        const res = await api.get(API_BASE_URL + "news");
        console.log(res);
    };

    return (
        <NewsContext.Provider
            value={{
                newsData: [],
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
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => useContext(NewsContext);
