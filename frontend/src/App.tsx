import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Ofertas from './paginas/Ofertas';
import Empresas from './paginas/Empresas';
import Lances from './paginas/Lances';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/empresas" element={<Empresas />} />
      <Route path="/lances" element={<Lances />} />
    </Routes>
  );
}

export default App;
