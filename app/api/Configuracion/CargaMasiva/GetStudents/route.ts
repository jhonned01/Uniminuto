import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "../../../../../config/db";
// export const dynamic = "auto";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const SubSede = searchParams.get("SubSede");

  try {
    const [AlumnosRes]: any = await connectionPool.query(
      `select alumno_num_docu as Documento,concat (alumno_nom1,' ',alumno_nom2) as Nombre,concat (alumno_ape1,' ',alumno_ape2) as Apellidos,alumno_email as Correo,alumno_celular as Celular,alumno_genero as Genero,alumno_rum as RUM,alumno_id as Id, usuario.pass as Pass, usuario.login as Usuario, pfc_alumno.tipo_docu_id as TipoDocumento, subSedes.nombre as NombreSubSede from pfc_alumno LEFT JOIN usuario ON (pfc_alumno.alumno_id=usuario.idUsuario) INNER JOIN subSedes ON subSedes.id=usuario.subsede WHERE usuario.rol=3 ${
        SubSede && SubSede != "0" ? `and usuario.subsede = '${SubSede}'` : ""
      }`
    );

    return NextResponse.json(
      { estudiantes: AlumnosRes || [] },
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
