import { TextField } from "@mui/material";
import React, { useState } from "react";

const Search = (): React.ReactElement => {
    const [NewsSearch, setNewsSearch] = useState("");

    return (
        <>
            <TextField
                id="outlined-basic"
                label="Search News About:"
                variant="outlined"
                onChange={(e) => {
                    setNewsSearch(e.target.value);
                }}
            />
        </>
    );
};

export default Search;
