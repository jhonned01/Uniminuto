import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "../../../../../config/db";

export async function GET(req: NextRequest) {
  const { id } = await req?.json();

  try {
    const [SedesRectorias]: any = await connectionPool.query(`
      select id as Id, nombreSede as NombreSede from sedes where idRectoria = ${id}`);

    console.log(`
      select id as Id, nombreSede as NombreSede from sedes where idRectoria = ${id}`);

    return NextResponse.json(
      { sedesRectorias: SedesRectorias },
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
