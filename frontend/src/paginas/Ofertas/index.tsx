import React from 'react';
import Banner from '../../componentes/includes/Banner';
import Ofertas from '../../componentes/OFertas';
import NavBar from '../../componentes/includes/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container py-3">
        <Ofertas />
      </div>
 
    </>
  );
}

export default App;
