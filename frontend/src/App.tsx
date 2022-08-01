import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Ofertas from './paginas/Adm/Ofertas';
import Empresas from './paginas/Adm/Empresas';
import Lances from './paginas/Adm/Lances';
import BaseAdm from './paginas/Adm/BaseAdm';
import LancesUser from './paginas/Home/Lances';
import OfertasUser from './paginas/Home/Ofertas';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lances" element={<LancesUser />} />
      <Route path="/ofertas" element={<OfertasUser />} />


      <Route path='/adm' element={<BaseAdm />}>
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="empresas" element={<Empresas />} />
        <Route path="lances" element={<Lances />} />
      </Route>


    </Routes>
  );
}

export default App;
