import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "@/config/db";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req?.json();

    const [PfcAlumno]: any = await connectionPool.query(`
    DELETE FROM pfc_alumno WHERE alumno_id = ${id}
    `);

    if (PfcAlumno?.affectedRows === 0) {
      return NextResponse.json(
        { body: "No se pudo eliminar el estudiante" },
        {
          status: 400,
        }
      );
    }
    const [IdMatricula]: any = await connectionPool.query(`
    sELECT matri_id as MatriId FROM pfc_matricula WHERE alumno_id =${id}`);

    if (IdMatricula.length === 0) {
      return NextResponse.json(
        { body: "No se puedo eliminar el grupo" },
        {
          status: 400,
        }
      );
    }

    const [PfcGrupo]: any = await connectionPool.query(`
    DELETE FROM pfc_matr_grup WHERE matri_id = ${IdMatricula[0]?.MatriId}
    `);

    if (PfcGrupo?.affectedRows === 0) {
      return NextResponse.json(
        { body: "No se pudo eliminar el grupo" },
        {
          status: 400,
        }
      );
    }

    const [PfcMatricula]: any = await connectionPool.query(`
    DELETE FROM pfc_matricula WHERE alumno_id = ${id}
    `);

    if (PfcMatricula?.affectedRows === 0) {
      return NextResponse.json(
        { body: "No se pudo eliminar la Matrícula" },
        {
          status: 400,
        }
      );
    }

    const [UsuarioDelete]: any = await connectionPool.query(`
    DELETE FROM usuario WHERE usu_fk = ${id}
    `);
    if (UsuarioDelete?.affectedRows === 0) {
      return NextResponse.json(
        { body: "No se pudo eliminar el usuario" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { body: "Se eliminó correctamente" },
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
