import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Home from "./pages/Home";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const API_KEY = "86608fbfd1554a25b0cea65087fb9348";

  // Fetch news from API
 useEffect(() => {
  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const categoryParam = activeCategory !== "all" ? `&category=${activeCategory}` : "";
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=za${categoryParam}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setIsLoading(false);
  };

  fetchNews();
}, [activeCategory]);

 const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query) return;

    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setArticles(filtered);
  };


  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      
      <Header onSearch={handleSearch} />

      <main className="app-main">
        <div className="container">
          <CategoryTabs activeCategory={activeCategory} onSelectCategory={handleCategorySelect} />

          {isLoading ? (
            <LoadingSkeleton count={5} />
          ) : (
            <Home articles={articles} />
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
