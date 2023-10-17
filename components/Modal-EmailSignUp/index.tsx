"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ModalSignUp = () => {
  const modalOpen = async () => {
    Swal.fire({
      title: "Sign up for Promotions",
      input: "email",
      inputPlaceholder: "Enter your email here",
      showCancelButton: true,
      confirmButtonText: "Sign Up",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const emailSignUp = result.value;
        try {
          const response: any = await fetch("/api/subscriber/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailSignUp,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            Swal.fire("Signed up!", "", "success");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
    <a onClick={modalOpen} className='hover:underline cursor-pointer'>
      Sign up for Promotions
    </a>
    </>
  );
}

export default ModalSignUp;
