import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Home from "./pages/Home";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("top"); // Default category

  const API_KEY = "pub_f27a913513b6425ea0316d73249019f9";

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
          setError("No news available at the moment.");
        } else {
          setArticles(data.results);
        }
      } catch (err) {
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="app">
      <Header />

      <CategoryTabs
        activeCategory={category}
        onSelectCategory={setCategory} 
      />

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <LoadingSkeleton count={5} />
      ) : (
        <Home articles={articles} />
      )}
    </div>
  );
}

export default App;
