import { getDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
  console.log("Products API");
  const db = await getDbConnection();

  try {
    const sql = "SELECT * from products";
    const products = await db.executeQuery(sql);
    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Products Fetched",
        data: products,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Category not found",
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
