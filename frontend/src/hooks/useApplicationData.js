import { useReducer, useEffect } from 'react';

// Action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter((photo) => photo.id !== action.payload.id),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayPhotoDetails: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Initial state
const initialState = {
  photos: [],
  topics: [],
  favoritePhotos: [],
  selectedPhoto: null,
  displayPhotoDetails: false,
};

// Custom Hook
function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Simulate fetching data (replace with your actual fetch logic)
  useEffect(() => {
    // Fetch photo data
    const fetchPhotoData = async () => {
      // Replace with actual API call
      const photoData = await fetch('https://api.example.com/photos');
      const photos = await photoData.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
    };

    // Fetch topic data
    const fetchTopicData = async () => {
      // Replace with actual API call
      const topicData = await fetch('https://api.example.com/topics');
      const topics = await topicData.json();
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
    };

    // Call the fetch functions
    fetchPhotoData();
    fetchTopicData();
  }, []); // Ensure this runs only once on mount

  // Other functions and logic as needed

  return {
    state,
    dispatch,
    // ... (other values or functions)
  };
}

export default useApplicationData;
