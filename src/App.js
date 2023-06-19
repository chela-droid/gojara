import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <h1>My Video Player</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;