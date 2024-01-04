import React, { createContext, useContext, useState } from 'react';

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const addFavoritedPhoto = (photoId) => {
    setFavoritedPhotos((prevPhotos) => [...prevPhotos, photoId]);
  };

  return (
    <PhotoContext.Provider value={{ favoritedPhotos, addFavoritedPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};