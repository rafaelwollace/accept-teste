import React from 'react';
import Banner from '../../componentes/includes/Banner';
import Ofertas from '../../componentes/OFertas';
import NavBar from '../../componentes/includes/NavBar';
import Rodape from '../../componentes/includes/Rodape';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container">
        <Ofertas />
      </div>
 
    </>
  );
}

export default App;
