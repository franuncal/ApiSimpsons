const container = document.getElementById("container");

personajesSimpson.forEach((el) => {
  const card = document.createElement("div");
  card.className = "card";

  const nombreSimpson = document.createElement("h2");
  nombreSimpson.innerText = el.Nombre;

  const imageSimpson = document.createElement("img");
  imageSimpson.src = el.Imagen;

  const btnDatos = document.createElement("button");
  btnDatos.innerText = "Mas datos sobre...";
  btnDatos.onclick = () => mostrarInfo(el);
  
  card.appendChild(nombreSimpson);
  card.appendChild(imageSimpson);
  card.appendChild(btnDatos);

  container.appendChild(card);
});

function mostrarInfo(personaje){
  console.log(`Usuario hizo click en ${personaje.Nombre}`);
  console.log(`Historia ${personaje.Historia}`);
  console.log(`Ocupacion ${personaje.Ocupacion}`);

  localStorage.setItem('UltimoClicPersonaje', JSON.stringify(personaje));
  
  alert(`${personaje.Historia}. ${personaje.Ocupacion}`);
}

