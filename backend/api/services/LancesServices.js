const Services = require('./Services')
const database = require('../models')

class LancesServices extends Services {
    constructor() {
        super('Lances')
        this.ofertas = new Services('Ofertas')
    }

    async read() {
        return database[this.nameModel].findAll({
            include: [
                {
                  model: database.Ofertas,
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
          model: database.Ofertas,
        }
      ], where: { ...where } })
    }


}

module.exports = LancesServices