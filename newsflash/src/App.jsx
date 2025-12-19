import { useState } from 'react';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import './App.css';

// Mock data for initial rendering
const mockArticles = [
  {
    title: 'Sample News Article',
    description: 'This is a sample news article description that would be replaced with real data from the API.',
    url: 'https://example.com',
    urlToImage: 'https://via.placeholder.com/600x400?text=News+Image',
    publishedAt: new Date().toISOString(),
    source: { name: 'News Source' }
  },
  // Add more mock articles as needed
];

function App() {
  const [articles, setArticles] = useState(mockArticles);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // This will be implemented in the next step
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search functionality will be implemented in the next step
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <main className="app-main">
        <div className="container">
          {isLoading ? (
            <div className="loading">Loading latest news...</div>
          ) : (
            <NewsList articles={articles} />
          )}
        </div>
      </main>
      <footer className="app-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} NewsFlash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;