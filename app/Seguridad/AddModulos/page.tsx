import BodyComponent from "./BodyComponent";

const AddModulos = async ({ searchParams }: any) => {
  // const data = await fetch(
  //   `${process.env.URL || ""}api/Seguridad/GetModulos?SubSede=
  //       ${searchParams?.SubSede || ""}
  //     `,
  //   {
  //     cache: "no-store",
  //   }
  // ).then((res) => res.json());

  // const { Modulos } = data;
  const Modulos: any = [];
  return (
    <>
      <BodyComponent info={Modulos || []} />
    </>
  );
};

export default AddModulos;
