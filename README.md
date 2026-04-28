# SportyStyle
trabajo de pagina SportyStyle
1. Flujo de autenticación

El sistema de autenticación fue diseñado inicialmente para trabajar con Auth0, el cual permite gestionar el inicio de sesión de manera segura mediante un servicio externo. Sin embargo, debido a dificultades técnicas en su implementación en entorno local, se optó por simular este proceso.

El flujo funciona de la siguiente manera:

El usuario presiona el botón "Iniciar sesión".
Se crea un objeto usuario en JavaScript.
Este se almacena en Session Storage.
Se muestra un mensaje de bienvenida en pantalla.
La sesión se mantiene activa mientras la pestaña esté abierta.
2. Proceso de selección de productos

La tienda presenta tres productos: camiseta, pantalón y accesorio.

El proceso funciona así:

El usuario hace clic en "Agregar al carrito".
El producto se guarda en un arreglo en JavaScript.
Este arreglo se almacena en Session Storage.
El carrito se actualiza automáticamente mostrando:
Nombre del producto
Precio
Cantidad
Total de la compra

Los productos se agrupan para mostrar correctamente la cantidad seleccionada.

3. Protección de la sesión con Session Storage

Se utilizó Session Storage para almacenar:

Datos del usuario
Productos del carrito

Funcionamiento:

Los datos se mantienen mientras la pestaña esté abierta.
Si el usuario recarga la página, la información se conserva.
Al cerrar sesión o finalizar la compra:
Se eliminan los datos del Session Storage
La aplicación vuelve a su estado inicial

Esto permite simular una sesión activa de usuario de forma segura.
