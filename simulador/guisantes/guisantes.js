document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const btnCruzar = document.querySelector('#btn-cruzar');
    const padres = document.querySelectorAll('.padre');
    const resultados = document.querySelector('.resultados');
    const hijo = document.querySelector('.hijo');
    const formulario = document.querySelector('#conclusiones-form');
  
    // Función para cruzar los guisantes
    function cruzarGuisantes() {
      // Obtener el color de cada padre
      const colorPadre1 = padres[0].style.backgroundColor;
      const colorPadre2 = padres[1].style.backgroundColor;
  
      // Realizar la cruza
      const colorHijo = mezclarColores(colorPadre1, colorPadre2);
  
      // Mostrar el resultado de la cruza
      resultados.style.display = 'flex';
      hijo.style.backgroundColor = colorHijo;
    }
  
    // Agregar el evento al botón de cruzar
    btnCruzar.addEventListener('click', cruzarGuisantes);
  
    // Función para mezclar dos colores
    function mezclarColores(color1, color2) {
      // Obtener los componentes RGB de cada color
      const rgb1 = obtenerRGB(color1);
      const rgb2 = obtenerRGB(color2);
  
      // Mezclar los componentes RGB
      const r = mezclarComponentes(rgb1.r, rgb2.r);
      const g = mezclarComponentes(rgb1.g, rgb2.g);
      const b = mezclarComponentes(rgb1.b, rgb2.b);
  
      // Devolver el color resultante en formato RGB
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    // Función para obtener los componentes RGB de un color en formato rgb()
    function obtenerRGB(color) {
      // Eliminar los espacios en blanco y los paréntesis de la cadena
      const colorSinEspacios = color.replace(/\s/g, '').replace(/rgb\(|\)/g, '');
      // Convertir la cadena en un array de cadenas de cada componente RGB
      const componentes = colorSinEspacios.split(',');
      // Devolver un objeto con los componentes RGB convertidos a números
      return {
        r: parseInt(componentes[0]),
        g: parseInt(componentes[1]),
        b: parseInt(componentes[2])
      };
    }
  
    // Función para mezclar dos componentes RGB
    function mezclarComponentes(c1, c2) {
      // Calcular el promedio de los componentes
      const promedio = (c1 + c2) / 2;
      // Calcular el valor final redondeando al entero más cercano
      const valorFinal = Math.round(promedio);
      // Devolver el valor final
      return valorFinal;
    }
  
    // Agregar el evento al formulario de conclusiones
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      // Obtener el valor del input
      const conclusion = document.querySelector('#conclusion').value;
      // Mostrar la conclusión en la página
      const conclusionesList = document.querySelector('.conclusiones-list');
      const li = document.createElement('li');
      li.textContent = conclusion;
      conclusionesList.appendChild(li);
      // Limpiar el input
      document.querySelector('#conclusion').value = '';
    });
  });
  