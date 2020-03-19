import React from 'react';
import Homepage from './pages/Homepage';
import { CarProvider } from './utils/CarContext';
import { PageProvider } from './utils/PageContext';



function App() {
  
  return (
    <PageProvider>
    <CarProvider>
    <div className="App">
      <Homepage/>
    </div>
    </CarProvider>
    </PageProvider>
  );
}

export default App;
