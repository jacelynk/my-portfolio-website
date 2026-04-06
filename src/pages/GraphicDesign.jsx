import { useState } from 'react';
import Navbar from '../components/Navbar';
import DesignHeader from '../components/graphic-design/DesignHeader';
import DesignTabs from '../components/graphic-design/DesignTabs';
import DesignGrid from '../components/graphic-design/DesignGrid';
import ImageModal from '../components/graphic-design/ImageModal';
import DesignFooter from '../components/graphic-design/DesignFooter';
import { publicMaterials, businessBranding } from '../components/graphic-design/DesignData';
import '../styles/global.css';
import './GraphicDesign.css';

const GraphicDesign = () => {
  const [activeTab, setActiveTab] = useState('public');
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const currentDesigns = activeTab === 'public' ? publicMaterials : businessBranding;

  return (
    <div className="graphic-design-page">
      <Navbar scrolled={true} activeSection="graphic-design" />
      
      <DesignHeader />
      <DesignTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <DesignGrid designs={currentDesigns} openImageModal={openImageModal} />
      <ImageModal selectedImage={selectedImage} closeImageModal={closeImageModal} />
      <DesignFooter />
    </div>
  );
};

export default GraphicDesign;
