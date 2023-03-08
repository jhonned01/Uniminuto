import Title from "../../Title";
import DatosInput from "./DatosInput";

const DatosUniversidad = async ({ searchParams }: any) => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/Datos/MunicipioSelected?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  let InfoBase = {} as {
    InfoBase: { nombreUniversidad: string };
  };

  if (searchParams?.SubSede != 0 || searchParams?.SubSede != undefined) {
    const getInfoBase = await fetch(
      `${
        process.env.URL || "http://localhost:3000"
      }/api/Configuracion/Datos/GetDatos?SubSede=${searchParams?.SubSede}`,
      { cache: "no-store" }
    ).then((res) => res.json());

    InfoBase = getInfoBase || {};
  }

  const { IndexSelected } = data;

  return (
    <>
      <Title title={`Datos de la Universidad `} />

      <DatosInput IndexSelected={IndexSelected} info={InfoBase || {}} />
    </>
  );
};

export default DatosUniversidad;
