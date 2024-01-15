import { useState, useEffect } from 'react';

// Example function to fetch initial data from an API
const fetchDataFromAPI = async () => {
  try {
    // Your API fetch logic here
    // Example: const response = await fetch('your-api-endpoint');
    // Example: const data = await response.json();
    // Return the data or modify as needed
    return [];
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors or return default data
    return [];
  }
};

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],  // Placeholder for your actual state structure
    favPhotoIds: [],
    selectedPhoto: null,
    // Add other state properties as needed
  });

  useEffect(() => {
    // Fetch initial data when the component mounts
    const fetchData = async () => {
      const initialData = await fetchDataFromAPI();
      setState((prev) => ({ ...prev, photos: initialData }));
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favPhotoIds: prev.favPhotoIds.includes(photoId)
        ? prev.favPhotoIds.filter((id) => id !== photoId)
        : [...prev.favPhotoIds, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, selectedPhoto: null }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    // Add other actions as needed
  };
};

export default useApplicationData;
