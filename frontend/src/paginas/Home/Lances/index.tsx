import React from 'react';
import Banner from '../../../componentes/includes/Banner';
import NavBar from '../../../componentes/includes/NavBar';
import Lances from '../../../componentes/Home/Lances';

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <div className="container py-4">
                <Lances />
            </div>
        </>
    );
}

export default App;

