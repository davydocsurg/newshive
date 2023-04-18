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
        if (query === "") {
            return;
        }
        setLoading(true);
        try {
            const res = await getNews(
                query,
                publisherCountry,
                publishedWithin,
                pageSize
            );

            setNewsData(res.articles);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            return error;
        }
        // if (res.status == "ok") {
        //     console.log(newsData);
        // }
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
                required={true}
                fullWidth
            />
            <Button
                sx={{ mt: 4, width: "30%", alignSelf: "center" }}
                variant="outlined"
                size="medium"
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
