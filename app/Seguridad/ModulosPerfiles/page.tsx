import BodyComponent from "./BodyComponent";

const ModulosPerfiles = async () => {
  const data: any = await fetch(
    `${process.env.URL || "http://localhost:3000"
    }/api/Seguridad/GetModulosPerfiles`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const { perfiles } = data;

  return (
    <>
      {/* <Title title="Módulos" /> */}
      <BodyComponent data={perfiles} />
    </>
  );
};

export default ModulosPerfiles;
