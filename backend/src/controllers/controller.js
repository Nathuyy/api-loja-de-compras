const models = require('../models/models');

const getUsers = async (req, res) => {
    const users = await models.getUsers();
    res.status(200).json(users);
};

const newClient = async (req, res) => {

    const newClient = await models.newClient(req.body);

    res.status(201).json(newClient);
}

const getProdutos = async (req, res) => {

    const produtos = await models.getProdutos();
    res.status(200).json(produtos);
}

const novoProd = async (req, res) => {

    const newProd = await models.novoProd(req.body);
    res.status(201).json(newProd);

}

const deleteProd = async (req, res) => {

    const { id } = req.params;

    const deleteProd = await models.deleteProd(id);
    res.status(200).json(deleteProd);
}

const updateProd = async (req, res) => {

    const { id } = req.params;
    await models.updateProd(id, req.body)
    return res.status(204).json()

}


module.exports = { 
    getUsers,
    newClient,
    getProdutos,
    novoProd,
    deleteProd,
    updateProd
};