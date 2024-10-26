import promptSync from 'prompt-sync';
import {
    agregarPrenda,mostrarInventario,hacerPedido,mostrarPedidos,mostrarPrendasAgotadas,reponerInventario } from "./funciones.js";
import { clientes } from "./datos.js";
const prompt = promptSync();  

  function mostrarMenu() {
    let opcion = "";
  
    while (opcion !== "7") {
      opcion = prompt(
        `--- Sistema de Tienda de Ropa ---
  1. Mostrar inventario
  2. Agregar prenda al inventario
  3. Realizar pedido
  4. Mostrar pedidos
  5. Mostrar prendas agotadas
  6. Reponer inventario
  7. Salir
  Seleccione una opción:`
      );
      switch (opcion) {
        case "1":
          console.clear();
          mostrarInventario();
          break;
  
        case "2":
          console.clear();
          const nombre = prompt("Ingrese el nombre de la prenda:");
          const tipo = prompt("Ingrese el tipo de prenda (camiseta, pantalón, etc.):");
          const talla = prompt("Ingrese la talla:");
          const precio = parseFloat(prompt("Ingrese el precio:"));
          const cantidad = parseInt(prompt("Ingrese la cantidad:"));
  
          agregarPrenda(nombre, tipo, talla, precio, cantidad);
          break;

          case "3":
          console.clear();
          const clienteId = parseInt(prompt(`Ingrese el Id del cliente: `));
          const prendaId = parseInt(prompt("Ingrese el Id de la prenda a pedir:"));
          const cantidadPedido = parseInt(prompt("Ingrese la cantidad:"));
  
          hacerPedido(clienteId, prendaId, cantidadPedido);
          break;
  
        case "4":
          console.clear();
          mostrarPedidos();
          break;