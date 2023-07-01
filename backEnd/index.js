const express = require('express');
const app = express();
const PORT = 3000;

const connectDB = require('./config/db');
const cors = require('cors')
const itemsRouter = require('./routes/itemsRouter');


connectDB();

app.use(cors())
app.use(express.json());
app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
