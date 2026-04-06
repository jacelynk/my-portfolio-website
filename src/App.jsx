import './styles/global.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import GraphicDesign from './pages/GraphicDesign';
import Portfolio from './components/Portfolio';

function App() {
  const projectData = {
    kWiki: {
      title: 'K-WIKI',
      description: 'A Korean Pop (K-POP) Wikipedia platform designed to organize and present comprehensive information about artists, groups, and industry trends through a clean and user-friendly interface.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['K-POP Wikipedia Interface', 'Artist Profile', 'Group Profile'],
      details: [
        'Clean and user-friendly interface',
        'Comprehensive information about K-POP artists and groups',
        'Real-time updates and data synchronization',
        'Search functionality and filtering',
        'Responsive design for mobile and desktop'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    },
    navigaze: {
      title: 'Navigaze',
      description: 'An indoor navigation mobile application developed using Unity, integrating augmented reality and game-based elements to create an interactive and immersive user experience.',
      techStack: ['Unity', 'C#', 'AR SDK'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['AR Navigation Interface', 'Game Elements', 'Mobile View'],
      details: [
        'Augmented reality integration',
        'Game-based navigation elements',
        'Interactive and immersive UX',
        'Indoor positioning system',
        'Mobile-optimized design'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    },
    kopilism: {
      title: 'Kopilism',
      description: 'An inventory management system developed for Kopilism Co., aimed at streamlining product tracking, managing stock levels, and improving business operations.',
      techStack: ['React', 'Node.js', 'MySQL', 'Express', 'REST API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Inventory Dashboard', 'Stock Management', 'Analytics'],
      details: [
        'Real-time inventory tracking',
        'Stock level management',
        'Business operation optimization',
        'Analytics and reporting',
        'User-friendly admin interface'
      ],
      roles: ['Project Manager', 'System Analyst', 'Front-End Developer']
    },
    learnQuake: {
      title: 'LearnQuake',
      description: 'An earthquake information website that provides educational content, safety guidelines, and accessible data related to seismic activities.',
      techStack: ['React', 'JavaScript', 'API Integration', 'Data Visualization', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['Educational Dashboard', 'Safety Guidelines', 'Seismic Data'],
      details: [
        'Educational content delivery',
        'Safety guidelines and protocols',
        'Real-time seismic data',
        'Data visualization',
        'Accessible information design'
      ],
      roles: ['Project Manager', 'Front-End Developer', 'Researcher']
    },
    sibol: {
      title: 'SIBOL (Thesis Project)',
      description: 'A smart anaerobic digestion system that integrates IoT and AI-driven monitoring to convert biodegradable waste into renewable energy efficiently.',
      techStack: ['Python', 'IoT Sensors', 'Machine Learning', 'Data Analytics', 'React'],
      liveUrl: '#',
      githubUrl: 'https://github.com/jacelynk',
      images: ['System Dashboard', 'IoT Monitoring', 'Energy Analytics'],
      details: [
        'IoT sensor integration',
        'AI-driven monitoring system',
        'Biodegradable waste processing',
        'Renewable energy conversion',
        'Real-time data analytics'
      ],
      roles: ['Project Manager', 'Front-End Developer']
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </div>
  );
}

export default App;
