//Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
//Agregar una tarea.
//Eliminar una tarea por id.
//Marcar una tarea como completada.

let tareas = [];

function agregarTarea(id, descripcion) {
  tareas.push({ id, descripcion, completado: false });
}

function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
}

function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completado = true;
  }
}

agregarTarea(1, "Comprar leche");
agregarTarea(2, "Hacer ejercicio");

console.log(tareas);

completarTarea(1);
console.log(tareas);

eliminarTarea(2);
console.log(tareas);