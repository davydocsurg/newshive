import api from "@/api";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "@/config";

const getNews = async (
    query: string,
    // language: string,
    country: string,
    publishedDate: string,
    pageSize: number
) => {
    try {
        const response = await api.get(
            NEWS_API_BASE_URL +
                `search?q=${query}&from=${publishedDate}&countries=${country}&page_size=${pageSize}`
        );
        console.log(response);

        return response.data;
    } catch (err) {
        console.error(err);

        return err;
    }
};

export default getNews;
