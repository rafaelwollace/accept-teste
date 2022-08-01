import React from 'react';
import Banner from '../../componentes/includes/Banner';
import Lances from '../../componentes/Lances';
import NavBar from '../../componentes/includes/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container py-3">
        <Lances />
      </div>
 
    </>
  );
}

export default App;
