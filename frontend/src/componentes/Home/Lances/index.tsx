import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ILances from '../../../interfaces/ILances';
import http from "../../../http"


const ListaLances = () => {

    const [lances, setLances] = useState<ILances[]>([])
    useEffect(() => {
        http.get<ILances[]>('lances').then(result => {
            setLances(result.data);
        })
    }, []);



    return (

        <div className="col-12 col-md-12 py-3">
            <div className="card rounded shadow">
                <div className="card-header">
                    <h4 className="text-center">LANCES</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Oferta</th>
                                    <th className="text-center">Valor</th>
                                    <th className="text-center">Volume</th>
                                    <th className="text-center">Data</th>
                                    <th className="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lances.map(lances => (

                                        <tr key={lances.id}>
                                            <td className="text-center">{lances.id}</td>
                                            <td className="text-center">
                                                {lances.Oferta.oferta}
                                            </td>
                                            <td className="text-center">R$:{lances.valor}</td>
                                            <td className="text-center">{lances.volume}</td>
                                            <td className="text-center">{lances.data}</td>
                                            <td className="text-center">{lances.status === '1' ? <span className="badge bg-success">Arrematado</span> : <span className="badge bg-warning">Ofertado</span>}</td>
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
export default ListaLances;