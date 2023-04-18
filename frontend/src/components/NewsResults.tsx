import { NewsContext } from "@/context";
import { Divider, Grid, Link, Typography } from "@mui/material";
import React, { useContext } from "react";

const NewsResults = (): React.ReactElement => {
    const { newsData, loading } = useContext(NewsContext);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }
    // else if (newsData.length === 0) {
    //     return <Typography>No results found</Typography>;
    // }
    return (
        <>
            {newsData.map((article, index) => {
                return (
                    <>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={4} md={2}>
                                <Typography>Title:</Typography>
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
                                <Typography>Author:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "1"} gutterBottom>
                                    {article.author}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Published Date:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "2"} gutterBottom>
                                    {article.published_date}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Link:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Link
                                    key={index + "3"}
                                    href={article.link}
                                    gutterBottom
                                >
                                    {article.link}
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Clean URL:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Link
                                    key={index + "4"}
                                    href={article.clean_url}
                                    gutterBottom
                                >
                                    {article.clean_url}
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Excerpt:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "5"} gutterBottom>
                                    {article.excerpt}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Summary:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "6"} gutterBottom>
                                    {article.summary}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Rights:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "7"} gutterBottom>
                                    {article.rights}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Rank:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "8"} gutterBottom>
                                    {article.rank}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Topic:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "9"} gutterBottom>
                                    {article.topic}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Country:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "10"} gutterBottom>
                                    {article.country}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Language:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "11"} gutterBottom>
                                    {article.language}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Authors:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "12"} gutterBottom>
                                    {article.authors}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Media:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Link
                                    key={index + "13"}
                                    href={article.media}
                                    gutterBottom
                                >
                                    {article.clean_url}
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Is Opinion:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "14"} gutterBottom>
                                    {article.is_opinion}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Twitter Account:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "15"} gutterBottom>
                                    {article.twitter_account}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Score:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index + "16"} gutterBottom>
                                    {article._score}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </>
                );
            })}
        </>
    );
};

export default NewsResults;
