import BodyComponent from "./BodyComponent";

const IngresoPreguntas = ({ searchParams }: any) => {
  return (
    <>
      <BodyComponent urlInfo={searchParams} />
    </>
  );
};

export default IngresoPreguntas;
