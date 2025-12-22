import './Home.css';

function Home({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No news available</p>;
  }

  const leadStory = articles[0];
  const latestStories = articles.slice(1, 5);
  const mainStories = articles.slice(5, 10);

  return (
    <main className="home">
      {/* TOP STORIES */}
      <section className="home__top-stories">
        <article className="lead-story">
          {leadStory.urlToImage && (
            <img
              src={leadStory.urlToImage}
              alt={leadStory.title}
              className="lead-story__image"
            />
          )}
          <p className="section-label">Top Story</p>
          <h2>{leadStory.title}</h2>
          <p className="lead-story__meta">
            {leadStory.source.name} · {new Date(leadStory.publishedAt).toLocaleString()}
          </p>
          <p className="lead-story__summary">{leadStory.description}</p>
        </article>

        <div className="top-list">
          <p className="section-label">Latest</p>
          <ul>
            {latestStories.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="home__grid">
        <div className="home__main-column">
          {mainStories.map((article, index) => (
            <article className="story-card" key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>

        <aside className="home__sidebar">
          <div className="sidebar-block">
            <h4>Editor’s Choice</h4>
            <ol>
              {articles.slice(0,5).map((article, index) => (
                <li key={index}>{article.title}</li>
              ))}
            </ol>
          </div>

          <div className="sidebar-block sidebar-block--compact">
            <h4>Top Stories</h4>
            <ul>
              {articles.slice(5,10).map((article, index) => (
                <li key={index}>{article.title}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Home;
