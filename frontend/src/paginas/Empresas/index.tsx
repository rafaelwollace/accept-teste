import React from 'react';
import Banner from '../../componentes/includes/Banner';
import Empresas from '../../componentes/Empresas';
import NavBar from '../../componentes/includes/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container py-3">
        <Empresas />
      </div>
 
    </>
  );
}

export default App;
