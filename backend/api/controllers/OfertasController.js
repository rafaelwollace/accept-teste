const Services = require('../services/Services')
const OfertasServices = require('../services/OfertasServices');

const ofertasServices = new Services('Ofertas')
const ofertasServicesC = new OfertasServices()


class OfertasController {

  static async read(req, res) {
    try {
      const read = await ofertasServicesC.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const reqTipo = await ofertasServicesC.readOne({ id })
      return res.status(200).json(reqTipo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const reqOft= req.body
    try {
      const oferta = await ofertasServices.create({ 
        fk_empresas: req.body.fk_empresas, 
        oferta: req.body.oferta, 
        descricao: req.body.descricao, 
        valor: req.body.valor, 
        quantidade: req.body.quantidade, 
        saida: req.body.saida, 
        entrega: req.body.entrega
        })
      return res.status(200).json(oferta)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }


  static async update(req, res) {  
    const { id } = req.params
    const {fk_empresas,oferta,descricao,valor,quantidade,saida,entrega } = req.body
    try {
      await ofertasServices.update(
          {  
            fk_empresas: fk_empresas, 
            oferta: oferta, 
            descricao: descricao, 
            valor: valor, 
            quantidade: quantidade, 
            saida: saida, 
            entrega: entrega
          })
          return res.status(200).json({ mensagem: ` Oferta ID:${id} atualizada` })
        } catch (err) {
          return  res.status(500).json({
            message: err.errors.map(e => e.message)
          });
        }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await ofertasServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = OfertasController