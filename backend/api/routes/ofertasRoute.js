const { Router } = require('express')
const OfertasController = require('../controllers/OfertasController')


const router = Router()
router
    .get('/api/ofertas', OfertasController.read)
    .get('/api/ofertas/:id', OfertasController.readOne)
    .post('/api/ofertas', OfertasController.create)  
    .delete('/api/ofertas/:id', OfertasController.delete)
    .put('/api/ofertas/:id', OfertasController.update)


module.exports = router