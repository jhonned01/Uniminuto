import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connectionPool from "../../../../../config/db";

export async function GET(req: NextRequest) {
  try {
    const [GetRectorias]: any = await connectionPool.query(
      `
        SELECT id as Id, nombre as Nombre FROM rectorias
        `
    );

    return NextResponse.json(
      { rectorias: GetRectorias },
      {
        status: 500,
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
