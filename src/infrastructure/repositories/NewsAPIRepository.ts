import { INewsRepository } from '../../domain/repositories/INewsRepository';
import { NewsArticle } from '../../domain/models/NewsArticle';
import { NewsMappingService } from '../services/NewsMappingService';

interface RawArticle {
  source: { id: string | null; name: string | null };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsAPIResponse {
  articles: RawArticle[];
}

export class NewsAPIRepository implements INewsRepository {
  async fetchNews(): Promise<NewsArticle[]> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    const response = await fetch(url);
    const data: NewsAPIResponse = await response.json();

    return NewsMappingService.mapToNewsArticle(data.articles);
  }
}
