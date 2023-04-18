import { NextFunction, Request, Response } from "express";
import News from "../models/News";

class NewsController {
    constructor() {
        this.getNews = this.getNews.bind(this);
    }

    async getNews(req: Request, res: Response, next: NextFunction) {
        try {
            let newsData = await News.find();
            const news = res.status(200).json({
                success: true,
                news: newsData,
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new NewsController();
