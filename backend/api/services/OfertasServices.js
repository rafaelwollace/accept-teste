const Services = require('./Services')
const database = require('../models')

class OfertasServices extends Services {
    constructor() {
        super('Ofertas')
        this.empresas = new Services('Empresas')
    }

    async read() {
        return database[this.nameModel].findAll({
            include: [
                {
                  model: database.Empresas,
                },
              ],
            order: [
              ["id", "DESC"],
            ],
          });
    }

    async readOne(where = {}) {
      return database[this.nameModel].findOne({   
        include: [
        {
          model: database.Empresas,
        }
      ], where: { ...where } })
    }


}

module.exports = OfertasServices