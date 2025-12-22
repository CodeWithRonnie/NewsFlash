import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.css';

const NewsList = ({ articles = [], title = 'Top Headlines' }) => {
  return (
    <div className="news-list">
      <h2 className="section-title">{title}</h2>
      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={article.url ?? index} article={article} />
          ))
        ) : (
          <p className="no-articles">No articles found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
