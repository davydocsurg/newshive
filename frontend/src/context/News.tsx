import { createContext } from "react";

type SearchTerms = {
    language: string;
    publisherCountry: string;
    publisherWithin: string;
    searchIn: string;
    query: string;
};

type InitialNewsState = {
    search: SearchTerms;
    setNewsSearch: (search: SearchTerms) => void;
    newsData: [];
    setNewsData: (newsData: []) => void;
};

export const NewsContext = createContext<InitialNewsState>({
    search: {
        language: "",
        publisherCountry: "",
        publisherWithin: "",
        query: "",
        searchIn: "",
    },
    setNewsSearch: () => {},
    newsData: [],
    setNewsData: () => {},
});
