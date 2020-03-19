import React, { useContext } from 'react';
import Homepage from './pages/Homepage';
import { CarProvider } from './utils/CarContext';





function App() {
  
  return (
    <CarProvider>
    <div className="App">
      <Homepage/>
    </div>
    </CarProvider>
  );
}

export default App;
