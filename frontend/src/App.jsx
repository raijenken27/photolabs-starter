import React from 'react';
import { PhotoProvider } from './path-to-your/PhotoContext';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';  // Update the path accordingly
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <PhotoProvider>
      <div className="App">
        {/* Pass the state and actions to your components as needed */}
        <HomeRoute
          state={state}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
        {/* Additional components can be added here */}
      </div>
    </PhotoProvider>
  );
};

export default App;
