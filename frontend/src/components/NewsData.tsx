import { NewsContext } from "@/context";
import { Typography } from "@mui/material";
import React, { useContext } from "react";

const NewsData = (): React.ReactElement => {
    const { newsData } = useContext(NewsContext);

    return (
        <>
            {newsData.map((news, index) => {
                <Typography>{news.title}</Typography>;
            })}
        </>
    );
};

export default NewsData;
