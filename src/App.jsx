import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Home from "./pages/Home";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const API_KEY = "pub_f27a913513b6425ea0316d73249019f9"; 

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      try {
        const categoryParam =
          activeCategory !== "all" ? `&category=${activeCategory}` : "";

        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en${categoryParam}`
        );

        const data = await response.json();

        // newsdata.io uses "results", not "articles"
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }

      setIsLoading(false);
    };

    fetchNews();
  }, [activeCategory]);

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <div className="container">
          <CategoryTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

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
