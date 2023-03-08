import Title from "../../Title";
import BodyComponent from "./BodyComponent";

const IngresoPruebas = async ({ searchParams }: any) => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Estudiantes/GetPruebasEstudiante?SubSede=${
      searchParams?.SubSede
    }&IdRol=${searchParams?.IdRol}&IdUser=${searchParams?.IdUser}&Doc=${
      searchParams?.Doc
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const pruebas: any[] = data?.pruebas;
  return (
    <>
      <Title title="Presentar Prueba" />
      <BodyComponent data={pruebas} />
    </>
  );
};

export default IngresoPruebas;
