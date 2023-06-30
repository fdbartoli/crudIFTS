const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    cantidadDePersonas: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  { versionKey: false }
);

module.exports = mongoose.model('Item', itemsSchema);
