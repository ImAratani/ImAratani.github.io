function calcularProbabilidad() {
    var padre1_car1 = document.getElementById("caracteristica1_padre1").value;
    var padre1_car2 = document.getElementById("caracteristica2_padre1").value;
    var padre1_car3 = document.getElementById("caracteristica3_padre1").value;
    var padre2_car1 = document.getElementById("caracteristica1_padre2").value;
    var padre2_car2 = document.getElementById("caracteristica2_padre2").value;
    var padre2_car3 = document.getElementById("caracteristica3_padre2").value;
    var probabilidad_car1 = "";
    var probabilidad_car2 = "";
    var probabilidad_car3 = "";

    if (padre1_car1 == "valor1" && padre2_car1 == "valor1") {
        probabilidad_car1 = "100% AA";
    } else if (padre1_car1 == "valor1" && (padre2_car1 == "valor2" || padre2_car1 == "valor3") ||
        padre2_car1 == "valor1" && (padre1_car1 == "valor2" || padre1_car1 == "valor3")) {
        probabilidad_car1 = "50% AA, 50% Aa";
    } else if (padre1_car1 == "valor2" && padre2_car1 == "valor2") {
        probabilidad_car1 = "25% AA, 50% Aa, 25% aa";
    } else if (padre1_car1 == "valor3" && padre2_car1 == "valor3") {
        probabilidad_car1 = "100% aa";
    } else {
        probabilidad_car1 = "No se puede calcular la probabilidad para esta combinación de alelos";
    }

    if (padre1_car2 == "valor1" && padre2_car2 == "valor1") {
        probabilidad_car2 = "100% BB";
    } else if (padre1_car2 == "valor1" && (padre2_car2 == "valor2" || padre2_car2 == "valor3") ||
        padre2_car2 == "valor1" && (padre1_car2 == "valor2" || padre1_car2 == "valor3")) {
        probabilidad_car2 = "50% BB, 50% Bb";
    } else if (padre1_car2 == "valor2" && padre2_car2 == "valor2") {
        probabilidad_car2 = "25% BB, 50% Bb, 25% bb";
    } else if (padre1_car2 == "valor3" && padre2_car2 == "valor3") {
        probabilidad_car2 = "100% bb";
    } else {
        probabilidad_car2 = "No se puede calcular la probabilidad para esta combinación de alelos";
    }

    if (padre1_car3 == "valor1" && padre2_car3 == "valor1") {
        probabilidad_car3 = "100% BB";
    } else if (padre1_car3 == "valor2" && padre2_car3 == "valor2") {
        probabilidad_car3 = "25% CC, 50% Cc, 25% cc";
    } else if (padre1_car3 == "valor3" && padre2_car3 == "valor3") {
        probabilidad_car3 = "100% cc";
    } else {
        probabilidad_car3 = "No se puede calcular la probabilidad para esta combinación de alelos";
    }

    document.getElementById("probabilidad_car1").innerHTML = '<span class="caracteristica">Caracteristica 1: </span><span>' + probabilidad_car1 + '</span>';
    document.getElementById("probabilidad_car2").innerHTML = '<span class="caracteristica">Caracteristica 2: </span><span>' + probabilidad_car2 + '</span>';
    document.getElementById("probabilidad_car3").innerHTML = '<span class="caracteristica">Caracteristica 3: </span><span>' + probabilidad_car3 + '</span>';
    
}
