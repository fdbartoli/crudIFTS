const ItemsModel = require('../models/itemsModel.js');

//Metodo para crear un item
exports.createItem = async (req, res) => {
  try {
    let item = new ItemsModel(req.body);
    item = await item.save();
    res.json({ message: 'Item creado con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocurrió un error...' });
  }
};

//Metodo para obtener todos los items
exports.getItems = async (req, res) => {
  try {
    const items = await ItemsModel.find();
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocurrió un error...' });
  }
};

//Metodo para obtener un item por ID
exports.getItemById = async (req, res) => {
  try {
    const item = await ItemsModel.findById(req.params.id);
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'No existe el Item' });
  }
};

//Metodo para actualizar un item por ID
exports.updateItemById = async (req, res) => {
  try {
    const { descripcion, cantidadDePersonas, precio, checkIn, checkOut } =
      req.body;
    let item = await ItemsModel.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'No existe el Item' });
    }
    item.descripcion = descripcion;
    item.cantidadDePersonas = cantidadDePersonas;
    item.precio = precio;
    item.checkIn = checkIn;
    item.checkOut = checkOut;

    item = await ItemsModel.findOneAndUpdate(
      { _id: req.params.id },
      item,
      {
        new: true,
      },
      res.json({ message: 'Producto actualizado con éxito' })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocurrió un error...' });
  }
};

//Metodo para eliminar un Item
exports.deleteItem = async (req, res) => {
  try {
    const item = await ItemsModel.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'No existe el Item' });
    }
    await ItemsModel.findOneAndRemove({ _id: req.params.id });
    res.json({ message: 'Item eliminado con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocurrió un error...' });
  }
};
