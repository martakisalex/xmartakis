import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <img
        src="https://i.imgur.com/yGwweyj.jpeg"
        alt="Profile"
        className="profile-picture"
      />
      <h2>Welcome to xmartakis!</h2>
      <p>A personal site where I post game reviews, rank my favorite games, and blog about the latest gaming news. This site also serves as a playground for practicing my React and software engineering skills.</p>
      <div className="social-buttons">
        <a href="https://x.com/xmartakis" target="_blank" rel="noopener noreferrer">
          <button className="social-button">X</button>
        </a>
        <a href="https://www.youtube.com/@xmartakis" target="_blank" rel="noopener noreferrer">
          <button className="social-button">YouTube</button>
        </a>
        <a href="https://www.twitch.tv/xmartakis" target="_blank" rel="noopener noreferrer">
          <button className="social-button">Twitch</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;