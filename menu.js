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