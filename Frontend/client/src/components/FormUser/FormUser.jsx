//IMPORTS REACT -REDUX
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"

//IMPORTS ACTIONS
//import { postNewUser } from "../../Reducer/menuActions";

//IMPORTS FIREBASE
import firebaseApp from "../../Firebase/Credentials";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";
import { getFirestore, doc, collection, setDoc, Firestore, query, getDocs } from "firebase/firestore";


//IMPORTS ALERTS
const Swal = require('sweetalert2')

//FUNCTIONS ALERTS VALIDATES
function validateEmail() {
  const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      width: '15%',
      padding: '0.3rem',
      //timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  })
  Toast.fire({
      icon: 'error',
      html: '<b class="rojo">Invalid email</b>'
  })
}

function validatePassword(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    width: '24%',
    padding: '0.3rem',
    //timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
Toast.fire({
    icon: 'error',
    html: '<b class="rojo">Password required at least 6 characters</b>'
})
}

function validateName(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    width: '15%',
    padding: '0.3rem',
    //timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
Toast.fire({
    icon: 'error',
    html: '<b class="rojo">Name is required</b>'
})
}

function validateLastName(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    width: '15%',
    padding: '0.3rem',
    //timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
Toast.fire({
    icon: 'error',
    html: '<b class="rojo">Last name is required</b>'
})
}

function createdS(){
    Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Created Succesfully',
          showConfirmButton: false,
          timer: 2000,
          background:'#f5f3f3'
        })
}


//--------------------------------------     ~ FORM USER ~     --------------------------------------
export default function FormUser(){
    
  //CONST  FIREBASE
    const auth = getAuth(firebaseApp); //desde api
    const firestore = getFirestore(firebaseApp); //traerse la base de datos
   // const q = query(collection(firestore, "users"))

    //ESTADOS
    const [isRegistering, setIsRegistering] = useState(false); //estado que consulta si se esta registrando o no
    const [allUsers, setAllUsers] = useState()


  // useEffect(()=>{
  //   const userarray = []
  //   async function listUsers(){
  //     const querySnapshot = await getDocs(q)
  //     querySnapshot?.forEach((doc) => {
  //       userarray.push(doc?.data());
  //      })
  //      setAllUsers(userarray)
  //   }
  //   listUsers()
  // },[])



    async function registerUser(email, name,lastname, password) { //FUNCION REGISTRAR USUARIO
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        name,
        lastname,
        password

        ).then((firebaseUser) => {
            return firebaseUser;
          });
      const docuRef = doc(firestore, `users/${userInfo.user.uid}`);
      setDoc(docuRef, { email: email, name:name, lastname:lastname, rol:'user'});
    return
    }



  function submitHandler(e) {
    e.preventDefault();
    if (isRegistering) {
      // registrar
      const email = e.target.elements.email.value;
      const name = e.target.elements.name.value
      const lastname = e.target.elements.lastname.value
      const rol = 'user'
      const password = e.target.elements.password.value;
     
      
      if(email.length < 5) return validateEmail();
      // if(allUsers.find((u)=>u.email === email)){return(
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'error',
      //     title: 'Email already in use',
      //     showConfirmButton: false,
      //     timer: 2000,
      //     background:'#f5f3f3'
      //   })

      // )}
      if(!email.includes('@') || !email.includes('.com')) return validateEmail();
      if(password.length < 6) return validatePassword();
      if(!name) return validateName();
      if(!lastname) return validateLastName();
      registerUser(email, name, lastname, rol, password);
      return(
        Swal.fire({
          title: 'User created Succesfully',
          icon: 'success',
          width: '30%',
          padding: '1rem',
          backdrop: false,
          position: 'center',
          showCancelButton: false,
          confirmButtonText: 'Home',
          //cancelButtonText: "Stay",
          //cancelButtonColor: '#e9943e',
          confirmButtonColor: '#FFA055',


      })
      .then((result) => {
          if (result.isConfirmed) {
              window.location.href = "/";
            }
            
          }
          
          )
      
      )
    } 
    if(!isRegistering){
      // login

          const email = e.target.elements.email.value;
          const password = e.target.elements.password.value;
          if(email.length < 5) return validateEmail()
          if(!email.includes('@') || !email.includes('.com')) return validateEmail()
          if(password.length < 6) return validatePassword()
          // if(!allUsers.find((u)=>u.email === email)){return(
          //   Swal.fire({
          //     position: 'center',
          //     icon: 'error',
          //     title: 'Invalid email or password',
          //     showConfirmButton: false,
          //     timer: 2000,
          //     background:'#f5f3f3'
          //   })
          // )}
          signInWithEmailAndPassword(auth, email, password);
      return(Swal.fire({
        title: 'Loged Succesfully',
        icon: 'success',
        width: '30%',
        padding: '1rem',
        backdrop: false,
        position: 'center',
        showCancelButton: false,
        confirmButtonText: 'Home',
        //cancelButtonText: "Stay",
        //cancelButtonColor: '#e9943e',
        confirmButtonColor: '#FFA055',


    })
    .then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/";
          }
          
        }
        
        ))
    }
  }

 async function loginWithGoogle(e){
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    await signInWithPopup(auth, provider)
    return(Swal.fire({
      title: 'Loged Succesfully',
      icon: 'success',
      width: '30%',
      padding: '1rem',
      backdrop: false,
      position: 'center',
      showCancelButton: false,
      confirmButtonText: 'Home',
      //cancelButtonText: "Stay",
      //cancelButtonColor: '#e9943e',
      confirmButtonColor: '#FFA055',


  })
  .then((result) => {
      if (result.isConfirmed) {
          window.location.href = "/";
        }
        
      }
      
      ))
}
  

return(
    <div className="bg-primary w-screen h-screen mt-32">
      <div className="border-2 w-[35%] rounded-2xl ml-[33%] drop-shadow-sm">
      <div className="flex justify-center items-center py-6">
        <h1 className='flex mb-3 text-gray-600 font-medium text-[40px]'>Welcome to <span className="text-orange-400 font-bold ml-2">Foodify</span></h1>
      </div>
        <div className="flex justify-center" >
        <h1 className="text-textColor text-3xl mt-10 mb-10">{isRegistering ? "Sign up" : "Sign-In to continue"}</h1>
        </div>

      <div className="flex items-center justify-center mt-5">
          <form className="flex flex-col items-start gap-4" onSubmit={submitHandler}>
              <label className="text-textColor text-xl">Email
              <input className="ml-3 text-textColor text-base rounded-md border-0 bg-white border-orange-400" placeholder="@example.com" type="email" id="email" />
          </label>
          <label className="text-textColor text-xl">
            Password:
            <input className="ml-3 text-textColor text-base  rounded-md border-0 bg-white border-orange-400" placeholder="******" type="password" id="password" />
          </label>
          
          {
            isRegistering ? 
            <div>
            <label className="text-textColor text-xl">
            Name:
            <input className="ml-3 text-ptextColor text-base p-2 rounded-md border-0 bg-white border-orange-400" type="name" id="name" />
          </label>
            <br/>
            <br/>
          <label className="text-textColor text-xl">
            Last Name:
            <input className="ml-3 text-textColor text-base p-2  rounded-md border-0 bg-white border-orange-400"  type="lastname" id="lastname" />
          </label>
          <br/>
          <br/>
            </div>
              :
              <>
              </>

          
          }
        <div  style={{display: 'inline', flexDirection: 'row', marginTop: '12px'}}>
          
          <input className="text-gray-500 font-semibold text-xl cursor-pointer hover:text-naranja hover:font-semibold transition-all ease-in-out"
            cursor="pointer" 
            type="submit"
            value={isRegistering ? "Register" : "Done"}
          />
          <button style={{display: 'inline', marginLeft:'40px'}} onClick={(e)=>{loginWithGoogle(e)}}>Continue with <FcGoogle className=" inline text-2xl"/></button>
        </div>
        </form>
        </div>


          <div className="flex justify-center items-center mt-1 pb-10">

            {isRegistering ?
            <div style={{display: 'inline', flexDirection: 'row', marginTop: '12px'}}>
            <p className="inline -ml-12">If you already have an account <button className="inline text-textColor mt-8 gap-2 text-lg hover:text-naranja   transition-all ease-in-out" onClick={() => setIsRegistering(!isRegistering)}>Sign In</button></p>
          </div>
            :
            <div style={{display: 'inline', flexDirection: 'row', marginTop: '12px'}}>
            <p className="inline -ml-12">If you dont have an account <button  className="inline text-textColor mt-8  gap-2 text-lg hover:text-naranja  transition-all ease-in-out" onClick={() => setIsRegistering(!isRegistering)}>Sign Up</button></p>
            </div>
            }


            </div>


            </div>
    </div>

)
}