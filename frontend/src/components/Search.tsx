import { NewsContext } from "@/context";
import getNews from "@/pages/api/news";
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";

const Search = (): React.ReactElement => {
    const { query, setQuery } = useContext(NewsContext);

    const searchNews = async (e: any) => {
        e.preventDefault();
        if (e.code == "Enter") {
            await getNews();
        }
    };

    return (
        <>
            <form action="" method="get" onSubmit={searchNews}>
                <TextField
                    id="outlined-basic"
                    label="Search News About:"
                    variant="outlined"
                    // defaultValue={"query"}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        console.log(query);
                    }}
                    value={query}
                    // onKeyDown={searchNews}
                    fullWidth
                />
            </form>
        </>
    );
};

export default Search;
