import "./Home.css";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/600x400?text=NewsFlash";

function Home({ articles }) {
  if (!articles || articles.length === 0) {
    return <p className="no-news">No articles to display.</p>;
  }

  const leadStory = articles[0];

  const trendingArticles = articles
    .filter(article => article.title)
    .slice(0, 5);

  const openArticle = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="home">
      {/* TOP STORY */}
      <section className="home__top-stories">
        <article
          className="lead-story"
          onClick={() => openArticle(leadStory.link)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={leadStory.image_url || FALLBACK_IMAGE}
            alt={leadStory.title}
            className="lead-story__image"
          />

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
        {/* MAIN COLUMN */}
        <div className="home__main-column">
          <p className="section-label">Latest News</p>

          {articles.slice(1, 6).map((article, index) => (
            <article
              className="story-card"
              key={index}
              onClick={() => openArticle(article.link)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={article.image_url || FALLBACK_IMAGE}
                alt={article.title}
                className="story-card__image"
              />

              <h3>{article.title}</h3>

              <p>
                {article.description || "No summary available."}
              </p>
            </article>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="home__sidebar">
          <div className="sidebar-block">
            <h4>Trending</h4>
            <ol>
              {trendingArticles.map((article, index) => (
                <li
                  key={index}
                  onClick={() => openArticle(article.link)}
                  style={{ cursor: "pointer" }}
                >
                  {article.title}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Home;
