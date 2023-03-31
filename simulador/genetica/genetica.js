function calcularProbabilidad() {
    var padre1_car1 = document.getElementById("caracteristica1_padre1").value;
    var padre1_car2 = document.getElementById("caracteristica2_padre1").value;
    var padre1_car3 = document.getElementById("caracteristica3_padre1").value;
    var padre2_car1 = document.getElementById("caracteristica1_padre2").value;
    var padre2_car2 = document.getElementById("caracteristica2_padre2").value;
    var padre2_car3 = document.getElementById("caracteristica3_padre2").value;
  
    var combinaciones_car1 = {
      "valor1_valor1": "100% AA",
      "valor1_valor2": "50% AA, 50% Aa",
      "valor1_valor3": "50% Aa, 50% aa",
      "valor2_valor2": "25% AA, 50% Aa, 25% aa",
      "valor2_valor3": "50% Aa, 50% aa",
      "valor3_valor3": "100% aa",
      "valor2_valor1": "50% AA, 50% Aa",
      "valor3_valor1": "50% Aa, 50% aa",
      "valor3_valor2": "50% Aa, 50% aa",
    };
  
    var combinaciones_car2 = {
      "valor1_valor1": "100% BB",
      "valor1_valor2": "50% BB, 50% Bb",
      "valor1_valor3": "50% Bb, 50% bb",
      "valor2_valor2": "25% BB, 50% Bb, 25% bb",
      "valor2_valor3": "50% Bb, 50% bb",
      "valor3_valor3": "100% bb",
      "valor2_valor1": "50% BB, 50% Bb",
      "valor3_valor1": "50% Ba, 50% bb",
      "valor3_valor2": "50% Bb, 50% bb",
    };
  
    var combinaciones_car3 = {
      "valor1_valor1": "100% CC",
      "valor1_valor2": "50% CC, 50% Cc",
      "valor1_valor3": "50% Cc, 50% cc",
      "valor2_valor2": "25% CC, 50% Cc, 25% cc",
      "valor2_valor3": "50% Cc, 50% cc",
      "valor3_valor3": "100% cc",
      "valor2_valor1": "50% CC, 50% Cc",
      "valor3_valor1": "50% Cc, 50% cc",
      "valor3_valor2": "50% Cc, 50% cc",
    };
  
    var probabilidad_car1 = combinaciones_car1[padre1_car1 + "_" + padre2_car1] || "No se puede calcular la probabilidad para esta combinación de alelos";
    var probabilidad_car2 = combinaciones_car2[padre1_car2 + "_" + padre2_car2] || "No se puede calcular la probabilidad para esta combinación de alelos";
    var probabilidad_car3 = combinaciones_car3[padre1_car3 + "_" + padre2_car3] || "No se puede calcular la probabilidad para esta combinación de alelos";
  
    document.getElementById("probabilidad_car1").innerHTML = '<span class="caracteristica">Caracteristica 1: </span><span>' + probabilidad_car1 + '</span>';
    document.getElementById("probabilidad_car2").innerHTML = '<span class="caracteristica">Caracteristica 2: </span><span>' + probabilidad_car2 + '</span>';
    document.getElementById("probabilidad_car3").innerHTML = '<span class="caracteristica">Caracteristica 3: </span><span>' + probabilidad_car3 + '</span>';     
    }
    
    function generarAleatorio() {
        // Generar aleatoriamente los valores de las características de los padres
        var valores_car1 = ["valor1", "valor2", "valor3"];
        var valores_car2 = ["valor1", "valor2", "valor3"];
        var valores_car3 = ["valor1", "valor2", "valor3"];
        var padre1_car1 = valores_car1[Math.floor(Math.random() * valores_car1.length)];
        var padre1_car2 = valores_car2[Math.floor(Math.random() * valores_car2.length)];
        var padre1_car3 = valores_car3[Math.floor(Math.random() * valores_car3.length)];
        var padre2_car1 = valores_car1[Math.floor(Math.random() * valores_car1.length)];
        var padre2_car2 = valores_car2[Math.floor(Math.random() * valores_car2.length)];
        var padre2_car3 = valores_car3[Math.floor(Math.random() * valores_car3.length)];
      
        // Actualizar los valores en la página
        document.getElementById("caracteristica1_padre1").value = padre1_car1;
        document.getElementById("caracteristica2_padre1").value = padre1_car2;
        document.getElementById("caracteristica3_padre1").value = padre1_car3;
        document.getElementById("caracteristica1_padre2").value = padre2_car1;
        document.getElementById("caracteristica2_padre2").value = padre2_car2;
        document.getElementById("caracteristica3_padre2").value = padre2_car3;
      
        // Calcular la probabilidad
        calcularProbabilidad();
      }
      
  
