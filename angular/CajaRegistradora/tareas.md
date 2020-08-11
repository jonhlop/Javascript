## Caja Registradora

### Generales
- X Creación del modelo Producto 
    - Propiedades: nombre: string, precio: number, imagen (url): string
- X Creación de los componentes (ListaProductos, Comanda)
- X Crear los arrays **arrComida** y **arrBebida** e inicializarlos (app.component.ts)

### ListaProductosComponent
- X Creación de los @Input - titulo y productos
- Maquetar el componente
    - X Iterar el array productos para mostrar los diferentes elementos
- X Asignar evento **click** sobre cada una de las imágenes
    - X Cuando click - Lanzo un output para avisar al componente padre del producto seleccionado

### AppComponent
- X Crear método **onProductoSeleccionado** e incluir el producto dentro del array de **productosSeleccionados**

### ComandaComponent
- X Crear el @Input - productos
- X Iterar el array productos para mostrar los elementos seleccionados
- X Iterar el array productos para calcular el total

### AGRUPAR PRODUCTOS

- Definir dentro del modelo una nueva propiedad que sea CANTIDAD
- Cuando pulse sobre el producto y me llegue la selección a AppComponent, tengo que comprobar si el producto ya está seleccionado (comprobar en productosSeleccionados)
- Si el producto ya se encuentra en el array, aumento la CANTIDAD del producto en 1
- Si el producto NO está en el array, lo inserto y además le pongo la CANTIDAD a 1