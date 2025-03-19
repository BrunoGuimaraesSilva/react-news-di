import React, { useEffect, useState } from 'react';
import './NewsList.css';
import { NewsArticle } from '../domain/models/NewsArticle';
import { useNewsService } from '../infrastructure/context/NewsServiceContext';

export const NewsList = () => {
  const newsService = useNewsService();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    newsService
      .fetchNews()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      });
  }, [newsService]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img className='news-image' src={article.urlToImage} alt={article.title} />
            <h3 className="news-title">{article.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};
