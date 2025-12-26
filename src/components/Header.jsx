import "./Header.css";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="brand-news">News</span>
        <span className="brand-flash">Flash</span>
      </div>

      <input
        type="search"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </header>
  );
}

export default Header;
