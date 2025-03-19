import { NewsAPIService } from './services/NewsAPIService';
import { NewsList } from './components/NewsList';
import { NewsServiceProvider } from './context/NewsServiceContext';

export function App() {
  return (
    <NewsServiceProvider service={new NewsAPIService()}>
      <NewsList />
    </NewsServiceProvider>
  );
}