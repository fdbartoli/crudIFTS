const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;