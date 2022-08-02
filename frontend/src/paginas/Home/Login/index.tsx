import React from 'react';
import Banner from '../../../componentes/includes/Banner';
import NavBar from '../../../componentes/includes/NavBar';
import Login from '../../../componentes/Home/Login';

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <div className="container py-4">
                <Login />
            </div>
        </>
    );
}

export default App;

