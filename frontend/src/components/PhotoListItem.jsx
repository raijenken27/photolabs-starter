import React from 'react';
import PhotoListItem from './components/PhotoListItem';

const App = () => {
  // Dummy data for three photos
  const photosData = [
    {
      id: "1",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    // Repeat similar data for other two photos
    // ...
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
