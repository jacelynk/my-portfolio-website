import '../styles/global.css';
import Navbar from './Navbar';
import '../App.css';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Award, BookOpen, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'graphic-design', 'campus', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const projectData = {
    sibol: {
      title: 'SIBOL (Thesis)',
      description: 'Developed an IoT-based waste-to-energy system converting organic waste into biogas, integrating sensors for real-time monitoring and automation. Built a data management and monitoring system using TypeScript, Node.js, and MySQL, ensuring scalable storage, real-time updates, and analytics dashboards.',
      techStack: ['TypeScript', 'Node.js', 'MySQL', 'IoT Sensors', 'React'],
      liveUrl: 'https://sibol-sprout-demo.com',
      githubUrl: 'https://github.com/jacelynk',
      images: [
        { src: new URL('/src/assets/img/SIBOL/Screenshot 2026-04-06 144959.png', import.meta.url).href, alt: 'SIBOL System Dashboard' },
        { src: new URL('/src/assets/img/SIBOL/Screenshot 2026-04-06 145015.png', import.meta.url).href, alt: 'SIBOL Energy Analytics' }
      ],
      details: [
        'IoT-based waste-to-energy conversion system',
        'Real-time monitoring and automation',
        'Data management with TypeScript and Node.js',
        'Analytics dashboards for energy outputs',
        'Interactive UI for waste metrics visualization'
      ],
      roles: ['Project Manager', 'Full-Stack Developer'],
      awards: ['Overall Study of the Year', 'Most Societal Impact', 'Best Presenter', 'Software Excellence', 'Design Distinction', 'Research Excellence']
    },
    learnQuake: {
      title: 'LearnQuake',
      description: 'Developed a web-based earthquake learning platform with interactive visualizations, enabling users to simulate and understand seismic events. Built with TypeScript, React, and D3.js for scalable, maintainable, and data-driven UI components.',
      techStack: ['TypeScript', 'React', 'D3.js', 'JavaScript', 'CSS'],
      liveUrl: 'https://learnquake-demo.com',
      githubUrl: 'https://github.com/jacelynk',
      images: [
        { src: new URL('/src/assets/img/LEARNQUAKE/Screenshot 2026-04-06 145144.png', import.meta.url).href, alt: 'LearnQuake Educational Dashboard' },
        { src: new URL('/src/assets/img/LEARNQUAKE/Screenshot 2026-04-06 145200.png', import.meta.url).href, alt: 'LearnQuake Seismic Visualization' },
        { src: new URL('/src/assets/img/LEARNQUAKE/Screenshot 2026-04-06 145222.png', import.meta.url).href, alt: 'LearnQuake Interactive Learning' },
        { src: new URL('/src/assets/img/LEARNQUAKE/Screenshot 2026-04-06 145235.png', import.meta.url).href, alt: 'LearnQuake Simulation Interface' }
      ],
      details: [
        'Web-based earthquake learning platform',
        'Interactive seismic event simulations',
        'Data-driven visualizations with D3.js',
        'Responsive educational UX design',
        'Scalable and maintainable codebase'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    },
    navigaze: {
      title: 'NaviGaze',
      description: 'Created an AR campus navigation mobile app integrating Unity and C#, providing immersive indoor navigation with interactive gamification elements. Managed project planning, front-end development, and UI/UX design for seamless AR experiences.',
      techStack: ['Unity', 'C#', 'AR SDK', 'Mobile Development', 'Game Design'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: [
        { src: new URL('/src/assets/img/NAVIGAZEE/Landing Page.png', import.meta.url).href, alt: 'NaviGaze Landing Page' },
        { src: new URL('/src/assets/img/NAVIGAZEE/AR.png', import.meta.url).href, alt: 'NaviGaze AR Navigation' },
        { src: new URL('/src/assets/img/NAVIGAZEE/CHOOSE LOCATION.png', import.meta.url).href, alt: 'NaviGaze Location Selection' },
        { src: new URL('/src/assets/img/NAVIGAZEE/ACHIEVEMENT Badges.png', import.meta.url).href, alt: 'NaviGaze Achievement System' },
        { src: new URL('/src/assets/img/NAVIGAZEE/STORE.png', import.meta.url).href, alt: 'NaviGaze Store Interface' },
        { src: new URL('/src/assets/img/NAVIGAZEE/LOG IN PAGE (Student).png', import.meta.url).href, alt: 'NaviGaze Student Login' }
      ],
      details: [
        'AR campus navigation mobile application',
        'Unity and C# integration',
        'Interactive gamification elements',
        'Location tracking and AR markers',
        'Immersive indoor navigation experience'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    },
    kopilism: {
      title: 'Kopilism Inventory Mobile App',
      description: 'Developed a Flutter-based inventory management system, streamlining item tracking and reporting. Reduced operational errors by 90% through real-time stock updates and intuitive UI design.',
      techStack: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Mobile UI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: [
        { src: new URL('/src/assets/img/KOPILISM MOBILE/Screenshot 2026-04-06 144141.png', import.meta.url).href, alt: 'Kopilism Main Dashboard' },
        { src: new URL('/src/assets/img/KOPILISM MOBILE/ORDER.png', import.meta.url).href, alt: 'Kopilism Order Management' },
        { src: new URL('/src/assets/img/KOPILISM MOBILE/ORDER HISTORY.png', import.meta.url).href, alt: 'Kopilism Order History' }
      ],
      details: [
        'Flutter-based inventory management system',
        'Real-time stock updates and tracking',
        'Intuitive mobile UI design',
        '90% reduction in operational errors',
        'Firebase/SQLite backend integration'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    },
    kExpress: {
      title: 'K-Express',
      description: 'Built a K-pop mini Wikipedia website, featuring artist profiles, discographies, and interactive content. Developed with HTML, CSS, and JavaScript with responsive design for desktop and mobile.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vercel'],
      liveUrl: 'https://k-express-demo.vercel.app',
      githubUrl: 'https://github.com/jacelynk',
      images: [
        { src: new URL('/src/assets/img/K-EXPRESS/Screenshot 2026-04-06 144735.png', import.meta.url).href, alt: 'K-Express Artist Profiles' },
        { src: new URL('/src/assets/img/K-EXPRESS/Screenshot 2026-04-06 144754.png', import.meta.url).href, alt: 'K-Express Discography Database' },
        { src: new URL('/src/assets/img/K-EXPRESS/Screenshot 2026-04-06 144828.png', import.meta.url).href, alt: 'K-Express Interactive Content' }
      ],
      details: [
        'K-pop mini Wikipedia platform',
        'Artist profiles and discographies',
        'Interactive content and features',
        'Responsive design for all devices',
        'Deployed on Vercel platform'
      ],
      roles: ['Project Manager', 'Full-Stack Developer']
    }
  };

  return (
    <div className="App">
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text animate-fadeInUp">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Jacelyn Caratao</span>
            </h1>
            <p className="hero-subtitle">
              Creative Technologist & Digital Problem Solver
            </p>
            <p className="hero-description">
              Computer Science graduate from University of Caloocan City. I specialize in digital graphics, front-end development, data-driven solutions, quality assurance, and artificial intelligence, with a passion for creating intuitive and impactful digital experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image animate-float">
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-image">
                  <img 
                    src={new URL('/src/assets/img/4abd1e1c-abdf-42e4-a0b6-d20f163c9356.jpg', import.meta.url).href}
                    alt="Jacelyn Caratao"
                    className="profile-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-initials" style={{display: 'none'}}>
                    JC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-glass">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technical and professional capabilities</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category card animate-fadeInUp">
              <h3 className="skill-category-title">Technical Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Dart</span>
                <span className="skill-tag">VB.NET</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">Visual Studio</span>
                <span className="skill-tag">Scene Builder</span>
                <span className="skill-tag">Nmap</span>
                <span className="skill-tag">VirtualBox</span>
                <span className="skill-tag">Notion</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Trello</span>
              </div>
            </div>
            <div className="skill-category card animate-fadeInUp">
              <h3 className="skill-category-title">Soft Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">Problem-solving</span>
                <span className="skill-tag">Communication & teamwork</span>
                <span className="skill-tag">Leadership & project management</span>
                <span className="skill-tag">Adaptability & learning</span>
                <span className="skill-tag">Attention to detail</span>
                <span className="skill-tag">Time management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Recent work I'm proud of</p>
          </div>
          <div className="projects-grid">
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/SIBOL/Screenshot 2026-04-06 144959.png', import.meta.url).href}
                  alt="SIBOL (Thesis) System Dashboard"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <BookOpen size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">SIBOL (Thesis)</h3>
                <p className="project-description">
                  Developed an IoT-based waste-to-energy system converting organic waste into biogas, integrating sensors for real-time monitoring and automation.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MySQL</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.sibol)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/LEARNQUAKE/Screenshot 2026-04-06 145144.png', import.meta.url).href}
                  alt="LearnQuake Educational Platform"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <BookOpen size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">LearnQuake</h3>
                <p className="project-description">
                  Developed a web-based earthquake learning platform with interactive visualizations, enabling users to simulate and understand seismic events.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">D3.js</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.learnQuake)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/NAVIGAZEE/Landing Page.png', import.meta.url).href}
                  alt="NaviGaze AR Navigation"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">NaviGaze</h3>
                <p className="project-description">
                  Created an AR campus navigation mobile app integrating Unity and C#, providing immersive indoor navigation with interactive gamification elements.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Unity</span>
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">AR SDK</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.navigaze)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/KOPILISM MOBILE/Screenshot 2026-04-06 144141.png', import.meta.url).href}
                  alt="Kopilism Inventory Mobile App"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Code size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Kopilism Inventory Mobile App</h3>
                <p className="project-description">
                  Developed a Flutter-based inventory management system, streamlining item tracking and reporting. Reduced operational errors by 90%.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Firebase</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.kopilism)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/K-EXPRESS/Screenshot 2026-04-06 144735.png', import.meta.url).href}
                  alt="K-Express K-pop Wikipedia"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Code size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">K-Express</h3>
                <p className="project-description">
                  Built a K-pop mini Wikipedia website, featuring artist profiles, discographies, and interactive content with responsive design.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.kExpress)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section id="graphic-design" className="section bg-glass">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Graphic Design</h2>
            <p className="section-subtitle">Creative visual design and branding work</p>
          </div>
          <div className="projects-grid">
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/PUBMATS/477795307_599504489535815_4134853758044529697_n.jpg', import.meta.url).href}
                  alt="Public Material Design"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Public Material Design</h3>
                <p className="project-description">
                  Educational material for public awareness campaigns and information dissemination
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Illustrator</span>
                  <span className="tech-tag">Canva</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/REBRANDING PUBMAT/NichBeauty - 1.png', import.meta.url).href}
                  alt="Brand Identity Design"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Brand Identity Design</h3>
                <p className="project-description">
                  Complete brand identity packages including logos, color schemes, and visual guidelines
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Adobe Illustrator</span>
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Figma</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/REBRANDING PUBMAT/RICELIST - 1.png', import.meta.url).href}
                  alt="Food Branding Design"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Food Branding Design</h3>
                <p className="project-description">
                  Food brand identity and packaging design with modern visual aesthetics
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Illustrator</span>
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Packaging Design</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/PUBMATS/479551984_599795016173429_1834415786648250914_n.jpg', import.meta.url).href}
                  alt="Information Design"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Information Design</h3>
                <p className="project-description">
                  Informative design for public information dissemination and educational content
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Canva</span>
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">InDesign</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/REBRANDING PUBMAT/NichBeauty - 12.png', import.meta.url).href}
                  alt="Beauty Brand Marketing"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Beauty Brand Marketing</h3>
                <p className="project-description">
                  Beauty brand marketing materials and promotional design campaigns
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Illustrator</span>
                  <span className="tech-tag">Social Media Design</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <img 
                  src={new URL('/src/assets/img/PUBMATS/480425338_602508819235382_8819091173576993842_n.jpg', import.meta.url).href}
                  alt="Campaign Materials"
                  className="design-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Campaign Materials</h3>
                <p className="project-description">
                  Campaign design for community engagement and public awareness initiatives
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Campaign Design</span>
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Canva</span>
                </div>
                <div className="project-links">
                  <Link to="/graphic-design" className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 animate-fadeInUp">
            <Link to="/graphic-design" className="btn btn-primary btn-lg">
              See More Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Involvement Section */}
      <section id="campus" className="section bg-glass">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Campus Involvement</h2>
            <p className="section-subtitle">Active participation in tech community</p>
          </div>
          <div className="involvement-grid">
            <div className="involvement-card card animate-fadeInUp">
              <h3 className="involvement-title">Skills Developed</h3>
              <ul className="involvement-list">
                <li>Leadership & Team Management</li>
                <li>Public Speaking & Presentation</li>
                <li>Project Coordination</li>
                <li>Technical Problem Solving</li>
              </ul>
            </div>
            <div className="involvement-card card animate-fadeInUp">
              <h3 className="involvement-title">Subjects Taken</h3>
              <ul className="involvement-list">
                <li>Data Structures & Algorithms</li>
                <li>Web Development</li>
                <li>Database Management</li>
                <li>Software Engineering</li>
              </ul>
            </div>
            <div className="involvement-card card animate-fadeInUp">
              <h3 className="involvement-title">Organizations</h3>
              <ul className="involvement-list">
                <li><strong>Computer Science Society</strong> - Active Member</li>
                <li><strong>Web Development Club</strong> - Core Developer</li>
                <li><strong>Design Thinking Group</strong> - UI/UX Lead</li>
                <li><strong>Campus Tech Innovators</strong> - Project Coordinator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's create something amazing together</p>
          </div>
          <div className="contact-content">
            <div className="contact-info card animate-fadeInUp">
              <h3>Let's Connect</h3>
              <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
              <div className="contact-links">
                <a href="mailto:jacelyncaratao145@gmail.com" className="contact-link">
                  <Mail size={20} />
                  jacelyncaratao145@gmail.com
                </a>
                <a href="https://github.com/jacelynk" className="contact-link">
                  <Github size={20} />
                  github.com/jacelynk
                </a>
                <a href="https://www.linkedin.com/in/jacelyncaratao" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  linkedin.com/in/jacelyncaratao
                </a>
              </div>
              <button className="btn mt-3">Download Resume</button>
            </div>
            <div className="contact-form card animate-fadeInUp">
              <h3>Send a Message</h3>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Jacelyn Caratao. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/jacelynk"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/jacelyncaratao"><Linkedin size={20} /></a>
              <a href="mailto:jacelyncaratao145@gmail.com"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modal */}
      <Modal 
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedProject?.title}
        description={selectedProject?.description}
        techStack={selectedProject?.techStack}
        liveUrl={selectedProject?.liveUrl}
        githubUrl={selectedProject?.githubUrl}
        images={selectedProject?.images}
        details={selectedProject?.details}
        awards={selectedProject?.awards}
      />
    </div>
  );
}

export default Portfolio;
