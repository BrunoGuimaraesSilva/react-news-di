import { NewsList } from './components/NewsList';
import { NewsServiceProvider } from './infrastructure/context/NewsServiceContext';
import { NewsAPIRepository } from './infrastructure/repositories/NewsAPIRepository';

export function App() {
  return (
    <NewsServiceProvider service={new NewsAPIRepository()}>
      <NewsList />
    </NewsServiceProvider>
  );
}