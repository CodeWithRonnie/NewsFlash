import "./Home.css";

function Home({ articles }) {
  // Safety check
  if (!articles || articles.length === 0) {
    return <p style={{ padding: "2rem" }}>No news available.</p>;
  }

  // Decide how articles are distributed on the page
  const leadStory = articles[0];
  const latestStories = articles.slice(1, 5);
  const mainStories = articles.slice(5, 9);
  const sidebarStories = articles.slice(1, 6);

  return (
    <main className="home">
      {/* ================= TOP STORIES ================= */}
      <section className="home__top-stories">

        {/* Lead Story */}
        <article className="lead-story">
          {leadStory.urlToImage && (
            <img
              src={leadStory.urlToImage}
              alt={leadStory.title}
              className="lead-story__image"
            />
          )}

          <p className="section-label">Top Story</p>

          <h2>
            <a href={leadStory.url} target="_blank" rel="noreferrer">
              {leadStory.title}
            </a>
          </h2>

          <p className="lead-story__meta">
            {leadStory.source} · {leadStory.publishedAt}
          </p>

          <p className="lead-story__summary">
            {leadStory.description}
          </p>
        </article>

        {/* Latest Stories */}
        <div className="top-list">
          <p className="section-label">Latest</p>
          <ul>
            {latestStories.map((story, index) => (
              <li key={index}>
                <h3>
                  <a href={story.url} target="_blank" rel="noreferrer">
                    {story.title}
                  </a>
                </h3>
                {story.description && <p>{story.description}</p>}
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="home__grid">

        {/* Main Column */}
        <div className="home__main-column">
          <p className="section-label">Top News</p>

          {mainStories.map((story, index) => (
            <article className="story-card" key={index}>
              <h3>
                <a href={story.url} target="_blank" rel="noreferrer">
                  {story.title}
                </a>
              </h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="home__sidebar">

          <div className="sidebar-block">
            <h4>Trending</h4>
            <ol>
              {sidebarStories.map((story, index) => (
                <li key={index}>
                  <a href={story.url} target="_blank" rel="noreferrer">
                    {story.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="sidebar-block sidebar-block--compact">
            <h4>Editor’s Choice</h4>
            <ul>
              {sidebarStories.slice(0, 3).map((story, index) => (
                <li key={index}>
                  <a href={story.url} target="_blank" rel="noreferrer">
                    {story.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </section>
    </main>
  );
}

export default Home;
