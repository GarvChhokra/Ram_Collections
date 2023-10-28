import { getDbConnection } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const db = await getDbConnection();
  const { email, password }: any = await req.json();
  if (!email || !password) {
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Invalid field/s" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const sql = "SELECT * from users where email = ?";
    let result = await db.executeQuery(sql, [email]);
    if (await bcrypt.compare(password, result[0].Password)) {
      const token = jwt.sign({ email }, "hskjhjkfsk");
      const cookie = serialize("authToken", token, {
        httpOnly: true, // Makes the cookie accessible only via HTTP(S) requests
        maxAge: 60, // Set the expiration time in seconds (1 min in this example)
        sameSite: "strict", // Adjust the SameSite attribute as needed for your application
        path: "/", // Adjust the path attribute as needed for your application
      });
      // Password is correct
      return new NextResponse(
        JSON.stringify({
          status: "success",
          message: "Authentication Successfull",
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": cookie,
          },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: "failure",
          message: "Incorrect Email or Password",
        }),
        {
          status: 401,
          headers: { "content-type": "application/json" },
        }
      );
    }
    db.close();
  } catch (error) {
    db.close();
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Authentication failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
