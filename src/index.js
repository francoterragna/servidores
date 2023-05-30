const mongoose = require('mongoose');
const app = require("./app");
const {DB_HOST, DB_PASSWORD, DB_USER, IP_SERVER} = require('./constants');
const socketIO = require('socket.io');
const Message = require('./dao/models/messages')


const connectDB = async () => {
    const PORT = process.env.POST || 3977;
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`);

        const server = app.listen(PORT, () => {
            console.log(`http://${IP_SERVER}:${PORT}`)
        })

        const io = socketIO(server);

        io.on('connection', (socket) => {
        console.log('Nuevo usuario conectado');
        
        socket.on('chatMessage', async ({ username, message }) => {
            console.log(`Mensaje recibido: ${message} (Usuario: ${username})`);
            
            //Creando coleccion para MongoDB
            const newMessage = new Message({
                username,
                message,
            });
            
            io.emit('chatMessage', { username, message });
            //Se envia el formato del mensaje hacia MongoDB
            await newMessage.save();
            });
            
        
        socket.on('disconnect', () => {
            console.log('Usuario desconectado');
        });
        });
    } catch(error) {
        console.log('Error al conectar con la base de datos', error);
    }
}

connectDB();