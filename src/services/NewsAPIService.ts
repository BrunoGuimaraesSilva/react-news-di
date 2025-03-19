import { NewsArticle, NewsService } from './NewsService';



export class NewsAPIService implements NewsService {

  async fetchNews() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=' + import.meta.env.VITE_NEWS_API_KEY;

    const response = await fetch(url);
    const data = await response.json();

    // Map the fetched articles to match the NewsArticle type
    return data.articles.map((article: any) => ({
      source: {
        id: article.source?.id ?? 0,
        name: article.source?.name ?? 'Unknown',
      },
      author: article.author ?? '',
      title: article.title,
      description: article.description ?? '',
      url: article.url,
      urlToImage: article.urlToImage ?? '',
      publishedAt: article.publishedAt,
      content: article.content ?? '',
    }));
  }
}
