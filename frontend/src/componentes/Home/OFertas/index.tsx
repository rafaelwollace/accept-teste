import { useEffect, useState } from 'react';
import IOfertas from '../../../interfaces/IOfertas';
import { Link } from 'react-router-dom';
import http from "../../../http"


const ListaOfertas = () => {

    const [ofertas, setOfertas] = useState<IOfertas[]>([])


    useEffect(() => {
        http.get<IOfertas[]>('ofertas').then(result => {
            setOfertas(result.data);
        })
    }, []);


    return (
        <div className="col-12 col-md-12 py-3">
            <div className="card rounded shadow">
                <div className="card-header">
                    <h4 className="text-center">OFERTAS</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th className="text-center">Oferta</th>
                                    <th className="text-center">Empresa</th>
                                    <th className="text-center">Descrição</th>
                                    <th className="text-center">Valor</th>
                                    <th className="text-center">Quantidade</th>
                                    <th className="text-center">Endereço de Saída</th>
                                    <th className="text-center">Endereço de Entrega</th>
                                    <th className="text-center">Arrematar ?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ofertas.map(ofertas => (

                                        <tr key={ofertas.id}>
                                            <td className="text-center">{ofertas.oferta}</td>
                                            <td className="text-center">{ofertas.Empresa.nome}</td>
                                            <td className="text-center">{ofertas.descricao}</td>
                                            <td className="text-center">R$:{ofertas.valor}</td>
                                            <td className="text-center">{ofertas.quantidade}</td>
                                            <td className="text-center">{ofertas.saida}</td>
                                            <td className="text-center">{ofertas.entrega}</td>

                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <Link to={`/lances/${ofertas.id}`} className="btn btn-success">
                                                        <i className="fa fa-gavel"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaOfertas;