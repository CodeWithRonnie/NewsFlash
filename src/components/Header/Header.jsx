import React from 'react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>NewsFlash</h1>
          <p className="tagline">Your daily dose of news</p>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for news..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
