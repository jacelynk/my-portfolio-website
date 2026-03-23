import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar({ scrolled, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledState, setScrolledState] = useState(false);

  useEffect(() => {
    setScrolledState(scrolled);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Graphic Design', href: '#graphic-design' },
    { name: 'Campus', href: '#campus' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolledState ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home" className="brand-link">
            <span className="brand-text">JC</span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="navbar-actions">
          <div className="social-links">
            <a href="https://github.com/jacelynk" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jacelyncaratao" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="mailto:jacelyncaratao145@gmail.com" className="social-link">
              <Mail size={18} />
            </a>
          </div>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
