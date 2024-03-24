# OnlineShop 
### Sonic Shop Collection
- an example of Online Shop with sonic products
## Gabriel Miguel Cabrera Samano 20491199

## Explique cada una de las funciones definidas por el usuario en el código JavaScript presentado en el paso 2. 
- document.addEventListener("DOMContentLoaded", function ():
partiendo de la funcion principal, en esta funcion realizara una carga de todos los productos que registramos de forma predetermina en codigo, de esta manera, haremos que al momento de cargar el documento, todos aquellos productos contendran un precio, un nombre, su representacion en imagen y un identificador unico que presente dicho objeto. ademas, cargara todas las funciones adicionales que proveeran al programa la capacidad de almacenar los productos en nuestro carrito y aumentar o disminuir su cantidad equivalente al precio que contiene, dando un monto final de cada producto. 
- function agregarProductoAlCarrito(producto, cantidad):
esta funcion permite añadir productos al carrito, de manera que se relacione al producto en especifico con la cantidad de productos que contendra el carrito, y si ya existe un producto identico en el carrito, de manera predeterminada nos impedira añadirlo pues ya esta registrado especificamente ese mismo producto, y se actualizara el registro en una funcion llamada actualizarResumenCompra().
- function actualizarResumenCompra():
en esta funcion, una vez fueron evaluados todos los productos que fueron registrados por parte de la anterior funcion, si el usuario quiere mas cantidad del mismo producto, se retomara dicha informacion multiplicando su cantidad por su precio predeterminando, dejando asi un subtotal para cada registro, y al confirmar la compra, realizara una evaluacion de todas las sumas de los subtotales en un total final para la compra de dichos productos.
## En el código js, ¿qué tipo de variable es "catalogo"? ¿Como se manipula?
catalogo es un arreglo de tipo objeto, ya que estamos almacenando contenido estructurado dentro de cada posicion del catalogo, y se manipula en base a las funciones de agregar productos al carrito y sumar o restar la cantidad del mismo.
## ¿Que hace const card = document.createElement("div") ?
definimos una variable constante que servira para definir un elemento div en HTML. en este programa sera utilizado para interactuar con la propiedad .innerHTML.
## ¿Que hace card.innerHTML ?
innerHTML es una propiedad de los elementos que al implementarse en JS permite agregar o modificar contenido dentro de la presentacion en HTML dependiendo del elemento, lo que permite crear mas tablas o div (dependiendo de la necesidad) y obteniendo su contenido en relacion a lo que queremos presentar, en este caso, cad.innterHTML creara una propiedad dentro del contenido en HTML para introducir la presentacion de los productos en referencia al arreglo integrado en JS, lo que permite interactuar de manera mas eficaz el manejo de objetos en presencia de HTML dentro de JS.
## ¿Que hace catalogoContainer.appendChild(card) ?
appendChild es un método que se utiliza para agregar un nodo hijo al final de la lista de hijos de un nodo padre específico. En este caso, para el catalgo dentro del contenedor realizara multiples nodos en base al carrito, siguiendo una estructura en orden conforme se agregen los productos. suele ser comúnmente utilizado para manipular el DOM (Document Object Model) y dinámicamente agregar elementos HTML a una página web.
