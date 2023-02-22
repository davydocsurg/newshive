import api from "@/api";
import { NEWS_API_BASE_URL } from "@/config";

const getNews = async (
    query: string,
    publishedDate: string,
    country: string,
    pageSize: number
) => {
    try {
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
