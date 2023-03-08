import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "../../../../../config/db";

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const SubSede = searchParams.get("SubSede") || "";

  try {
    const {
      Fechas,
      Values: {
        TipoPrueba,
        CompetenciasGenericas,
        CompetenciasEspecificas,
        Programa,
        IdSubSede,
        SemestreAcademico,
      },
    } = await req?.json();

    let sqlParametrosPruebasBase = `INSERT INTO parametros_pruebas (subSedeId,tipo,semestre,programa,DateDocentesInicio,DateDocentesFin,DateEstudiantesInicio,DateEstudiantesFin) VALUES `;

    let sqlAsignacionPruebaBase = `INSERT INTO asignacionPrueba (competencia,docente,prueba) VALUES`;

    let NotificationDocente = `INSERT INTO notifications (user_id,message,date_range_start,date_range_end,Rol,Link) VALUES`;
    if (TipoPrueba === "SP") {
      sqlParametrosPruebasBase += `('${IdSubSede}','SP', '${SemestreAcademico}', '${Programa}','${Fechas?.Docentes?.Inicio?.substring(
        0,
        10
      )}', '${Fechas?.Docentes?.Fin?.substring(
        0,
        10
      )}','${Fechas?.Estudiantes?.Inicio?.substring(
        0,
        10
      )}','${Fechas?.Estudiantes?.Fin?.substring(0, 10)}')`;
    } else {
      // sqlParametrosPruebasBase += `('SS', '${SemestreId}', '${InicioPrueba}', '${FinPrueba}','${Programa}','${IdSubSede}')`;
    }

    console.log(sqlParametrosPruebasBase);

    const [AddParametrosPruebas]: any = await connectionPool.query(
      `${sqlParametrosPruebasBase}`
    );

    if (CompetenciasGenericas?.length) {
      CompetenciasGenericas?.forEach((item: any) => {
        sqlAsignacionPruebaBase += `('${item?.IdAsignatura}','${
          item?.DocenteId || ""
        }','${AddParametrosPruebas?.insertId}'),`;

        NotificationDocente += `  ('${
          item?.DocenteId
        }','Se le ha asignado subir preguntas para las competencia <span style="color: #584ed0;"> ${
          item?.NombreAsignatura
        } </span> .','${Fechas?.Docentes?.Inicio?.substring(
          0,
          10
        )}','${Fechas?.Docentes?.Fin?.substring(
          0,
          10
        )}',2,'/Pruebas/IngresoPreguntas?SubSede=${IdSubSede}&IdRol=2&IdUser=${
          item?.DocenteId
        }&IdPrueba=${AddParametrosPruebas?.insertId}'),`;
      });
    }
    if (CompetenciasEspecificas?.length) {
      CompetenciasEspecificas?.forEach((item: any) => {
        sqlAsignacionPruebaBase += `('${item?.IdAsignatura}','${
          item?.DocenteId || ""
        }','${AddParametrosPruebas?.insertId}'),`;
        NotificationDocente += `  ('${
          item?.DocenteId
        }','Se le ha asignado subir preguntas para las competencia <span style="color: #584ed0;"> ${
          item?.NombreAsignatura
        } </span> .','${Fechas?.Docentes?.Inicio?.substring(
          0,
          10
        )}','${Fechas?.Docentes?.Fin?.substring(
          0,
          10
        )}',2,'/Pruebas/IngresoPreguntas?SubSede=${IdSubSede}&IdRol=2&IdUser=${
          item?.DocenteId
        }&IdPrueba=${AddParametrosPruebas?.insertId}'),`;
      });
    }

    // recortar sqlAsignacionPruebaBase el ultimo elemento
    sqlAsignacionPruebaBase = sqlAsignacionPruebaBase.substring(
      0,
      sqlAsignacionPruebaBase?.length - 1
    );

    const [AddAsingnacionPrueba] = await connectionPool.query(
      `${sqlAsignacionPruebaBase}`
    );

    // recortar NotificationDocente el ultimo elemento
    NotificationDocente = NotificationDocente.substring(
      0,
      NotificationDocente?.length - 1
    );

    console.log("NotificationDocente", NotificationDocente);

    const [AddNotificationDocente] = await connectionPool.query(
      `${NotificationDocente}`
    );

    return NextResponse.json(
      {
        body: "La prueba ha sido agregada con éxito.",
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
