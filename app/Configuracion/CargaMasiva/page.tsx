import BodyComponent from "./BodyComponent";

const CargaMasiva = async ({ searchParams }: any) => {
  const res: any = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/CargaMasiva/GetStudents?SubSede=${
      searchParams?.SubSede || ""
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const { estudiantes } = res;

  return (
    <>
      <BodyComponent data={estudiantes} />
    </>
  );
};

export default CargaMasiva;
