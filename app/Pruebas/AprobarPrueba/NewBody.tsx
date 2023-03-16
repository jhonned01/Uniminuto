"use client";
import Loading from "@/app/loading";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { ItemCompetencia } from "./ItemCompetencia";
import NewModalQuestion from "./NewModalQuestion";

const NewBody = () => {
  const searchParams = useSearchParams();
  const [Data, setData] = React.useState<any>({});
  const [LoadingData, setLoadingData] = React.useState<boolean>(false);

  const [ShowModal, setShowModal] = React.useState({
    Show: false,
    Questions: [],
    TipoPreguntas: "",
  } as {
    Show: boolean;
    Questions: any[];
    TipoPreguntas: string;
  });

  console.log(ShowModal);

  useEffect(() => {
    const getData = async () => {
      setLoadingData(true);
      const SubSede = searchParams?.get("SubSede");

      const res = await fetch(
        `/api/Pruebas/GetAllPreguntas?SubSede=${SubSede}`
      ).then((res) => res.json());
      setData(res);
      setLoadingData(false);
    };

    try {
      getData();
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos");
    }
  }, []);

  return (
    <div className="space-y-3 mt-3 px-8">
      {ShowModal.Show && (
        <NewModalQuestion ShowModal={ShowModal} setShowModal={setShowModal} />
      )}
      {LoadingData ? (
        <Loading />
      ) : (
        <>
          <ItemCompetencia
            Title="Genericas"
            Competencias={Data?.Genericas || []}
            setShowModal={setShowModal}
          />
          <ItemCompetencia
            Title="Espeficifica"
            Competencias={Data?.Espeficificas || []}
            setShowModal={setShowModal}
          />
        </>
      )}
    </div>
  );
};

export default NewBody;
