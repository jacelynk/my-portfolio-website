import './styles/global.css';
import Navbar from './components/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Award, BookOpen } from 'lucide-react';
import Modal from './components/Modal';

function App() {
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

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const projectData = {
    wiki: {
      title: 'KWIKI',
      description: 'Knowledge management system designed for efficient information sharing and collaboration. This platform enables teams to create, organize, and share knowledge seamlessly.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Dashboard View', 'Document Editor', 'Search Interface'],
      details: [
        'Real-time collaboration features',
        'Advanced search and filtering',
        'Document version control',
        'User permission management',
        'Responsive design for all devices'
      ]
    },
    sibol: {
      title: 'SIBOL (Thesis)',
      description: 'Academic thesis project focusing on innovative educational technology solutions to enhance learning experiences through digital platforms.',
      techStack: ['Vue.js', 'Express', 'MySQL', 'Socket.io', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Learning Dashboard', 'Progress Tracking', 'Interactive Modules'],
      details: [
        'Interactive learning modules',
        'Progress tracking and analytics',
        'Gamification elements',
        'Real-time student-teacher interaction',
        'Comprehensive reporting system'
      ]
    },
    navigaze: {
      title: 'Navigaze',
      description: 'Navigation and mapping application with intuitive user interface and real-time features for seamless location-based services.',
      techStack: ['JavaScript', 'Map API', 'CSS', 'Geolocation API', 'PWA'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Map Interface', 'Route Planning', 'Location Details'],
      details: [
        'Real-time navigation',
        'Offline mode support',
        'Custom route planning',
        'Points of interest integration',
        'Voice navigation assistance'
      ]
    },
    learnQuake: {
      title: 'Learn Quake',
      description: 'Educational platform designed to make learning interactive and engaging through gamification elements and adaptive learning paths.',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Game API', 'WebRTC'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Game Interface', 'Leaderboard', 'Learning Paths'],
      details: [
        'Adaptive learning algorithms',
        'Multiplayer learning games',
        'Achievement system',
        'Progress analytics',
        'Live study sessions'
      ]
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
              UI/UX Developer & Graphic Artist
            </p>
            <p className="hero-description">
              Passionate UI/UX Developer & Graphic Artist creating beautiful, functional digital experiences with modern design and development expertise
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
            <div className="profile-card">
              <div className="profile-img-placeholder">
                <div className="profile-initials">JC</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          <div className="about-content">
            <div className="about-text card animate-fadeInUp">
              <h3 className="text-primary">UI/UX Developer & Graphic Artist</h3>
              <p>
                Passionate developer and designer with strong foundations in programming and UI/UX design. 
                I create intuitive digital experiences that combine functionality with aesthetic appeal.
              </p>
              <p>
                Actively involved in tech organizations and eager to apply problem-solving and teamwork skills 
                in professional environments.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Coding</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
            <div className="about-highlights">
              <div className="highlight-card card animate-fadeInUp">
                <Code className="highlight-icon" />
                <h4>Development</h4>
                <p>Full-stack development with modern frameworks and best practices</p>
              </div>
              <div className="highlight-card card animate-fadeInUp">
                <Palette className="highlight-icon" />
                <h4>Design</h4>
                <p>UI/UX design focused on user experience and visual aesthetics</p>
              </div>
              <div className="highlight-card card animate-fadeInUp">
                <Award className="highlight-icon" />
                <h4>Achievements</h4>
                <p>Campus involvement and continuous learning in tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-glass">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category card animate-fadeInUp">
              <h3 className="skill-category-title">Frontend Development</h3>
              <div className="skill-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Vue.js</span>
              </div>
            </div>
            <div className="skill-category card animate-fadeInUp">
              <h3 className="skill-category-title">UI/UX Design</h3>
              <div className="skill-list">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe XD</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">Illustrator</span>
                <span className="skill-tag">Prototyping</span>
              </div>
            </div>
            <div className="skill-category card animate-fadeInUp">
              <h3 className="skill-category-title">Backend & Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">VS Code</span>
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
                <div className="project-placeholder">
                  <Code size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">KWIKI</h3>
                <p className="project-description">
                  Knowledge management system designed for efficient information sharing and collaboration
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.wiki)} className="project-link see-more-btn">
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
                <div className="project-placeholder">
                  <BookOpen size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">SIBOL (Thesis)</h3>
                <p className="project-description">
                  Academic thesis project focusing on innovative educational technology solutions
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MySQL</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.sibol)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Research
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <div className="project-placeholder">
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Navigaze</h3>
                <p className="project-description">
                  Navigation and mapping application with intuitive user interface and real-time features
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Map API</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <button onClick={() => openModal(projectData.navigaze)} className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                  <a href="https://github.com/jacelynk" className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <div className="project-placeholder">
                  <Code size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Learn Quake</h3>
                <p className="project-description">
                  Educational platform designed to make learning interactive and engaging through gamification
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Tailwind CSS</span>
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
                <div className="project-placeholder">
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
                  <button className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See More
                  </button>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <div className="project-placeholder">
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">UI/UX Design Projects</h3>
                <p className="project-description">
                  User interface designs for web and mobile applications with focus on user experience
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">Adobe XD</span>
                  <span className="tech-tag">Prototyping</span>
                </div>
                <div className="project-links">
                  <button className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    See Designs
                  </button>
                </div>
              </div>
            </div>
            <div className="project-card card animate-fadeInUp">
              <div className="project-image">
                <div className="project-placeholder">
                  <Palette size={48} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Digital Illustrations</h3>
                <p className="project-description">
                  Custom digital artwork and illustrations for various creative projects and clients
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Adobe Photoshop</span>
                  <span className="tech-tag">Illustrator</span>
                  <span className="tech-tag">Procreate</span>
                </div>
                <div className="project-links">
                  <button className="project-link see-more-btn">
                    <ExternalLink size={16} />
                    Gallery
                  </button>
                </div>
              </div>
            </div>
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
      />
    </div>
  );
}

export default App;
