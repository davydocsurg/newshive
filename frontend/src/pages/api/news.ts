import api from "@/api";

const getNews = async (
    query: string,
    publishedDate: string,
    country: string,
    pageSize: number
) => {
    try {
        const response = await api.get(
            `/search?q=${query}&from=${publishedDate}&countries=${country}&page_size=${pageSize}`
        );
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);

        throw err;
    }
};

export { getNews };
