import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "../../../../../config/db";

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const SubSede = searchParams.get("SubSede") || "";

  try {
    const { Pregunta, idPregunta, idPrueba, idDocente, TipoPreguntas } =
      await req?.json();

    if (TipoPreguntas == 3) {
      const [UpdateAprobacionPrueba]: any = await connectionPool.query(
        `UPDATE preguntas_pruebas SET aprobo = '2',pregunta = '${Pregunta}' WHERE id = '${idPregunta}'`
      );
      const [UpdateSubPreguntas]: any = await connectionPool.query(
        `UPDATE preguntas_pruebas SET aprobo = '2' WHERE padre = '${idPregunta}'`
      );
    } else {
      const [UpdateAprobacionPrueba]: any = await connectionPool.query(
        `UPDATE preguntas_pruebas SET aprobo = '2',pregunta = '${Pregunta}' WHERE id = '${idPregunta}'`
      );
    }

    return NextResponse.json(
      {
        body: "Pregunta aprobada correctamente",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { body: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
