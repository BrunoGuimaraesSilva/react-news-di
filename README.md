# 📰 News Application

A modular and scalable news application built with **React** and **TypeScript**, following a **Clean Architecture** approach with a **simple Dependency Injection (DI)** pattern.

## 📁 Project Structure

```
src/
├── components/          # UI components
│   └── NewsList.tsx
├── domain/              # Core business logic
│   ├── models/          # Data models
│   │   └── NewsArticle.ts
│   ├── repositories/    # Interfaces for data access
│   │   └── INewsRepository.ts
│   └── services/        # Business logic services
│       └── NewsService.ts
├── infrastructure/      # Implementations and context
│   ├── context/         # React Context for DI
│   │   └── NewsServiceContext.tsx
│   ├── repositories/    # API and data implementations
│   │   ├── NewsAPIRepository.ts
│   │   └── NewsDataRepository.ts
│   └── services/        # Mapping and utility services
│       └── NewsMappingService.ts
├── App.tsx              # Main application component
├── main.tsx             # Entry point
└── vite.config.ts       # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BrunoGuimaraesSilva/react-news-di.git
   cd react-news-di
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_NEWS_API_KEY=your_api_key_here
VITE_NEWS_DATA_KEY=your_data_key_here
```

### Running the Application

Start the development server:

```bash
yarn dev
```

### Building for Production

```bash
yarn build
```

## 📐 Architecture Overview

The project is designed following **Clean Architecture** principles and implements a **simple Dependency Injection (DI)** mechanism using React Context. This allows for better modularity, separation of concerns, and easier testing.

### Layers Breakdown

- **Domain Layer**: Contains core business logic (models, interfaces, and services).
- **Infrastructure Layer**: Handles external integrations (API implementations, context, mapping services).
- **Component Layer**: Contains UI components to present data.

### Dependency Injection (DI)

We use **React Context** to manage and inject dependencies. This promotes loose coupling and makes testing and future modifications easier.

Example Flow:

1. **Interface Definition**: `INewsRepository` defines the contract for data access.
2. **Implementation**: `NewsAPIRepository` and `NewsDataRepository` provide concrete implementations.
3. **Service Layer**: `NewsService` handles business logic by relying on repository interfaces.
4. **Context Provider**: `NewsServiceContext.tsx` provides dependencies to React components via context.

## 📄 License

This project is licensed under the **MIT License**.

