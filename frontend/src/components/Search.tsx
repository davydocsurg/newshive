import { NewsContext } from "@/context";
import getNews from "@/pages/api/news";
import { Button, SelectChangeEvent, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

const Search = (): React.ReactElement => {
    const { query, language, publishedWithin, publisherCountry, setQuery } =
        useContext(NewsContext);

    const searchNews = async (e: any) => {
        e.preventDefault();
        await getNews(query, publisherCountry, publishedWithin);
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
            >
                Search
            </Button>

            {/* </form> */}
        </>
    );
};

export default Search;
