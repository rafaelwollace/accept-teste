import React from 'react';
import Banner from '../../componentes/includes/Banner';
import NavBar from '../../componentes/includes/NavBar';
import Home from '../../componentes/Home';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container py-4">
        <Home />
      </div>
    </>
  );
}

export default App;
