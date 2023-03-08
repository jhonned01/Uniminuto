"use client";
import { useState } from "react";
import { Administrativo, VisibilidadModal } from "../../../typings";
import Header from "./Header";
import TableAdministrativos from "./TableAdministrativos";
import { Lightbox } from "react-modal-image";

type props = {
  data: Administrativo[];
};

const BodyComponent = ({ data }: props) => {
  const [administrativos, setAdministrativos] =
    useState<Administrativo[]>(data);

  const [showModal, setShowModal] = useState<VisibilidadModal>({
    AddVisible: false,
    EditVisible: false,
  });

  const [InfoEditar, setInfoEditar] = useState({} as Administrativo);

  const [ShowImage, setShowImage] = useState<{
    Image: string;
    Visible: boolean;
  }>({
    Image: "",
    Visible: false,
  });

  return (
    <>
      {ShowImage?.Visible && (
        <Lightbox
          medium={ShowImage?.Image}
          // large={ShowImage?.Image}
          // alt="Imagen COlaborador"
          onClose={(ShowImage: any) =>
            setShowImage({ Image: "", Visible: false })
          }
          hideDownload={true}
          hideZoom={true}
          showRotate={false}
        />
      )}
      <Header
        setAdministrativos={setAdministrativos}
        setShowModal={setShowModal}
        showModal={showModal}
        InfoEditar={InfoEditar}
      />
      <TableAdministrativos
        info={administrativos}
        setAdministrativos={setAdministrativos}
        setShowModal={setShowModal}
        setInfoEditar={setInfoEditar}
        setShowImage={setShowImage}
      />
    </>
  );
};

export default BodyComponent;
