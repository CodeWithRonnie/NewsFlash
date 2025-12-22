import { useState } from "react";
import Header from "./components/Header/Header";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Home from "./pages/Home";
import "./App.css";

// Mock articles (used before real API)
const mockArticles = [
  {
    title: "New Breakthrough in Renewable Energy",
    description:
      "Scientists have developed a new solar panel technology that doubles energy efficiency while reducing production costs.",
    urlToImage: "https://via.placeholder.com/600x400?text=Energy",
    publishedAt: "December 22, 2025 · 09:30",
    source: "Tech News",
    category: "technology",
  },
  {
    title: "Local Team Wins National Championship",
    description:
      "The local team secured their first national title in over a decade with a dramatic final goal.",
    urlToImage: "https://via.placeholder.com/600x400?text=Sports",
    publishedAt: "December 22, 2025 · 08:10",
    source: "Sports Daily",
    category: "sports",
  },
  {
    title: "Global Markets React to Economic Policy Changes",
    description:
      "Markets across the world reacted cautiously to newly announced economic stimulus measures.",
    urlToImage: "https://via.placeholder.com/600x400?text=Business",
    publishedAt: "December 22, 2025 · 07:45",
    source: "Financial Times",
    category: "business",
  },
  {
    title: "Award-Winning Director Announces New Film",
    description:
      "The acclaimed filmmaker revealed details about an upcoming project featuring an international cast.",
    urlToImage: "https://via.placeholder.com/600x400?text=Entertainment",
    publishedAt: "December 21, 2025 · 19:20",
    source: "Entertainment Weekly",
    category: "entertainment",
  },
  {
    title: "Health Experts Highlight Benefits of Balanced Diet",
    description:
      "New research confirms that a balanced diet significantly improves long-term health outcomes.",
    urlToImage: "https://via.placeholder.com/600x400?text=Health",
    publishedAt: "December 21, 2025 · 18:00",
    source: "Health Journal",
    category: "health",
  },
];

function App() {
  const [allArticles] = useState(mockArticles);
  const [articles, setArticles] = useState(mockArticles);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search from header
  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = allArticles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    setArticles(filtered);
  };

  // Handle category click
  const handleCategorySelect = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setArticles(allArticles);
      return;
    }

    const filtered = allArticles.filter(
      (article) => article.category === category
    );

    setArticles(filtered);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />

      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
      />

      <Home articles={articles} />

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} NewsFlash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
