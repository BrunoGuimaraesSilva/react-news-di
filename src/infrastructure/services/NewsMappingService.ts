import { NewsArticle } from "../../domain/models/NewsArticle";

interface RawArticle {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export class NewsMappingService {
  static mapToNewsArticle(rawArticles: RawArticle[]): NewsArticle[] {
    return rawArticles.map(
      ({ source, author, title, description, url, urlToImage, publishedAt, content }) => ({
        source: {
          id: source?.id ?? '',
          name: source?.name ?? 'Unknown',
        },
        author: author ?? '',
        title,
        description: description ?? '',
        url,
        urlToImage: urlToImage ?? '',
        publishedAt,
        content: content ?? '',
      })
    );
  }
}
