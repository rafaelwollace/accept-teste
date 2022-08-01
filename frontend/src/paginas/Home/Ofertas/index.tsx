import React from 'react';
import Banner from '../../../componentes/includes/Banner';
import NavBar from '../../../componentes/includes/NavBar';
import Ofertas from '../../../componentes/Home/OFertas';

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <div className="container py-4">
                <Ofertas />
            </div>
        </>
    );
}

export default App;

