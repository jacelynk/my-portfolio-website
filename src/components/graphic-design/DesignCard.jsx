import { Eye } from 'lucide-react';

const DesignCard = ({ design, openImageModal }) => {
  return (
    <div className="design-card">
      <div className="design-image-container">
        <img 
          src={design.src} 
          alt={design.title}
          className="design-image"
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/design${design.id}/400/300.jpg`;
          }}
        />
        <div className="design-overlay">
          <button 
            className="view-btn"
            onClick={() => openImageModal(design)}
          >
            <Eye size={20} />
            View Full Size
          </button>
        </div>
      </div>
      <div className="design-info">
        <h3 className="design-title">{design.title}</h3>
        <p className="design-category">{design.category}</p>
        <p className="design-description">{design.description}</p>
      </div>
    </div>
  );
};

export default DesignCard;
