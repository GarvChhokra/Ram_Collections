import { getDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const { email }: any = await req.json();
  const db = await getDbConnection();
  try {
    const sql =
      "INSERT INTO subscribers (email, subscription_date, subscription_status) VALUES(? , CURRENT_TIMESTAMP, 1)";

    const result: any = await db.executeQuery(sql, [email]);
    db.close();

    if (result?.affectedRows > 0) {
      return new NextResponse(
        JSON.stringify({
          status: "success",
          message: "Subscribed Successfully",
        }),
        {
          status: 200,
          headers: { "Content-type": "application/json" },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: "failed",
          message: "User is already subscribed",
        }),
        {
          status: 400,
          headers: { "Content-type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error while subscribing", error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Error subscribing with this email",
      }),
      {
        status: 500,
        headers: { "Content-type": "application/json" },
      }
    );
  }
}
