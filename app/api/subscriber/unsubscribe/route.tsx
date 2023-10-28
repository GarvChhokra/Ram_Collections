import { getDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const { email }: any = await req.json();
  const db = await getDbConnection();
  try {
    const sql =
      "UPDATE subscribers SET unsubscribe_date = CURRENT_TIMESTAMP, subscription_status = 0 WHERE email = ?";

    const result: any = await db.executeQuery(sql, [email]);
    db.close();

    if (result?.affectedRows > 0) {
      return new NextResponse(
        JSON.stringify({
          status: "success",
          message: "UnSubscribed Successfully",
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
          message: "User is already unsubscribed",
        }),
        {
          status: 400,
          headers: { "Content-type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error while unsubscribing", error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Error unsubscribing with this email",
      }),
      {
        status: 500,
        headers: { "Content-type": "application/json" },
      }
    );
  }
}
