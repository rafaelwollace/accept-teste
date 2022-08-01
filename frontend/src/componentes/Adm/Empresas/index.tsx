import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IEmpresas from '../../../interfaces/IEmpresas';
import http from '../../../http';


const ListaEmpresas = () => {

    const [empresas, setEmpresas] = useState<IEmpresas[]>([])

    useEffect(() => {
        http.get<IEmpresas[]>('empresas').then(result => {
            setEmpresas(result.data);
        })
    }, []);


    return (

        <div className="col-12 col-md-12 py-3">
            <div className="card rounded shadow">
                <div className="card-header">
                    <h4 className="text-center">EMPRESAS</h4>
                    <div className="position-relative">
                        <div className="position-absolute top-0 end-0">
                            <button className="btn btn-success">
                                <i className='fa fa-plus'></i><span> CADASTRAR</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive  py-3">
                        <table className="table table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Tipo</th>
                                    <th className="text-center">Nome</th>
                                    <th className="text-center">CNPJ</th>
                                    <th className="text-center">E-mail</th>
                                    <th className="text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empresas.map(empresas => (

                                        <tr key={empresas.id}>
                                            <td className="text-center">{empresas.id}</td>
                                            <td className="text-center">{empresas.Tipo.nomeTipo}</td>
                                            <td className="text-center">{empresas.nome}</td>
                                            <td className="text-center">{empresas.cnpj}</td>
                                            <td className="text-center">{empresas.email}</td>
                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <Link to={`/edit/${empresas.id}`} className="btn btn-primary">
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <Link to={`/details/${empresas.id}`} className="btn btn-secondary">
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link to={`/delete/${empresas.id}`} className="btn btn-danger">
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

export default ListaEmpresas;