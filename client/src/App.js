import React from 'react';
import Homepage from './pages/Homepage';
import { CarProvider } from './utils/Context/CarContext';
import { PageProvider } from './utils/Context/PageContext';
import { OfflotProvider } from './utils/Context/OffLotContext';



function App() {
  
  return (
    <PageProvider>
    <CarProvider>
      <OfflotProvider>
    <div className="App">
      <Homepage/>
    </div>
    </OfflotProvider>
    </CarProvider>
    </PageProvider>
  );
}

export default App;
