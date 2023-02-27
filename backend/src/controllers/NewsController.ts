import { NextFunction, Request, Response } from "express";

class NewsController {
    constructor() {
        this.getNews = this.getNews.bind(this);
    }

    async getNews(req: Request, res: Response, next: NextFunction) {
        try {
            const news = res.status(200).json({
                success: true,
                news: news,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new NewsController();
