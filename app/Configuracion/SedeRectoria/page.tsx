import BodyComponet from "./BodyComponet";

const Rectorias = async () => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/SedeRectoria/GetRectoriaSede`,
    { cache: "no-store" }
  ).then((res) => res.json());

  // data.RectoriasSedes;
  return (
    <>
      <BodyComponet info={data?.RectoriasSedes} />
    </>
  );
};

export default Rectorias;
