import { NewsContext } from "@/context";
import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

const NewsResults = (): React.ReactElement => {
    const { newsData, loading } = useContext(NewsContext);

    if (loading) {
        return <Typography>Loading...</Typography>;
    } else if (newsData.length == 0) {
        return <Typography>No results found</Typography>;
    }
    return (
        <>
            {/* {newsData[0].title} */}
            {newsData.map((article, index) => {
                return (
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Title:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography
                                    key={index}
                                    variant="h5"
                                    gutterBottom
                                >
                                    {article.title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
                );
            })}
        </>
    );
};

export default NewsResults;
