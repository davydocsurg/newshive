import api from "@/api";
import { NEWS_API_BASE_URL } from "@/config";

const getNews = async (
    query: string,
    // language: string,
    country: string,
    publishedDate: string,
    pageSize?: 1
) => {
    try {
        // return console.log("got here");

        const response = await api.get(
            NEWS_API_BASE_URL +
                `search?q=${query}&from=${publishedDate}&countries=${country}&page_size=${pageSize}`
        );
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);

        throw err;
    }
};

export default getNews;
