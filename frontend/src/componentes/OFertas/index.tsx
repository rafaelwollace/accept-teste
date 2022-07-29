import axios from 'axios';
import { useEffect, useState } from 'react';
import IOfertas from '../../interfaces/IOfertas';
import { Link } from 'react-router-dom';
import IEmpresas from '../../interfaces/IEmpresas';

const ListaOfertas = () => {

  const [ofertas, setOfertas] = useState<IOfertas[]>([])
  

  useEffect(() => {
    axios.get('http://localhost:3000/api/ofertas').then(result => {
        setOfertas(result.data);
        console.log(result.data);
    })
}, []);


return (
    
    <table className="table table-striped table-bordered">
        <thead className="thead-dark">
            <tr>
                <th className="text-center">Oferta</th>
                <th className="text-center">Descrição</th>
                <th className="text-center">Valor</th>
                <th className="text-center">Quantidade</th>
                <th className="text-center">Endereço de Saída</th>
                <th className="text-center">Endereço de Entrega</th>
                <th className="text-center">Empresa</th>
                <th className="text-center">Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                ofertas.map(ofertas => (
                   
                    <tr key={ofertas.id}>
                        <td className="text-center">{ofertas.oferta}</td>
                        <td className="text-center">{ofertas.descricao}</td>
                        <td className="text-center">R$:{ofertas.valor}</td>
                        <td className="text-center">{ofertas.quantidade}</td>
                        <td className="text-center">{ofertas.saida}</td>
                        <td className="text-center">{ofertas.entrega}</td>
                        <td className="text-center">
                        
                        </td>

                    
                        <td className="text-center">
                            <div className="btn-group">
                                <Link to={`/edit/${ofertas.id}`} className="btn btn-primary">
                                    <i className="fa fa-edit"></i>
                                </Link>
                                <Link to={`/details/${ofertas.id}`} className="btn btn-secondary">
                                    <i className="fa fa-eye"></i>
                                </Link>
                                <Link to={`/delete/${ofertas.id}`} className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);
}

export default ListaOfertas;