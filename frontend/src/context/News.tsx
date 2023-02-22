import api from "@/api";
import { API_BASE_URL } from "@/config";
import { type } from "os";
import { createContext, useContext, useState } from "react";

type SearchTerms = {
    language: string;
    publisherCountry: string;
    publisherWithin: string;
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
    newsSearch: SearchTerms;
    newsData: [];
    searchNews: () => void;
};

export const NewsContext = createContext<InitialNewsState>({
    newsSearch: {
        language: "",
        publisherCountry: "",
        publisherWithin: "",
        query: "",
        searchIn: "",
    },
    newsData: [],
    searchNews: () => {},
});

export const NewsProvider = ({ children }: JSX.Element | any) => {
    const [newsSearch, setNewsSearch] = useState({} as NewsSearchState);
    const [newsData, setNewsData] = useState({} as NewsDataState);

    const searchNews = async () => {
        const res = await api.get(API_BASE_URL + "news");
        console.log(res);
    };

    return (
        <NewsContext.Provider
            value={{
                newsSearch: newsSearch.newsSearch,
                newsData: [],
                searchNews,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => useContext(NewsContext);
