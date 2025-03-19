import { createContext, useContext } from "react";
import { NewsService } from "../services/NewsService";

const NewsServiceContext = createContext<NewsService | null>(null);

export const NewsServiceProvider = ({
  service,
  children,
}: {
  service: NewsService;
  children: React.ReactNode;
}) => (
  <NewsServiceContext.Provider value={service}>
    {children}
  </NewsServiceContext.Provider>
);

export const useNewsService = () => {
  const context = useContext(NewsServiceContext);
  if (!context)
    throw new Error("useNewsService must be used within a NewsServiceProvider");
  return context;
};
