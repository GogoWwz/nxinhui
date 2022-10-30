import React from 'react';
import Pc from './Pc';
import Mobile from './Mobile';

function App() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  return (
    <div className="App">
     {
       isMobile ? <Mobile /> : <Pc />
     }
    </div>
  );
}

export default App;
