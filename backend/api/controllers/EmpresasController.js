const Services = require('../services/Services')
const EmpresasServices = require('../services/EmpresasServices');

const empresasServices = new Services('Empresas')
const empresasServicesC = new EmpresasServices()

class EmpresasController {

  static async read(req, res) {
    try {
      const read = await empresasServicesC.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const emp = await empresasServicesC.readOne({ id })
      return res.status(200).json(emp)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const reqEmp = req.body
    try {
      const newCliente = await empresasServices.create({ 
          fk_tipos: req.body.fk_tipos, 
          nome: req.body.nome, 
          cnpj: req.body.cnpj, 
          email: req.body.email 
        })
      return res.status(200).json(newCliente)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }


  static async update(req, res) {  
    const { id } = req.params
    const { fk_tipos, nome, cnpj, email  }  = req.body
    try {
      await empresasServices.update(
          {
            fk_tipos: fk_tipos, 
            nome: nome, 
            cnpj: cnpj, 
            email: email 

          })
          return res.status(200).json({ mensagem: `Empresa ID:${id} atualizada` })
        } catch (err) {
          return  res.status(500).json({
            message: err.errors.map(e => e.message)
          });
        }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await empresasServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = EmpresasController