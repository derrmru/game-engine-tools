import React from 'react';
import Bounce from './components/Bounce/Bounce';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Bounce 
        width="40"
        height="80"
        />
    </div>
  );
}

export default App;
