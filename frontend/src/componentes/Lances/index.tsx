import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ILances from '../../interfaces/ILances';


const ListaLances = () => {

    const [lances, setLances] = useState<ILances[]>([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/lances').then(result => {
            setLances(result.data);
        })
    }, []);


    return (

        <div className="col-12 col-md-12 py-3">
            <div className="card rounded shadow">
                <div className="card-header">
                    <h4 className="text-center">LANCES</h4>
                    <div className="position-relative">
                        <div className="position-absolute top-0 end-0">
                            <button className="btn btn-success">
                                <i className='fas fa-plus-circle'></i><span> CADASTRAR</span>
                            </button>
                        </div>
                    </div>
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
                                    <th className="text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lances.map(lances => (

                                        <tr key={lances.id}>
                                            <td className="text-center">{lances.id}</td>
                                            <td className="text-center">
             
                                            </td>
                                            <td className="text-center">R$:{lances.valor}</td>
                                            <td className="text-center">{lances.volume}</td>
                                            <td className="text-center">{lances.data}</td>
                                            <td className="text-center">{lances.status}</td>

                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <Link to={`/edit/${lances.id}`} className="btn btn-primary">
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <Link to={`/details/${lances.id}`} className="btn btn-secondary">
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link to={`/delete/${lances.id}`} className="btn btn-danger">
                                                        <i className="fa fa-trash"></i>
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

export default ListaLances;