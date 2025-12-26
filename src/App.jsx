import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Home from "./pages/Home";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("top"); // Default category
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "pub_f27a913513b6425ea0316d73249019f9";

  // Fetch news on category change
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&category=${category}`
        );
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          setArticles([]);
          setFilteredArticles([]);
          setError("No news available at the moment.");
        } else {
          setArticles(data.results);
          setFilteredArticles(data.results); // Initially, show all articles in this category
        }
      } catch {
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // Filter articles by search term within the selected category
  useEffect(() => {
    const filtered = articles.filter((article) =>
      article.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchTerm, articles]);

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <CategoryTabs activeCategory={category} onSelectCategory={setCategory} />

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <LoadingSkeleton count={5} />
      ) : (
        <Home articles={filteredArticles} />
      )}
    </div>
  );
}

export default App;
