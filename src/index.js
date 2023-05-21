const mongoose = require('mongoose');
const app = require("./app");
const {DB_HOST, DB_PASSWORD, DB_USER, IP_SERVER} = require('./constants');

const connectDB = async () => {
    const PORT = process.env.POST || 3977;
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`);

        app.listen(PORT, () => {
            console.log(`http://${IP_SERVER}:${PORT}`)
          })
    } catch(error) {
        console.log('Error al conectar con la base de datos', error);
    }
}

connectDB();