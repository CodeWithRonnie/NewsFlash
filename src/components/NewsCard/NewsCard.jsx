import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="news-card">
      {urlToImage && (
        <div className="news-image">
          <img src={urlToImage} alt={title} onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x400?text=No+Image+Available';
          }} />
        </div>
      )}
      <div className="news-content">
        <div className="news-meta">
          {source?.name && <span className="news-source">{source.name}</span>}
          {publishedAt && <span className="news-date">{formatDate(publishedAt)}</span>}
        </div>
        <h3 className="news-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="news-description">{description}</p>
        <a 
          href={url} 
          className="read-more" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Read more →
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
