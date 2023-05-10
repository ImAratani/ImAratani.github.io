const coleccionables = [
    { id: 1, nombre: 'Coleccionable 1', color: 'rojo' },
    { id: 2, nombre: 'Coleccionable 2', color: 'azul' }
  ];
  
  function obtenerColeccionable(coleccionableId) {
    const coleccionable = coleccionables.find(item => item.id === coleccionableId);
    if (coleccionable) {
      agregarAlInventario(coleccionable);
    }
  }
  
  function agregarAlInventario(coleccionable) {
    const inventario = document.getElementById('inventario');
    const detalle = document.getElementById('detalle');
    
    const option = document.createElement('option');
    option.value = coleccionable.id;
    option.textContent = coleccionable.nombre;
    inventario.appendChild(option);
    
    detalle.textContent = `Has obtenido ${coleccionable.nombre} de color ${coleccionable.color}.`;
  }
  
  function mostrarDetalle() {
    const inventario = document.getElementById('inventario');
    const detalle = document.getElementById('detalle');
    const coleccionableId = inventario.value;
    
    if (coleccionableId) {
      const coleccionable = coleccionables.find(item => item.id === parseInt(coleccionableId));
      detalle.textContent = `Has obtenido ${coleccionable.nombre} de color ${coleccionable.color}.`;
    } else {
      detalle.textContent = '';
    }
  }
  