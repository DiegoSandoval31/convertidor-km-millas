function convertir() {
    // Obtiene el valor ingresado en el input de kilómetros
    var km = parseFloat(document.getElementById('kmInput').value);
    
    // Calcula el valor en millas (1 km = 0.621371 millas)
    var millas = km * 0.621371;
    
    // Muestra el resultado
    document.getElementById('resultado').innerHTML = km + ' kilómetros equivalen a ' + millas.toFixed(2) + ' millas.';
  }