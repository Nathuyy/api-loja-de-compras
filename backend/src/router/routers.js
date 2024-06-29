const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/users', controller.getUsers);
router.post('/novoCliente', controller.newClient);
router.get('/produtos', controller.getProdutos);
router.post('/novoProd', controller.novoProd);
router.delete('/deleteProd/:id', controller.deleteProd);
router.put('/updateProd/:id', controller.updateProd);


module.exports = router;