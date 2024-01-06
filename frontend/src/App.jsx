import React, { useState } from 'react';
import { PhotoProvider } from './path-to-your/PhotoContext';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePhotoClick = () => {
    // Logic to handle photo click and open the modal
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // Logic to handle modal close
    setModalOpen(false);
  };

  return (
    <PhotoProvider>
      <div className="App">
        {/* Your existing code for rendering photos */}
        <img src="your-photo-url.jpg" alt="Photo" onClick={handlePhotoClick} />

        {/* Render the modal */}
        <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />

        {/* Include HomeRoute component */}
        <HomeRoute />
      </div>
    </PhotoProvider>
  );
};

export default App;
