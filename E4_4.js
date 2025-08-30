//Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 
// y muestra el resultado en consola.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
