const Services = require('./Services')
const database = require('../models')

class EmpresasServices extends Services {
    constructor() {
        super('Empresas')
        this.tipos = new Services('Tipos')
    }

    async read() {
        return database[this.nameModel].findAll({
            include: [
                {
                  model: database.Tipos,
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
          model: database.Tipos,
        }
      ], where: { ...where } })
    }


}

module.exports = EmpresasServices