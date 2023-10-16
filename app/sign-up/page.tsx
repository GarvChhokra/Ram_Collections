"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

export default function Signup() {
  const router = useRouter();
  const dataForm = ["Full name", "Email", "Password", "Confirm Password"];
  const [pswd, setPswd] = useState("");
  const [confpswd, setConfPswd] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (pswd !== confpswd) {
      // Passwords don't match, show an error message.
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password did not match with the confirm password field",
      });
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/.test(pswd)) {
      // Password doesn't meet complexity requirements, show an error message.
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one number, one special character, and be at least 5 characters long.",
      });
    } else if (!/^[-'a-zA-Z\s]{2,}$/.test(fullName)) {
      // Full name contains invalid characters, show an error message.
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Full name can only contain letters, hyphens (-), and single quotes (') and must be at least 2 characters long.",
      });
    } else {
      try {
      const response:any = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: pswd,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Registration successful
        setEmail("");
        setFullName("");
        setConfPswd("");
        setPswd("");
        router.push("/");
        console.log(data.message);
      } else {
        // Handle registration error
        console.error('Registration failed: ',data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            href="/login"
            className="flex text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            <span className="mt-1 pr-1">
              <IoIosArrowBack />
            </span>
            Back to Sign In
          </Link>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-2">
            Sign up
          </h2>
          <div className="">
            <p className="text-sm text-gray-600">
              <strong>Password</strong> must contain at least one number, one special character, and be at least 5 characters long.
            </p>
            <p className="text-sm text-gray-600">
            <strong>Full name</strong> can only contain letters, hyphens (-), and single quotes (') and must be at least 2 characters long.
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit}
            method="POST"
          >
            {dataForm.map((itm) => (
              <div key={itm}>
                <label
                  htmlFor={itm}
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {itm}
                </label>
                <div className="mt-2">
                  {itm === "Password" || itm === "Confirm Password" ? (
                    <input
                      id={itm}
                      name={itm}
                      type="password"
                      value={itm === "Password" ? pswd : confpswd}
                      onChange={(e) => {
                        if (itm === "Password") {
                          setPswd(e.target.value);
                        } else {
                          setConfPswd(e.target.value);
                        }
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                    />
                  ) : (
                    <input
                      id={itm}
                      name={itm}
                      type={itm !== "Email" ? "text" : "email"}
                      required
                      value={
                        itm === "Full name"
                          ? fullName
                          : itm === "Email"
                          ? email
                          : ""
                      }
                      onChange={(e) => {
                        if (itm === "Full name") {
                          setFullName(e.target.value);
                        } else if (itm === "Email") {
                          setEmail(e.target.value);
                        } else {
                          // Handle other input fields here.
                        }
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                    />
                  )}
                </div>
              </div>
            ))}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
