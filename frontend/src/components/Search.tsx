import getNews from "@/pages/api/news";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Search = (): React.ReactElement => {
    const [NewsSearch, setNewsSearch] = useState("");

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
                    onChange={(e) => {
                        setNewsSearch(e.target.value);
                    }}
                    onKeyDown={searchNews}
                    fullWidth
                />
            </form>
        </>
    );
};

export default Search;
