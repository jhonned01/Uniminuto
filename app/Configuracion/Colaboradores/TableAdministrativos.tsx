"use client";
import DataTable from "react-data-table-component";
import { Administrativo, VisibilidadModal } from "../../../typings";
import { customStyles } from "../../../utils/CustomStylesTables";
import React from "react";
import Image from "next/image";

type Props = {
  info: Administrativo[];
  setShowModal: React.Dispatch<React.SetStateAction<VisibilidadModal>>;
  setAdministrativos: React.Dispatch<React.SetStateAction<Administrativo[]>>;
  setInfoEditar: React.Dispatch<React.SetStateAction<Administrativo>>;
  setShowImage: React.Dispatch<
    React.SetStateAction<{ Image: string; Visible: boolean }>
  >;
};
const TableAdministrativos = ({
  info,
  setShowModal,
  setAdministrativos,
  setInfoEditar,
  setShowImage,
}: Props) => {
  const columns: any = [
    {
      name: "COA",
      selector: (row: any) => row.NombreSubSede,
      sortable: true,
      wrap: true,
      maxWidth: "150px",
    },
    {
      name: "Nombre de Usuario",
      selector: (row: any) => (
        <div className=" block  lg:flex lg:gap-3 px-6 py-4 font-normal text-gray-900">
          <div
            className="relative h-10 w-10 cursor-pointer"
            onClick={() => {
              setShowImage({
                Image: `https://sygescol.uniminuto.sistemasivhorsnet.com/sygescol2023/images/fotos/administrativos/${
                  row?.Imagen || "SinFotoAdmin.png"
                }`,
                Visible: true,
              });
            }}
          >
            <Image
              src={`https://sygescol.uniminuto.sistemasivhorsnet.com/sygescol2023/images/fotos/administrativos/${
                row?.Imagen || "SinFotoAdmin.png"
              }`}
              alt="Foto Colaborador"
              width={40}
              height={40}
              className="rounded-full object-cover object-center"
            />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-900">
              {row.Nombre} {row.Apellidos}
            </div>
            <div className="text-gray-500">
              {row.Correo || "No registra correo"}
            </div>
          </div>
        </div>
      ),
      sortable: true,
      wrap: true,
      grow: 2.4,
    },

    {
      name: "Documento",
      selector: (row: any) => row.Documento,
      sortable: true,
      wrap: true,
      maxWidth: "150px",
    },
    {
      name: "Cargo",
      selector: (row: any) => row.Cargo,
      sortable: true,
      wrap: true,
    },

    {
      name: "Usuario",
      selector: (row: any) => row.Usuario,
      sortable: true,
      wrap: true,
    },
    {
      name: "Contraseña",
      selector: (row: any) => row.Pass,
      sortable: true,
      wrap: true,
    },
    {
      name: "Operaciones",
      selector: (row: any) => (
        <div className="flex flex-wrap justify-center items-center text-red-900">
          <button
            title="Eliminar Registro"
            onClick={async () => {
              const validate = confirm(
                "¿Está seguro de eliminar este administrativo?"
              );
              if (validate) {
                // fecha de eliminación
                try {
                  const responseRemove = await fetch(
                    "/api/Configuracion/Administrativos/DeleteAdmin",
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        id: row.Id,
                      }),
                    }
                  ).then((res) => res.json());

                  setAdministrativos((prev) =>
                    prev.filter((item) => item.Id != row.Id)
                  );

                  alert(`${responseRemove.body}`);
                } catch (error) {
                  console.error(error);
                  alert("Error al eliminar");
                }

                // alert("Eliminado");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <button
            title="Editar Registro"
            onClick={(e) => {
              e.preventDefault();

              setInfoEditar(row);
              setShowModal({
                AddVisible: false,
                EditVisible: true,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0D7D1E"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
      ),
      sortable: true,
      wrap: true,
      maxWidth: "115px",
    },
  ];
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <>
      <div className="border-t-2 border-t-white">
        <DataTable
          title="Lista de Colaboradores"
          columns={columns}
          paginationComponentOptions={paginationComponentOptions}
          data={info}
          persistTableHead
          pagination
          responsive
          noDataComponent="No hay Colaboradores"
          customStyles={customStyles}
          paginationPerPage={7}
        />
      </div>
    </>
  );
};

export default TableAdministrativos;
