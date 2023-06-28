const express = require('express');
const itemsRouter = express.Router();

const itemsController = require('../controllers/itemsController.js');

itemsRouter.post('/', itemsController.createItem);
itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/:id', itemsController.getItemById);
itemsRouter.put('/:id', itemsController.updateItemById);
itemsRouter.delete('/:id', itemsController.deleteItem);

module.exports = itemsRouter;
