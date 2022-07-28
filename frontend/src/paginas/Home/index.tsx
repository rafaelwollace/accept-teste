import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../componentes/includes/Banner';
import NavBar from '../../componentes/includes/NavBar';
import Rodape from '../../componentes/includes/Rodape';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Rodape />
    </>
  );
}

export default App;
