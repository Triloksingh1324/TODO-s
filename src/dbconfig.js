const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log("Connected to MongoDB");
        });
        
        connection.on('error', (err) => {
            console.log("Error connecting to MongoDB: " + err.message);
            process.exit(1);  // Properly exit the process
        });
    } catch (error) {
        console.log("Something went wrong: " + error.message);
        process.exit(1);  // Properly exit the process
    }
}

module.exports = connect;
