let quien = [
  "El vecino no se dio cuenta y",
  "Mi hermnao",
  "Un amigo",
  "Mi abuelo",
  "Una niña",
];
let queHizo = [
  "se llevo sin querer",
  "Me hizo una mala broma y daño",
  "robó",
  "quemo sin culpa",
  "mancho de cafe",
  "mojo con la manguera",
  "se limpio la boca con ",
];
let cuando = [
  "antes de venir a clases",
  "cuando mi padre me pregunatba por",
  "cuando estaba desayunando",
  "mientras estaba preparando la mochila",
];

const generadorDeExcusas = function (a, b, c) {
  let sujeto = Math.floor(Math.random() * a.length);
  let verbo = Math.floor(Math.random() * b.length);
  let accion = Math.floor(Math.random() * c.length);
  return `${a[sujeto]} ${b[verbo]} mi tarea ${c[accion]}`;
};
function onLoad() {
  const miExcusa = document.getElementById("miExcusa");
  miExcusa.innerHTML = generadorDeExcusas(quien, queHizo, cuando);
}
window.onload = onLoad;
