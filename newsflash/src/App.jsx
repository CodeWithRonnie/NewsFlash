import { useState } from 'react';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import './App.css';

// Mock data for initial rendering
const mockArticles = [
  {
    title: 'New Breakthrough in Renewable Energy',
    description: 'Scientists have developed a new solar panel technology that doubles energy efficiency while reducing production costs.',
    url: 'https://example.com/renewable-energy',
    urlToImage: 'https://via.placeholder.com/600x400?text=Solar+Tech',
    publishedAt: new Date().toISOString(),
    source: { name: 'Tech News' },
    category: 'technology'
  },
  {
    title: 'Local Team Wins National Championship',
    description: 'In a stunning victory, the local team secured their first national title in over a decade with a last-minute goal.',
    url: 'https://example.com/sports-victory',
    urlToImage: 'https://via.placeholder.com/600x400?text=Sports+Win',
    publishedAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    source: { name: 'Sports Daily' },
    category: 'sports'
  },
  {
    title: 'Award-Winning Film Director Announces New Project',
    description: 'The acclaimed director revealed details about an upcoming film featuring an all-star cast and groundbreaking visual effects.',
    url: 'https://example.com/film-announcement',
    urlToImage: 'https://via.placeholder.com/600x400?text=Film+News',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: { name: 'Entertainment Weekly' },
    category: 'entertainment'
  },
  {
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    description: 'Research confirms significant health improvements for participants following the Mediterranean diet for just three months.',
    url: 'https://example.com/health-study',
    urlToImage: 'https://via.placeholder.com/600x400?text=Health+Research',
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    source: { name: 'Health Journal' },
    category: 'health'
  },
  {
    title: 'Tech Giant Unveils Next-Gen Smartphone',
    description: 'The latest flagship device features an innovative camera system and week-long battery life.',
    url: 'https://example.com/tech-announcement',
    urlToImage: 'https://via.placeholder.com/600x400?text=New+Gadget',
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    source: { name: 'Tech Today' },
    category: 'technology'
  },
  {
    title: 'Global Markets React to New Economic Policies',
    description: 'Stock markets show mixed reactions as governments implement new economic stimulus measures worldwide.',
    url: 'https://example.com/market-news',
    urlToImage: 'https://via.placeholder.com/600x400?text=Stock+Market',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    source: { name: 'Financial Times' },
    category: 'business'
  }
];

function App() {
  const [articles, setArticles] = useState(mockArticles);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // This will be implemented in the next step
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search functionality will be implemented in the next step
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setArticles(mockArticles);
      return;
    }

    setArticles(mockArticles.filter((article) => article.category === category));
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <main className="app-main">
        <div className="container">
          <CategoryTabs activeCategory={activeCategory} onSelectCategory={handleCategorySelect} />
          {isLoading ? (
            <div className="loading">Loading latest news...</div>
          ) : (
            <NewsList articles={articles} title="Top Headlines" />
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