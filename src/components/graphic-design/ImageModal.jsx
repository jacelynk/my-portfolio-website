import { X } from 'lucide-react';

const ImageModal = ({ selectedImage, closeImageModal }) => {
  if (!selectedImage) return null;

  return (
    <div className="image-modal" onClick={closeImageModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeImageModal}>
          <X size={24} />
        </button>
        <div className="modal-image-container">
          <img 
            src={selectedImage.src} 
            alt={selectedImage.title}
            className="modal-image"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
        <div className="modal-info">
          <h3>{selectedImage.title}</h3>
          <p className="modal-category">{selectedImage.category}</p>
          <p>{selectedImage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
