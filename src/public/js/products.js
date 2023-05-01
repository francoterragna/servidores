const socket = io();

      // Escuchamos el evento de productos actualizados
      socket.on('realTimeProducts', productos => {
        actualizarProductos(productos);
      });

      // Función para actualizar la lista de productos
      function actualizarProductos(productos) {
        const productosList = document.querySelector('ul');
        productosList.innerHTML = '';
        productos.forEach(producto => {
          const li = document.createElement('li');
          li.textContent = `${producto.nombre} - ${producto.precio} EUR`;
          productosList.appendChild(li);
        });
      }