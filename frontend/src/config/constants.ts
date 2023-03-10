import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const NEWS_API_BASE_URL = "https://api.newscatcherapi.com/v2/";
export const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
];
export const sidebar = {
    title: "About",
    description:
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [
        { title: "March 2020", url: "#" },
        { title: "February 2020", url: "#" },
        { title: "January 2020", url: "#" },
        { title: "November 1999", url: "#" },
        { title: "October 1999", url: "#" },
        { title: "September 1999", url: "#" },
        { title: "August 1999", url: "#" },
        { title: "July 1999", url: "#" },
        { title: "June 1999", url: "#" },
        { title: "May 1999", url: "#" },
        { title: "April 1999", url: "#" },
    ],
    social: [
        { name: "GitHub", icon: GitHubIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "Facebook", icon: FacebookIcon },
    ],
};
export const drawerWidth: number = 240;
// HTTP 401
export const UNAUTHORIZED = "Session expired. Please login";

// HTTP 404
export const NOT_FOUND = "The requested resource was not found";

// HTTP 500
export const SERVER_ERROR = "Something has gone wrong, please try again";

// HTTP 503
export const SERVICE_UNAVAILABLE =
    "Service unavailable. Please try again later";

export const API_BASE_URL = "http://localhost:3000/api/";
export const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
