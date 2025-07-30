const plantas = {
  1: "Tomillo", 2: "Romero", 3: "Lavanda", 4: "Margarita", 5: "Ortiga",
  6: "Amapola", 7: "Salvia", 8: "Albahaca", 9: "Menta", 10: "Ruda",
  11: "Manzanilla", 12: "Valeriana", 13: "Hierbabuena", 14: "Caléndula",
  15: "Diente de león", 16: "Enebro", 17: "Genciana", 18: "Malva",
  19: "Lúpulo", 20: "Digitalis"
};

function lanzarDados() {
  const numDados = parseInt(document.getElementById("numDados").value);
  const carasDado = parseInt(document.getElementById("carasDado").value);
  const resultadosDiv = document.getElementById("resultados");

  let resultados = "";
  for (let i = 1; i <= numDados; i++) {
    const tirada = Math.floor(Math.random() * carasDado) + 1;
    const nombre = (carasDado === 20 && plantas[tirada]) ? plantas[tirada] : "";
    resultados += `Dado ${i}: ${tirada} ${nombre ? "- " + nombre : ""}\n`;
  }

  resultadosDiv.textContent = resultados;
}
