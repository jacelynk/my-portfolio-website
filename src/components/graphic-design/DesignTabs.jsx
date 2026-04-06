import { Palette, Briefcase } from 'lucide-react';

const DesignTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className="tabs-section">
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'public' ? 'active' : ''}`}
            onClick={() => setActiveTab('public')}
          >
            <Palette size={20} />
            Public Material
          </button>
          <button
            className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            <Briefcase size={20} />
            Business Branding
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignTabs;
