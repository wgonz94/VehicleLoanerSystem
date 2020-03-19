import React from 'react';
import Homepage from './pages/Homepage';
import { CarProvider } from './utils/CarContext';
// import Signin from './pages/Sign-In/signin';




function App() {
  return (
    <CarProvider>
    <div className="App">
      <Homepage />
    </div>
    </CarProvider>
  );
}

export default App;
