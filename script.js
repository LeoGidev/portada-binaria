 // Obtén el elemento del body para agregar los nuevos elementos
 const body = document.body;

 // Obtén el div con ID "portada"
 const portadaDiv = document.getElementById('portada');

 // Itera del 0 al 10
 for (let i = 0; i <= 10; i++) {
   // Crea un nuevo elemento div
   const nuevoElemento = document.createElement('div');
   
   // Asigna el ID basado en el índice del bucle
   nuevoElemento.id = `elemento${i}`;
   
  // Agrega contenido 
if (i % 2 === 0) {
    nuevoElemento.textContent = '0 1 0 1 1 0 1 0 0 1 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0';
  } else {
    nuevoElemento.textContent = '0 1 0 1 1 0 1 0 0 1 1 ' +
      '1 0 1 0 1 1 0 0 0 1 0 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 1 0 1 0 ' +
      '1 0 1 0 0 0 0 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 1 1 0 0 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0';
  }
  
  
   
   // Agrega el nuevo elemento al div con ID "portada"
   portadaDiv.appendChild(nuevoElemento);
 }