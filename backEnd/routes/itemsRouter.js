const express = require('express');
const itemsRouter = express.Router();

const itemsController = require('../controllers/itemsController');

itemsRouter.post('/', itemsController.createItem);

module.exports = itemsRouter;
