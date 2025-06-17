import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#artworks">Artworks</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
