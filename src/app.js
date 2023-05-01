const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs').promises;
const { Server } = require('socket.io');

const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));

// app.engine('handlebars', handlebars.engine());


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine','handlebars');

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
  const io = new Server(server);

  // io.on('connection', socket =>{
  //   console.log("Socket connected");

  //   socket.on('message',data=>{
  //       // messages.push(data);
  //       io.emit('messageLogs',data);
  //   })
    io.on('connection', (socket) => {
      console.log('Usuario conectado');

      const fileChanged = () => {
        console.log('El archivo ha sido modificado.');
      
        // Leer el archivo JSON
        return JSON.parse(fs.readFile('../productos.json', 'utf-8'));
      }


      // Establecer la vigilancia del archivo JSON
      const productosStream = fs.watch('../productos.json');
      productosStream.then(result => console.log(result)) 

      productosStream.on('change', async () => {
        const productos = await fs.readFile('../productos.json', 'utf-8');
        io.emit('realTimeProducts', productos);
      });
    
})
