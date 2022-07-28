import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Ofertas from './paginas/Ofertas';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
    </Routes>
  );
}

export default App;
