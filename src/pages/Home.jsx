import "./Home.css";

function Home({ articles }) {
  if (!articles || articles.length === 0) {
    return <p style={{ padding: "1rem" }}>No articles to display.</p>;
  }

  const leadStory = articles[0];

  const handleImageError = (e) => {
    e.target.src = "/fallback-news.jpg"; // local image in /public
  };

  return (
    <main className="home">
      {/* TOP STORY */}
      <section className="home__top-stories">
        <article className="lead-story">
          {leadStory.image_url && (
            <img
              src={leadStory.image_url}
              alt={leadStory.title}
              onError={handleImageError}
              className="lead-story__image"
              loading="lazy"
            />
          )}

          <p className="section-label">Top Story</p>
          <h2>{leadStory.title}</h2>

          <p className="lead-story__meta">
            {leadStory.creator?.[0] || "NewsFlash"} ·{" "}
            {leadStory.pubDate || "Today"}
          </p>

          <p className="lead-story__summary">
            {leadStory.description || "No description available."}
          </p>
        </article>
      </section>

      {/* MAIN GRID */}
      <section className="home__grid">
        <div className="home__main-column">
          <p className="section-label">Latest News</p>

          {articles.slice(1, 6).map((article, index) => (
            <article className="story-card" key={index}>
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  onError={handleImageError}
                  className="story-card__image"
                  loading="lazy"
                />
              )}

              <h3>{article.title}</h3>
              <p>{article.description || "No summary available."}</p>
            </article>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="home__sidebar">
          <div className="sidebar-block">
            <h4>Trending</h4>
            <ol>
              {articles.slice(6, 11).map((article, index) => (
                <li key={index}>{article.title}</li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Home;
