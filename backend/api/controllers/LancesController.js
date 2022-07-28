const Services = require('../services/Services')
const LancesServices = require('../services/LancesServices');
const lancesServices = new Services('Lances')
const lancesServicesC = new LancesServices()


class LancesController {

  static async read(req, res) {
    try {
      const read = await lancesServicesC.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const reqTipo = await tiposServices.readOne({ id })
      return res.status(200).json(reqTipo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const reqTipo = req.body
    try {
      const newCliente = await tiposServices.create({ 
        nomeTipo: req.body.nomeTipo, 
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
    const { nomeTipo }  = req.body
    try {
      await tiposServices.update(
          {nomeTipo:nomeTipo})
          return res.status(200).json({ mensagem: `Empresa ID:${id} atualizado` })
        } catch (err) {
          return  res.status(500).json({
            message: err.errors.map(e => e.message)
          });
        }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await tiposServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = LancesController