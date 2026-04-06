import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignHeader = () => {
  return (
    <header className="page-header-simple">
      <Link to="/" className="back-btn">
        <ArrowLeft size={20} />
        Back to Portfolio
      </Link>
    </header>
  );
};

export default DesignHeader;
