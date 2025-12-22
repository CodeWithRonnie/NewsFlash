import React from "react";
import "./CategoryTabs.css";

const categories = [
  "top",
  "technology",
  "sports",
  "entertainment",
  "health",
  "science",
  "business"
];

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
