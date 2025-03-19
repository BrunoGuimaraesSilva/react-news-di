import { NewsArticle } from '../models/NewsArticle';

export interface INewsRepository {
  fetchNews(): Promise<NewsArticle[]>;
}
