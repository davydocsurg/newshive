import { NewsContext } from "@/context";
import { Grid, Link, Typography } from "@mui/material";
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

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Author:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.author}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">
                                    Published Date:
                                </Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.published_date}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Link:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Link
                                    key={index}
                                    href={article.link}
                                    gutterBottom
                                >
                                    {article.link}
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Clean URL:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Link
                                    key={index}
                                    href={article.clean_url}
                                    gutterBottom
                                >
                                    {article.clean_url}
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Excerpt:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.excerpt}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Summary:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.summary}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Rights:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.rights}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Rank:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.rank}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Topic:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.topic}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography variant="h6">Country:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.country}
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
