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

// Función para mostrar las prendas agotadas (cantidad = 0)
export function mostrarPrendasAgotadas() {
  const agotadas = inventario.filter(prenda => prenda.cantidad === 0);

  if (agotadas.length === 0) {
    console.log("No hay prendas agotadas.");
  } else {
    console.log("--- Prendas Agotadas ---");
    agotadas.forEach(prenda => {
      console.log(`${prenda.nombre} - ${prenda.tipo} - Talla: ${prenda.talla} - Precio:$ ${prenda.precio}`);
    });
  }
}

// Función para reponer el inventario de una prenda específica
export function reponerInventario(prendaId, cantidad) {
  const prenda = inventario.find(item => item.id === prendaId);

  if (prenda) {
    prenda.cantidad += cantidad;
    console.log(`Se han repuesto ${cantidad} unidades de ${prenda.nombre}. Nueva cantidad: ${prenda.cantidad}`);
  } else {
    console.log("Prenda no encontrada.");
  }
}

// Función para realizar un pedido
export function hacerPedido(clienteId,prendaId, cantidad) {
  const prenda = inventario.find(item => item.id === prendaId);

  if (!prenda) {
    console.log("Prenda no encontrada.");
    return;
  }

  if (prenda.cantidad < cantidad) {
    console.log(`No hay suficiente stock de ${prenda.nombre}.`);
    return;
  }

  prenda.cantidad -= cantidad;

  const nuevoPedido = {
    clienteId,
    prenda: prenda.nombre,
    cantidad,
    total: prenda.precio * cantidad
  };

  pedidos.push(nuevoPedido);
  console.log(`Pedido realizado: ${cantidad}x ${prenda.nombre}. Total:$ ${nuevoPedido.total}`);
}

// Función para mostrar todos los pedidos realizados
export function mostrarPedidos() {
  console.log("--- Pedidos Realizados ---");
  pedidos.forEach((pedido, index) => {
    console.log(`Pedido ${index + 1}: ${pedido.cantidad}x ${pedido.prenda} - Total:$ ${pedido.total}`);
  });
}
export function modificarPrenda(nombre,nuevosDatos){
  const prenda =inventario.find(prenda=>prenda.nombre===nombre);
    if (prenda) {
      Object.assign (prenda,nuevosDatos);//copia todas las propiedas de un objeto a otro
      console.log (`Prenda "${nombre}" modificada.`);
    
    }
     
}


