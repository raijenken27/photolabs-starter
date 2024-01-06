import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {
  // Conditionally render the modal based on the 'isOpen' prop
  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          X
        </button>

        {/* Content of the modal */}
        <div className="modal-content">
          {/* Add your content here (e.g., larger version of the photo, similar photos) */}
          <p>Modal Content Goes Here</p>
        </div>
      </div>
    </div>
  ) : null;
};

PhotoDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
