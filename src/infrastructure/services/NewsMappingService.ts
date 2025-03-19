import { NewsArticle } from "../../domain/models/NewsArticle";

export interface NewsAPIRawArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsDataRawArticle {
  source_id: string;
  source_name: string;
  author: string;
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
  content: string;
}


export class NewsMappingService {
  // Converts NewsAPI raw articles to NewsArticle
  static newsAPIToNewsArticle(newsAPIRawArticles: NewsAPIRawArticle[]): NewsArticle[] {
    return newsAPIRawArticles.map(({
      source,
      author = 'Unknown',
      title,
      description = '',
      url,
      urlToImage = '',
      publishedAt,
      content = '',
    }) => ({
      source: {
        id: source?.id ?? '',
        name: source?.name ?? 'Unknown',
      },
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    }));
  }

  // Converts NewsData raw articles to NewsArticle
  static newsDataToNewsArticle(newsDataRawArticles: NewsDataRawArticle[]): NewsArticle[] {
    return newsDataRawArticles.map(({
      source_id = '',
      source_name = 'Unknown',
      author = 'Unknown',
      title,
      description = '',
      link,
      image_url = '',
      pubDate,
      content = '',
    }) => new NewsArticle(
      {
        id: source_id,
        name: source_name,
      },
      author,
      title,
      description,
      link,
      image_url,
      pubDate,
      content
    ));
  }
}
