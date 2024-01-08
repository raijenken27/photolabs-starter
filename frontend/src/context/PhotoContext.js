// PhotoContext.js
import React, { createContext, useContext, useReducer } from 'react';

const PhotoContext = createContext();

const initialState = {
  likedPhotos: [], // An array to store liked photo IDs
};

const photoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return {
        ...state,
        likedPhotos: state.likedPhotos.includes(action.payload)
          ? state.likedPhotos.filter((id) => id !== action.payload)
          : [...state.likedPhotos, action.payload],
      };
    default:
      return state;
  }
};

const PhotoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(photoReducer, initialState);

  return (
    <PhotoContext.Provider value={{ state, dispatch }}>{children}</PhotoContext.Provider>
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
