import React, { createContext, useContext, ReactNode } from 'react';
import { NewsService } from '../../domain/services/NewsService';

interface NewsServiceContextType {
  newsService: NewsService;
}

const NewsServiceContext = createContext<NewsServiceContextType | undefined>(undefined);

interface NewsServiceProviderProps {
  service: NewsService;
  children: ReactNode;
}

export const NewsServiceProvider = ({ service, children }: NewsServiceProviderProps) => (
  <NewsServiceContext.Provider value={{ newsService: service }}>
    {children}
  </NewsServiceContext.Provider>
);

export const useNewsService = (): NewsService => {
  const context = useContext(NewsServiceContext);
  if (!context) {
    throw new Error('useNewsService must be used within a NewsServiceProvider');
  }
  return context.newsService;
};
