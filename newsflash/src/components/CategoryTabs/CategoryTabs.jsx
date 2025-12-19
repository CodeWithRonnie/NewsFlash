import React from 'react';
import './CategoryTabs.css';

const categories = [
  'all',
  'technology',
  'sports',
  'entertainment',
  'health',
  'science',
  'business'
];

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
