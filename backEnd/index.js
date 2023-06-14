const express = require('express');
const app = express();
const PORT = 3000;

const connectDB = require('./config/db');
const itemsRouter = require('./routes/itemsRouter');

connectDB();

app.use(express.json());
app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


