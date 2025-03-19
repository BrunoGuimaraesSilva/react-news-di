import { INewsRepository } from '../../domain/repositories/INewsRepository';
import { NewsArticle } from '../../domain/models/NewsArticle';

interface RawArticle {
  source_id: string | null;
  source_name: string | null;
  author: string | null;
  title: string;
  description: string | null;
  link: string;
  image_url: string | null;
  pubDate: string;
  content: string | null;
}

interface NewsDataAPIResponse {
  results: RawArticle[];
}

export class NewsDataRepository implements INewsRepository {
  async fetchNews(): Promise<NewsArticle[]> {
    const url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWS_DATA_KEY}&category=politics&country=us`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch news data');
      }

      const data: NewsDataAPIResponse = await response.json();

      // Map the raw data to NewsArticle instances
      return data.results.map(
        ({
          source_id,
          source_name,
          author,
          title,
          description,
          link,
          image_url,
          pubDate,
          content,
        }) => {
          return new NewsArticle(
            {
              id: source_id ?? '',
              name: source_name ?? 'Unknown',
            },
            author ?? 'Unknown',
            title,
            description ?? '',
            link,
            image_url ?? '',
            pubDate,
            content ?? ''
          );
        }
      );
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }
}
