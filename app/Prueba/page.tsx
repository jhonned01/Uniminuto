"use client";
const Prueba = () => {
  // genera una funcion que genere numeros aleatorios entre 0 y 6
  const random = () => Math.floor(Math.random() * 6);

  const numero = 1;
  console.log("numero", numero);

  // un objeto con los colores

  const Colors = ["red", "blue", "green", "orange", "pink", "fuchsia"];

  return <div className={`${numero == 1 && "bg-red-500"}  `}>{numero}</div>;
};

export default Prueba;
