import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo, onToggleLike }) => {
  useEffect(() => {
    // Log the details when the modal is opened
    if (isOpen && photo) {
      console.log('Selected Photo Details:', photo);
    }
  }, [isOpen, photo]);

  const handleLikeClick = () => {
    // Handle like button click and toggle the like in the context
    onToggleLike(photo.id);
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {/* ... rest of the modal content ... */}
        <button onClick={handleLikeClick}>Toggle Like</button>
      </div>
    </div>
  ) : null;
};

PhotoDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photo: PropTypes.object,
  onToggleLike: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
