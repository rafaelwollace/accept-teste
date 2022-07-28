const { Router } = require('express')
const LancesController = require('../controllers/LancesController')


const router = Router()
router
    .get('/api/lances', LancesController.read)
    .get('/api/lances/:id', LancesController.readOne)
    .post('/api/lances', LancesController.create)  
    .delete('/api/lances/:id', LancesController.delete)
    .put('/api/lances/:id', LancesController.update)


module.exports = router