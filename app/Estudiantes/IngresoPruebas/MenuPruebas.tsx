"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Iconos from "../../../utils/Iconos";
import Temporizador from "./Temporizador";

type Props = {
  Preguntas: any;
  setPreguntasResolver: React.Dispatch<React.SetStateAction<any>>;
  setPreguntaShow: React.Dispatch<React.SetStateAction<any>>;
};

const MenuPruebas = ({
  Preguntas,
  setPreguntasResolver,
  setPreguntaShow,
}: Props) => {
  const [Session, setSession] = useState({} as any);

  console.log(Preguntas);

  const [active, setActive] = useState(0 as number);

  return (
    <>
      <div className="shadow-md shadow-white rounded-md h-[98%] w-full bg-[#070e54] dark:bg-gray-900  text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="flex items-center justify-start md:justify-center pl-3 w-full h-28 bg-[#070e54] dark:bg-gray-800 border-none">
          <span className="text-center">
            {/* <Link href="/">
              <Image
                src={`/EscudoUniminuto.webp`}
                width={200}
                height={200}
                alt="Inicio"
                title="Escudo Uniminuto"
              />
            </Link> */}
            <Temporizador />
          </span>

          {/* <p className="hidden md:block md:break-normal	">
            {Session?.DemasInfo?.Nombre
              ? `${Session?.DemasInfo?.Nombre || ""} ${
                  Session?.DemasInfo?.Apellidos || ""
                }`
              : Session?.rol_nombre}
          </p> */}
        </div>

        <div>
          {Preguntas?.map((pregunta: any, key: number) => (
            <div key={key}>
              <div className="px-4 flex flex-row items-center h-8">
                <h1 className="text-sm font-bold tracking-wide text-yellow-500 uppercase">
                  {(pregunta?.TipoCompetencia == "G" && "Genérica") ||
                    (pregunta?.TipoCompetencia == "E" && "Específica")}
                </h1>
              </div>
              <ul>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setPreguntaShow(pregunta?.Preguntas[0]);
                    setPreguntasResolver(pregunta?.Preguntas);
                  }}
                  className="px-8 cursor-pointer"
                >
                  <div
                    className={` flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6`}
                  >
                    <span className="inline-flex justify-center items-center mr-4">
                      {pregunta?.CompetenciaNombre}{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPruebas;
