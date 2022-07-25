const { Router } = require('express')
const EmpresasController = require('../controllers/EmpresasController')


const router = Router()
router
    .get('/api/empresas', EmpresasController.read)
    .get('/api/empresas/:id', EmpresasController.readOne)
    .post('/api/empresas', EmpresasController.create)  
    .delete('/api/empresas/:id', EmpresasController.delete)
    .put('/api/empresas/:id', EmpresasController.update)


module.exports = router