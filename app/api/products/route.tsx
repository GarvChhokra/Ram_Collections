import { getDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  console.log("Products API triggered");
  const db = await getDbConnection();
  const { category }: any = req.json();

  try {
    const sql = "SELECT * from products where category = ?";
    const products = await db.executeQuery(sql, [category]);
    console.log(products);
  } catch (error) {}
}
