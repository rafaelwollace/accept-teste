const { Router } = require('express')
const TiposController = require('../controllers/TiposController')


const router = Router()
router
    .get('/api/tipos', TiposController.read)
    .get('/api/tipos/:id', TiposController.readOne)
    .post('/api/tipos', TiposController.create)  
    .delete('/api/tipos/:id', TiposController.delete)
    .put('/api/tipos/:id', TiposController.update)


module.exports = router