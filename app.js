const plantas = {
  1: "Tomillo", 2: "Romero", 3: "Lavanda", 4: "Margarita", 5: "Ortiga",
  6: "Amapola", 7: "Salvia", 8: "Albahaca", 9: "Menta", 10: "Ruda",
  11: "Manzanilla", 12: "Valeriana", 13: "Hierbabuena", 14: "Caléndula",
  15: "Diente de león", 16: "Enebro", 17: "Genciana", 18: "Malva",
  19: "Lúpulo", 20: "Digitalis"
};

function lanzar() {
  const numDias = parseInt(document.getElementById("numDias").value);
  const carasPlanta = parseInt(document.getElementById("carasPlanta").value);
  const carasCantidad = parseInt(document.getElementById("carasCantidad").value);
  const resultadosDiv = document.getElementById("resultados");

  let resultados = "";
  for (let i = 1; i <= numDias; i++) {
    const plantaTirada = Math.floor(Math.random() * carasPlanta) + 1;
    const cantidadTirada = Math.floor(Math.random() * carasCantidad) + 1;
    const nombrePlanta = (carasPlanta === 20 && plantas[plantaTirada]) ? plantas[plantaTirada] : `Planta ${plantaTirada}`;

    resultados += `Día ${i}: ${cantidadTirada} x ${nombrePlanta}\n`;
  }

  resultadosDiv.textContent = resultados;
}
