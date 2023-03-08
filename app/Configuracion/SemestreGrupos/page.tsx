import BodyGradosGrupos from "./BodyGradosGrupos";

const GradosGrupos = async ({ searchParams }: any) => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/GradosGrupos/GetGradosGrupos?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const grados: any[] = data.grados;

  return (
    <>
      <BodyGradosGrupos grados={grados} />
    </>
  );
};

export default GradosGrupos;
