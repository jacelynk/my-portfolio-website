import DesignCard from './DesignCard';

const DesignGrid = ({ designs, openImageModal }) => {
  return (
    <section className="design-showcase">
      <div className="container">
        <div className="design-grid">
          {designs.map((design) => (
            <DesignCard 
              key={design.id} 
              design={design} 
              openImageModal={openImageModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGrid;
