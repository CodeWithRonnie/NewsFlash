import "./Home.css";

function Home({ articles }) {
  if (!articles || articles.length === 0) {
    return <p style={{ padding: "1rem" }}>No articles to display.</p>;
  }

  const leadStory = articles[0];

  const handleImageError = (e) => {
    e.target.src = "/fallback-news.jpg"; 
  };

  return (
    <>
      <main className="home">
        
        <section className="home_top-stories">
          <article className="lead-story">
            {leadStory.image_url && (
              <img
                src={leadStory.image_url}
                alt={leadStory.title}
                onError={handleImageError}
                className="lead-story_image"
                loading="lazy"
              />
            )}

            <p className="section-label">Top Story</p>
            <h2>
              <a 
                href={leadStory.link} 
                target="_blank" 
                rel="noopener noreferrer"
                class="story-card_title"
              >
                {leadStory.title}
              </a>
            </h2>

            <p className="lead-story_meta">
              {leadStory.creator?.[0] || "NewsFlash"} ·{" "}
              {leadStory.pubDate || "Today"}
            </p>

            <p className="lead-story_summary">
              {leadStory.description || "No description available."}
            </p>
          </article>
        </section>

        <section className="home_grid">
          <div className="home_main-column">
            <p className="section-label">Latest News</p>

            {articles.slice(1, 6).map((article, index) => (
              <article className="story-card" key={index}>
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    onError={handleImageError}
                    className="story-card_image"
                    loading="lazy"
                  />
                )}

                <h3>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="story-card_title"
                  >
                    {article.title}
                  </a>
                </h3>
                <p>{article.description || "No summary available."}</p>
              </article>
            ))}
          </div>

          <aside className="home_sidebar">
            <div className="sidebar-block">
              <h4>Trending</h4>
              <ol>
                {articles.slice(6, 11).map((article, index) => (
                  <li key={index}>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="story-card_title"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>
      </main>

      
      <footer className="home-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} NewsFlash. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
