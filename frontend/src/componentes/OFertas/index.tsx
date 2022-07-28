import axios from 'axios';
import { useEffect, useState } from 'react';
import IOfertas from '../../interfaces/IOfertas';
import { Link } from 'react-router-dom';

const ListaOfertas = () => {

  const [ofertas, setOfertas] = useState<IOfertas[]>([])

    useEffect(() => {
      axios.get<IOfertas[]>(`http://localhost:3000/api/ofertas`)
        .then(resposta => {
          setOfertas(resposta.data)
        })
    })


  return (
  <section>
    <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Post</th>
                    <th className="text-center">Autor</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    ofertas.map(post => (
                        <tr key={post.id}>
                            <td>{post.fk_empresas}</td>
                            <td className="text-center">{post.oferta}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${post.id}`} className="btn btn-secondary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${post.id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
  </section>
  )
}

export default ListaOfertas