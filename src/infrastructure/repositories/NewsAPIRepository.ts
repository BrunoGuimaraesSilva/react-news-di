import { INewsRepository } from "../../domain/repositories/INewsRepository";
import { NewsArticle } from "../../domain/models/NewsArticle";
import {
  NewsAPIRawArticle,
  NewsMappingService,
} from "../services/NewsMappingService";

interface NewsAPIResponse {
  articles: NewsAPIRawArticle[];
}

export class NewsAPIRepository implements INewsRepository {
  async fetchNews(): Promise<NewsArticle[]> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }

      const data: NewsAPIResponse = await response.json();

      return NewsMappingService.newsAPIToNewsArticle(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  }
}
