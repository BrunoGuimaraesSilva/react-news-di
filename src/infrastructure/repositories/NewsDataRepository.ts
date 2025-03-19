import { INewsRepository } from "../../domain/repositories/INewsRepository";
import { NewsArticle } from "../../domain/models/NewsArticle";
import {
  NewsDataRawArticle,
  NewsMappingService,
} from "../../infrastructure/services/NewsMappingService";

interface NewsDataAPIResponse {
  results: NewsDataRawArticle[];
}

export class NewsDataRepository implements INewsRepository {
  async fetchNews(): Promise<NewsArticle[]> {
    const url = `https://newsdata.io/api/1/latest?apikey=${
      import.meta.env.VITE_NEWS_DATA_KEY
    }&category=politics&country=us`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }

      const data: NewsDataAPIResponse = await response.json();

      return NewsMappingService.newsDataToNewsArticle(data.results);
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  }
}
