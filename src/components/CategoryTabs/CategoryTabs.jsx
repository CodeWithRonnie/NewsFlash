import React, { useState, useEffect } from "react";
import "./CategoryTabs.css";

const categories = [
  "top",
  "technology",
  "sports",
  "entertainment",
  "health",
  "science",
  "business",
];

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile when window resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // MOBILE: use dropdown
    return (
      <div className="category-dropdown">
        <select
          value={activeCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // DESKTOP: show horizontal tabs
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab ${activeCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
