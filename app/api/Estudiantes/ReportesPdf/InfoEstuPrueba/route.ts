import connectionPool from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);

  try {
    const IdPrueba = searchParams.get("IdPrueba");
    const SubSede = searchParams.get("SubSede");
    const IdRol = searchParams.get("IdRol");
    const IdUser = searchParams.get("IdUser");
    const Doc = searchParams.get("Doc");

    const [InfoMatriculaEstudiante]: any = await connectionPool.query(
      `SELECT programa,semestre,matri_id FROM pfc_matricula WHERE alumno_id='${IdUser}' and subSedeId='${SubSede}'`
    );
    const { programa, semestre, matri_id } = InfoMatriculaEstudiante[0];

    const [competenciasRes]: any = await connectionPool.query(`
    SELECT preguntas_pruebas.id as PreguntaId,preguntas_pruebas.tipo as TipoPregunta,preguntas_pruebas.padre,pfc_ejes.eje_id idCompetencia, pfc_ejes.eje_nom CompetenciaNombre,pregunta,opciones,punto,pfc_ejes.eje_tip as TipoCompetencia,preguntas_pruebas.respuesta,preguntas_pruebas.prueba as IdPrueba,asignacionPrueba.Hora,asignacionPrueba.Minutos FROM preguntas_pruebas INNER JOIN pfc_ejes ON pfc_ejes.eje_id=preguntas_pruebas.competencia INNER JOIN asignacionPrueba ON (asignacionPrueba.competencia=pfc_ejes.eje_id) WHERE preguntas_pruebas.prueba='${IdPrueba}' and preguntas_pruebas.aprobo=2 ORDER BY TipoCompetencia,RAND() desc
    `);

    const [ResponsePruebaEstudiante]: any = await connectionPool.query(
      `SELECT respuestas_estudiante.id as RespuestaId,respuestas_estudiante.respuesta RespuestaEstudiante, preguntas_pruebas.respuesta as RespuestaCorrecta,preguntas_pruebas.punto as PuntosPregunta,preguntas_pruebas.competencia as CompetenciaPregunta FROM respuestas_estudiante INNER JOIN preguntas_pruebas ON respuestas_estudiante.pregunta=preguntas_pruebas.id WHERE respuestas_estudiante.prueba='${IdPrueba}' and respuestas_estudiante.estudiante='${matri_id}' `
    );

    return NextResponse.json(
      { body: "bien señor" },
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
