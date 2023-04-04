import { NextResponse } from "next/server";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);

  try {
    const IdPrueba = searchParams?.get("IdPrueba");
    const SubSede = searchParams?.get("SubSede");
    const IdRol = searchParams?.get("IdRol");
    const IdUser = searchParams?.get("IdUser");
    const Doc = searchParams?.get("Doc");

    // return NextResponse.json({
    //   user: user as User[],
    //   DemasInfo,
    //   Menu: Menu || [],
    //   Notificaciones: Notificaciones || [],
    // });
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
