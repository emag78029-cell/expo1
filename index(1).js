document.addEventListener("DOMContentLoaded", () => {
  const contadorCuadro = document.getElementById("contador-cuadro");
  const contador = document.getElementById("contador");
  
  const hoy = new Date();
  const destino = new Date("2025-09-04");
  
  hoy.setHours(0, 0, 0, 0);
  destino.setHours(0, 0, 0, 0);
  
  const diferencia = destino - hoy;
  const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
  if (dias <= 0) {
    contador.textContent = "🎉 ¡ES El GRAN DIA! 🎉";
    contadorCuadro.style.background = "linear-gradient(135deg, #f2ff00ff, #f4f4f4ff)";
    contador.style.color = "#f9f9f9ff";
    contador.style.fontSize = "4.5rem";   // mismo tamaño grande
    contador.style.fontWeight = "900";
    contador.style.letterSpacing = "3px";
    contadorCuadro.style.boxShadow = "0 8px 30px rgba(242, 255, 0, 1)";
  } else {
    contador.textContent = dias;
    contador.style.fontSize = "4.5rem";
    contador.style.color = "white";
    contador.style.fontWeight = "900";
    contador.style.letterSpacing = "3px";
    contadorCuadro.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
    contadorCuadro.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.6)";
  }
});

 // Espera 5 segundos y luego muestra la X
  setTimeout(function() {
    document.getElementById("cerrar").style.display = "block";
  }, 5000);


