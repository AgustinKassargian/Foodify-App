





// import React from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import logo from '../../../../utils/LogoMain.png'
// import { MdAccountCircle, MdContactSupport, MdOutlineLocalMall, MdSearch } from 'react-icons/md'



// function NavBarAdmin() {
//   function handleClick(){
//     window.location.reload()
//   }
//   return (
//     <header className='bg-slate-400 h-36'>
//         <div className="hidden sm:flex h-full items-center justify-between m-0 p-5">
//           <motion.button whileTap={{scale: 0.6}}>
//           <button onClick={handleClick}><img src={logo} className="w-44" alt="logo" /></button>
//           </motion.button>
//           <div className="flex items-center gap-8">

//           <Link to={"/soporte"}>
            
//             <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer list-none">
//             <MdContactSupport/> Soporte
//             </li>
//             </Link>
//             <Link to={"/"} target="_blank">
//             <li  className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer list-none">
//             <MdOutlineLocalMall/> Ver mi tienda
//             </li>
//             </Link>
//             <Link to={"/cuenta"}>
//             <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer list-none">
//               <MdAccountCircle/> Cuenta
//             </li>
//             </Link>
//           </div>

//         {/* <div>
//         <Link to='/soporte'>Soporte</Link>
//         <Link to='/tienda'>Ver Mi Tienda</Link>
//         <Link to='/cuenta'>Cuenta</Link>
//         </div> */}
//         </div>
//     </header>
//   )
// }

// function NavBarAdmin() {
//   function handleClick() {
//     window.location.reload()
//   }
//   return (
//     <header className='bg-primary h-36 border-b-4'>
//       <div className="hidden sm:flex h-full items-center justify-between m-0 p-5">
//         <motion.button  onClick={handleClick} whileTap={{ scale: 0.6 }}>
//           <img src={logo} className="w-44" alt="logo" />
//         </motion.button>
//         <div className="flex items-center gap-8">
//           <Link to={"/"} target="_blank">
//             <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer list-none">
//               <MdOutlineLocalMall /> My shop
//             </li>
//           </Link>
//           <Link to={"/cuenta"}>
//             <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer list-none">
//               <MdAccountCircle /> Account
//             </li>
//           </Link>
//         </div>

//         {/* <div>
//         <Link to='/soporte'>Soporte</Link>
//         <Link to='/tienda'>Ver Mi Tienda</Link>
//         <Link to='/cuenta'>Cuenta</Link>
//         </div> */}
//       </div>
//     </header>
//   )
// }


// // export default NavBarAdmin