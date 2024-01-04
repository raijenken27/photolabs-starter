import React from 'react';
import { PhotoProvider } from './path-to-your/PhotoContext';
import HomeRoute from './components/HomeRoute';
import './App.scss';

const App = () => {
  return (
    <PhotoProvider>
      <div className="App">
        <HomeRoute />
      </div>
    </PhotoProvider>
  );
};

export default App;