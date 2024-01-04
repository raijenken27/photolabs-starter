import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const likePhoto = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
  };

  const unlikePhoto = (photoId) => {
    setLikedPhotos((prevLikedPhotos) =>
      prevLikedPhotos.filter((id) => id !== photoId)
    );
  };

  return (
    <PhotoContext.Provider value={{ likedPhotos, likePhoto, unlikePhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};

export { PhotoProvider, usePhotoContext };