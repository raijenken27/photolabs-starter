import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  // Dummy data for three photos
  const photosData = [
    // ... (your data)
  ];

  return (
    <div className="App">
      {/* Use map to dynamically render PhotoListItem components */}
      {photosData.map((photo) => (
        <PhotoListItem key={photo.id} {...photo} />
      ))}
    </div>
  );
};

export default App;