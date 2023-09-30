"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ModalSignUp = () => {
  const modalOpen = () => {
    console.log("model open")
      Swal.fire({
        title: "Sign up for Promotions",
        input: 'email',
        inputPlaceholder: 'Enter your email here',
        showCancelButton: true,
        confirmButtonText: 'Sign Up',
        cancelButtonText: 'Cancel',
      }).then((result)=>{
        if(result.isConfirmed){
          const emailSignUp = result.value;
          Swal.fire('Signed up!', '', 'success');
        }
      })
  }

  return (
    <>
    <a onClick={modalOpen} className='hover:underline cursor-pointer'>
      Sign up for Promotions
    </a>
    </>
  );
}

export default ModalSignUp;
