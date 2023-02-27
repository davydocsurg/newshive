import { NewsContext } from "@/context";
import getNews from "@/pages/api/news";
import { Button, SelectChangeEvent, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

const Search = (): React.ReactElement => {
    const {
        query,
        loading,
        publishedWithin,
        publisherCountry,
        newsData,
        pageSize,
        setQuery,
        setNewsData,
        setLoading,
    } = useContext(NewsContext);

    const searchNews = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        setLoading(true);
        const res = await getNews(
            query,
            publisherCountry,
            publishedWithin,
            pageSize
        );
        setLoading(false);
        if (res.status == "ok") {
            setNewsData(res.articles);
            console.log(newsData);
        }
    };

    const handleQueryChange = (e: any) => {
        setQuery(e.target.value);
    };

    return (
        <>
            {/* <form action="" method="get" onSubmit={searchNews}> */}
            <TextField
                id="outlined-basic"
                label="Search News About:"
                variant="outlined"
                // defaultValue={"query"}
                onChange={handleQueryChange}
                value={query}
                fullWidth
            />
            <Button
                sx={{ mt: 4, width: "20%", alignSelf: "center" }}
                variant="outlined"
                size="small"
                onClick={searchNews}
                disabled={loading}
            >
                {loading ? "Searching..." : "Search"}
            </Button>

            {/* </form> */}
        </>
    );
};

export default Search;
