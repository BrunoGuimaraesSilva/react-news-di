# News Fetching App

This is a simple React application that fetches the latest news articles using the [NewsAPI](https://newsapi.org/). It uses modern tools and concepts, including Vite, TypeScript, React Context, and custom services to fetch and display the news.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [Environment Variables](#environment-variables)
- [License](#license)

## Tech Stack

- **Vite**: A fast development build tool and bundler.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed superset of JavaScript.
- **React Context**: For managing global state across the application.
- **NewsAPI**: A simple API for fetching news articles.

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Add your NewsAPI key to a `.env` file in the root of the project:

   ```env
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the app and it will be available at `http://localhost:3000`.

## File Structure

```bash
.
├── src/
│   ├── components/
│   │   └── NewsList.tsx
│   ├── contexts/
│   │   └── NewsServiceContext.tsx
│   ├── services/
│   │   ├── NewsAPIService.ts
│   │   └── NewsService.ts
│   ├── App.tsx
│   ├── main.tsx
├── tsconfig.json
├── vite.config.ts
├── .env
└── package.json
```

## How It Works

1. **Services**: 
   - `NewsService` is an interface that defines a method to fetch news.
   - `NewsAPIService` is a class that implements `NewsService` and fetches the latest news using the [NewsAPI](https://newsapi.org/).

2. **Context**: 
   - `NewsServiceContext` provides the `NewsService` instance to the rest of the app. The `useNewsService` hook allows components to access this service.

3. **NewsList Component**:
   - The `NewsList` component fetches and displays the news articles. It uses the `useNewsService` hook to get the news service and fetch the data.

4. **App Component**:
   - The `App` component wraps the `NewsList` component in a `NewsServiceProvider`, passing an instance of `NewsAPIService` as the `service` prop.

5. **Main Entry**:
   - The `main.tsx` file renders the `App` component inside a `React.StrictMode` wrapper.

## Environment Variables

To run the application, you will need to create a `.env` file at the root of the project. The file should contain the following:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

You can get your API key from [NewsAPI](https://newsapi.org/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
