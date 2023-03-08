import Title from "../../../../../Title";
import BodyComponent from "./BodyComponent";

type props = {
  params: {
    doc: string;
    id: string;
    rol: string;
  };
};

const EditUser = ({ params }: props) => {
  return (
    <>
      <Title title="Edita tu información " />
      <BodyComponent params={params} />
    </>
  );
};

export default EditUser;
