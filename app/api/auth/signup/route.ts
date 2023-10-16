import { getDbConnection } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { parse, serialize } from "cookie";

export async function POST(req: NextRequest) {
  console.log("POST request");
  const db = await getDbConnection();
  const saltRounds = 14;
  const { name, email, password }: any = await req.json();
  if (!name || !email || !password) {
    return new NextResponse(
      JSON.stringify({ status: "error", message: "Invalid field/s" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  console.log("Before hashing");
  const hashPswd = await bcrypt.hash(password, saltRounds);
  console.log("After hashing");
  console.log(hashPswd);
  try {
    const sql =
      "INSERT INTO users (username, email, password, RegistrationDate) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";

    const rows: any = await db.executeQuery(sql, [name, email, hashPswd]);
    db.close();
    const token = jwt.sign({ email }, "hskjhjkfsk");

    const cookie = serialize("authToken", token, {
      httpOnly: true, // Makes the cookie accessible only via HTTP(S) requests
      maxAge: 60, // Set the expiration time in seconds (1 min in this example)
      sameSite: "strict", // Adjust the SameSite attribute as needed for your application
      path: "/", // Adjust the path attribute as needed for your application
    });
    if (rows?.affectedRows > 0) {
      console.log("Registration successful");
      return new NextResponse(
        JSON.stringify({
          status: "success",
          message: "Registration successful",
          token: token,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ status: "error", message: "User already exists" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (e: any) {
    console.log(e);
    db.close();

    return new NextResponse(
      JSON.stringify({ status: "error", message: "Registration failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
