import { INewsRepository } from '../../domain/repositories/INewsRepository';
import { NewsArticle } from '../../domain/models/NewsArticle';

export class NewsService {
  constructor(private newsRepository: INewsRepository) {}

  async getNews(): Promise<NewsArticle[]> {
    return await this.newsRepository.fetchNews();
  }
}
