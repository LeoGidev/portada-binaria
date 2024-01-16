 // Obtén el elemento del body para agregar los nuevos elementos
 const body = document.body;

 // Obtén el div con ID "portada"
 const portadaDiv = document.getElementById('portada');

 // Itera del 0 al 10
 for (let i = 0; i <= 3; i++) {
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
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0';
  } else {
    nuevoElemento.textContent = '0 1 0 1 1 0 1 0 0 1 1 ' +
      '1 0 1 0 1 1 0 0 0 1 0 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 1 1 0 0 0 0 1 1 ' +
      '1 0 1 0 0 0 1 0 0 1 1 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '0 1 0 1 1 0 1 0 0 1 0 ' +
      '1 0 1 1 1 0 0 0 0 1 1 ' +
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

 document.addEventListener('DOMContentLoaded', function(){
    setInterval(efecto, 10000);
});

function efecto(){
    var a = Math.floor(Math.random() * 10); 
    var b = Math.floor(Math.random() * 10); 
    var c = Math.floor(Math.random() * 10); 
    var d = Math.floor(Math.random() * 10); 

    var numero0 = document.getElementById("elemento0");
    var numero1 = document.getElementById("elemento1");
    var numero2 = document.getElementById("elemento2");
    var numero3 = document.getElementById("elemento3");
       // Agregar una transición suave
    numero0.style.transition = 'transform 10s ease-in-out, opacity 4s ease-in-out';
    numero0.style.transform = `translate(${a * 0.2}px, ${a}px)`;
    numero0.style.opacity=`${a * 0.1}`;

    numero1.style.transition = 'transform 10s ease-in-out, opacity 4s ease-in-out';
    numero1.style.transform = `translate(${b * 0.3}px, ${b}px)`;
    numero1.style.opacity=`${b * 0.1}`;

    numero2.style.transition = 'transform 10s ease-in-out, opacity 4s ease-in-out';
    numero2.style.transform = `translate(${c * 0.2}px, ${c}px)`;
    numero2.style.opacity=`${c * 0.1}`;

    numero3.style.transition = 'transform 10s ease-in-out, opacity 4s ease-in-out';
    numero3.style.transform = `translate(${d * 0.2}px, ${d}px)`;
    numero3.style.opacity=`${d * 0.1}`;
}
