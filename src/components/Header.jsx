import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="brand-news">News</span>
        <span className="brand-flash">Flash</span>
      </div>

      <input
        type="text"
        placeholder="Search news..."
        className="header__search"
      />
    </header>
  );
}

export default Header;
