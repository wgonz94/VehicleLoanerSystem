import React from 'react';
import Homepage from './pages/Homepage';
import { CarProvider } from './utils/CarContext';
import { PageProvider } from './utils/PageContext';
import { OfflotProvider } from './utils/OffLotContext';



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
