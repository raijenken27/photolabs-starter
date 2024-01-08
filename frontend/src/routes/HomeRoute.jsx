import React, { useState } from 'react';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import { usePhotoContext } from '../path-to-your/PhotoContext'; // Adjust the path

const HomeRoute = () => {
  const { state, dispatch } = usePhotoContext();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  return (
    <div className="home-route">
      {/* Render your list of photos */}
      <PhotoListItem onClick={handlePhotoClick} />

      {/* Render the modal */}
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        photo={selectedPhoto}
        onToggleLike={(photoId) =>
          dispatch({ type: 'TOGGLE_LIKE', payload: photoId })
        }
      />
    </div>
  );
};

export default HomeRoute;
