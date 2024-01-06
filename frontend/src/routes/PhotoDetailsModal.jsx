import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {
  return (
    <div className={`photo-details-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* Add your content for displaying larger photo and information */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;