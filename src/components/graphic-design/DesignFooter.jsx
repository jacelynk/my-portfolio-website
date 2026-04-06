import { Github, Linkedin, Mail } from 'lucide-react';

const DesignFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Jacelyn Caratao. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/jacelynk" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jacelyncaratao" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jacelyncaratao145@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesignFooter;
