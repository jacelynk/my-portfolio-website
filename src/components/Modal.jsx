import { X, ExternalLink, Github } from 'lucide-react';
import '../styles/Modal.css';

function Modal({ isOpen, onClose, title, description, techStack, liveUrl, githubUrl, images, details, roles, awards }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          {images && images.length > 0 && (
            <div className="modal-images">
              {images.map((image, index) => (
                <div key={index} className="modal-image-item">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="modal-project-image"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${image.alt}/400/300.jpg`;
                    }}
                  />
                  <div className="image-caption">{image.alt}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="modal-description">
            <h3>Project Overview</h3>
            <p>{description}</p>
            
            {roles && (
              <div className="modal-roles">
                <h3>Roles</h3>
                <div className="roles-list">
                  {roles.map((role, index) => (
                    <span key={index} className="role-tag">{role}</span>
                  ))}
                </div>
              </div>
            )}
            
            {details && (
              <div className="modal-details">
                <h3>Key Features</h3>
                <ul>
                  {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {awards && (
              <div className="modal-awards">
                <h3>Awards & Recognition</h3>
                <div className="awards-list">
                  {awards.map((award, index) => (
                    <span key={index} className="award-tag">{award}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          {liveUrl && (
            <a href={liveUrl} className="btn" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
