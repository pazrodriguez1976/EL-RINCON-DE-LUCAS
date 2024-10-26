import { inventario } from "./datos.js";
import { pedidos } from "./datos.js";
import { clientes } from "./datos.js";

// Función para agregar una nueva prenda al inventario
export function agregarPrenda(nombre, tipo, talla, precio, cantidad) {
  const nuevaPrenda = {
    id: inventario.length + 1,
    nombre,
    tipo,
    talla,
    precio,
    cantidad
  };
  inventario.push(nuevaPrenda);
  console.log(`Prenda agregada: ${nombre}`);
}

// Función para mostrar el inventario completo
export function mostrarInventario() {
  console.log("--- Inventario ---");
  inventario.forEach(prenda => {
    console.log(`${prenda.nombre} - ${prenda.tipo} - Talla: ${prenda.talla} - Precio:$ ${prenda.precio} - Cantidad: ${prenda.cantidad}`);
  });
}