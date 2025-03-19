import { NewsArticle } from "../models/NewsArticle";

export interface NewsService {
    fetchNews(): Promise<NewsArticle[]>;
  }
  