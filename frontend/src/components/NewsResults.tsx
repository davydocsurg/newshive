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
                                <Typography key={index} gutterBottom>
                                    {article.author}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Published Date:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
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
                                <Typography>Clean URL:</Typography>
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
                                <Typography>Excerpt:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.excerpt}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Summary:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.summary}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Rights:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.rights}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Rank:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.rank}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Topic:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.topic}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Country:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.country}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Language:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.language}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Authors:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
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
                                    key={index}
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
                                <Typography key={index} gutterBottom>
                                    {article.is_opinion}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Twitter Account:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article.twitter_account}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={4} md={2}>
                                <Typography>Score:</Typography>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Typography key={index} gutterBottom>
                                    {article._score}
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
