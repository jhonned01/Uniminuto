import BodyComponent from "./BodyComponent";

async function Formulario({ searchParams }: any) {
  const docum = searchParams?.Doc;
  const data: any = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Estudiantes/QueremosConocerte/Base/BaseInfoColegio?num=${docum}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  return (
    <>
      <BodyComponent data={data} docu={docum} InfoUrl={searchParams} />
    </>
  );
}
export default Formulario;
