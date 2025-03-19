import { NewsList } from './components/NewsList';
import { NewsServiceProvider } from './infrastructure/context/NewsServiceContext';
import { NewsAPIRepository } from './infrastructure/repositories/NewsAPIRepository';
import { NewsDataRepository } from './infrastructure/repositories/NewsDataRepository';

/**
 * App Component:
 * 
 * The main component of the app where the news service is provided to the rest of the application.
 * The service (repository) is injected into the context provider, making it accessible throughout the component tree.
 * 
 * **Note:** 
 * If the client needs to change the news data source (e.g., switch from NewsAPI to NewsData), 
 * they can simply change the repository in the NewsServiceProvider below without modifying the core logic of the app.
 * 
 * To switch the repository, replace `new NewsAPIRepository()` with `new NewsDataRepository()`.
 */
export function App() {
  return (
    <NewsServiceProvider service={new NewsAPIRepository()}>
      <NewsList />
    </NewsServiceProvider>
  );
}
