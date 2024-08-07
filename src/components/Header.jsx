import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#favorites">Favorites</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;