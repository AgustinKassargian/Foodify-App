import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import logo from '../../utils/LogoMain.png'
import { Link, useLocation } from 'react-router-dom'
import avatar from '../../utils/avatar.png'
import avatar1 from '../../utils/images/WillyConected.png'
import { motion } from 'framer-motion'
import { getMenu, getMenuFilter, searchBar, orderBy, getCategories, getTable, putTable2 } from '../../Reducer/menuSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout, MdSearch, MdLogin, MdHome, MdPanTool, MdSettings, MdBackupTable, MdOutlineShoppingCart, MdLaptopWindows } from 'react-icons/md'
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import firebaseApp from '../../Firebase/Credentials'
import Service from './Service'


export default function NavBar({user}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const location = useLocation()
  const { dishes } = useSelector(state => state.dishes)
  const { categories } = useSelector(state => state.categories)
  // const { loginWithRedirect } = useAuth0()
  // const { logout, user, isAuthenticated } = useAuth0()
  const [isMenu, setIsMenu] = useState(false)
  const auth = getAuth(firebaseApp)
  // const [hidden, setHidden] = useState('hidden py-2 space-y-2')
  const [hidden, setHidden] = useState(true)
  const {table}  = useSelector(state => state.table)
  const Swal = require('sweetalert2')
  const [lupa, setLupa] = useState(false)
  
  

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getTable())
  }, [])

  const handleChange = (e) => {
    e.preventDefault();

    setInput(e.target.value)
    // dispatch(searchBar(input))
    // if(e.target.value == '') {
    //     dispatch(getMenu())
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    dispatch(searchBar(input))
    setInput('')
  }

  const enter = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchBar(input))
      setInput('')
    }
  }
  function handleOrderBy(e) {
    e.preventDefault()
    dispatch(orderBy(e.target.value))
  }

  function handleMenues(e) {
    e.preventDefault()
    dispatch(getMenuFilter(e.target.value))
  }

  const handleDiets = (e) => {
    e.preventDefault()
  }

  const handleWithoutTacc = (e) => {
    e.preventDefault()
  }


  const handleMenu = (e) => {
    e.preventDefault()
    setIsMenu(!isMenu)
  }

  const handleReload = (e) => {
    e.preventDefault()
    window.location.reload()
  }
  
  //------------------> LLAMADA A MOZO <--------------------
  const callBtn = document.querySelector('#callBtn')

  function handleHidden(){
    // if(hidden === 'hidden py-2 space-y-2') setHidden('py-2 space-y-2')
    // else setHidden('hidden py-2 space-y-2')
    setHidden(!hidden)
  }
  function handleService(){
    dispatch(putTable2({call: true}))


    // alert('Waiter was called')
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: '35%',
      heigtht: '18%',
      padding: '1.5rem',
      background: '#f5f3f3',
      timer: 2200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      html: '<b class="negro">The waiter will come in the next few minutes</b>'
    })
    callBtn.hidden = true

    setTimeout(()=>{
      dispatch(putTable2({call: false}))
    }, 60000)
    setTimeout(()=>{
      callBtn.hidden = false
    }, 10000)
  
  }

  function handleLlamado(e){
    e.preventDefault(e)
    localStorage.setItem('tableEditID', e.target.value)
  }

  function handleLogout(e) {
    e.preventDefault()
    signOut(auth)
    setIsMenu(false)
    window.location.href = "/"
  }

const handleLupa = (e) => {
  e.preventDefault()
  setLupa(!lupa)
}


  return (
    <>
    
      

        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
          {/* desktop & tablet */}
          <div className="hidden lg:flex w-full h-full items-center justify-between">
            <Link to={"/"} className="flex items-center gap-2">
              <motion.button whileTap={{ scale: 0.6 }}>
                <img src={logo} className="object-cover w-16 -my-6" alt="logo" />
              </motion.button>
            </Link>

            {/* ---------------- SI ESTAS EN /MENU SEARCH BAR Y FILTROS --------------*/}
            {
              location.pathname === '/menu' ?
                <div className='flex justify-center items-center gap-2 md:ml-[-173px]'>
                  <input className='rounded-lg flex items-center xxl:py-1 xxl:px-2 xl:py-1 xxl:w-30 xl:px-3 lg:py-1 lg:px-1 w-40 xl:w-38 lg:w-40 md:py-[2px] md:px-[2px] md:w-32 sm:px-[1px] sm:py[1px] sm:w-24'
                    style={{ border: 'none', boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.1)', fontFamily: 'Poppins' }}
                    onKeyDown={enter}
                    type='text'
                    placeholder="Search.."
                    value={input}
                    onChange={handleChange}
                  />
                  <div>
                    <motion.button whileTap={{ scale: 0.9 }}
                      // style={{ boxShadow:'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)', background: 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)', borderRadius: '5px', color: '#fff', border: 'none', padding: '8px 30px', fontFamily: 'Poppins', fontSize: '14px', cursor:'pointer' }}
                      type='submit'
                      onClick={handleSubmit}>
                      <MdSearch className="text-textColor text-4xl cursor-pointer lg:text-3xl" />
                    </motion.button>
                  </div>
                  <div className='items-center justify-center'>

                    {/* <h2 className='lg:text-[14px] md:text-transparent'>Order by</h2>  */}
                    <select className='lg:text-[14px] md:text-[12px] text-zinc-500' style={{ borderRadius: '7px' }} onChange={(e) => { handleOrderBy(e) }}>
                      <option value="default" hidden> Order </option>
                      <option value="high"> High price </option>
                      <option value="low"> Low price </option>
                      <option value="highR"> High rating </option>
                      <option value="lowR"> Low rating </option>
                    </select>
                  </div>
                  <div className='items-center justify-center'>
                    {/* <p className='text-sm'>Menu Type</p> */}
                    <select className='lg:text-[14px] md:text-[12px] text-zinc-500' style={{ borderRadius: '7px' }} onChange={(e) => { handleMenues(e) }}>
                      <option hidden> Type </option>
                      <option value='all'> All </option>
                      {categories?.map((e, i) => {
                        return (
                          <option key={i} value={e.name}>{e.name}</option>
                        )
                      })}
                    </select>


                  </div>
                </div>
                : <></>
            }

{/* --------------- SI NO ESTAS EN /MENU ------------- */}

            <div className="flex items-center xxl:gap-8 xl:gap-5 lg:gap-5">
              <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex items-center xxl:gap-16 xl:gap-8 lg:gap-6"
              >
                <Link to={"/"}>
                  <li className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                    Home
                  </li>
                </Link>
                {
                  location.pathname === '/menu' ?
                    <li onClick={handleReload} className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                      Menu
                    </li> :
                    <Link to={'/menu'}>
                      <li className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Menu
                      </li>
                    </Link>
                }
                <li className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  About Us
                </li>
                
                <motion.li
                whileTap={{ scale: 0.6 }}>
                <MdPanTool onClick={handleHidden} className="text-orange-400 text-2xl  cursor-pointer" />
                </motion.li>
                {
                  !hidden ?
                  <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                >
                  
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    //   onClick={() => setIsMenu(false)}
                    >
                      <p id="product-list" className={`${hidden}`}>
                          <select className='bg-gray-50 rounded-xl border-none focus:border-none outline-none box-border active:border-none hover:border-none bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-0' onChange={handleLlamado}>
                                {table.map((g, i) => (
                                    <option className='border-none focus:border-none box-border active:border-none hover:border-none' key={i} value={g._id} >{g.table_number}</option>
                                ))}  
                          </select>
                          <li>
                            <p  className="" onClick={handleService} >Call Waiter</p>
                          </li>
                    </p>
                    </p>
                  
                  </motion.div>
                  : <></>
                }
                  {/* { !hidden ?
                <>
                        <button type="button" className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" aria-controls="dropdown-example" data-collapse-toggle="product-list" >
                          <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Service</span>
                    </button>
                    <ul id="product-list" className={`${hidden}`}>
                          <select onChange={handleLlamado}>
                                {msal.map((g, i) => (
                                    <option key={i} value={g._id} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-textColor text-base'  >{g.table_number}</option>
                                ))}  
                          </select>
                          <li>
                            <button  className="flex p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 text-start" onClick={handleService} >Call Waiter</button>
                          </li>
                    </ul>
                
                </>  : <></>
                } */}
               
                
                 
                       
                    
                        
                
                {/* ---------- JUSEPE MESAS -------------- */}
                {/* <button type="button" className="xxl:text-lg xl:text-sm lg:text-sm text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" aria-controls="dropdown-example" data-collapse-toggle="product-list" onClick={handleHidden}>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Service</span>
                    </button>
                    <ul id="product-list" className={`${hidden}`}>
                          <select onChange={handleLlamado}>
                                {msal.map((g, i) => (
                                    <option key={i} value={g._id} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-textColor text-base'  >{g.table_number}</option>
                                ))}  
                          </select>
                          <li>
                            <button  className="flex p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 text-start" onClick={handleService} >Call Waiter</button>
                          </li>
                    </ul> */}
              </motion.ul>

              {/* <div
                className="relative flex items-center justify-center"
              // onClick={showCart}
              >
                <motion.button whileTap={{ scale: 0.6 }}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  className="flex items-center gap-24 ">
                    <Link to='/cart'>
                    <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                    </Link>
                </motion.button>
                /* {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )} */
              //</div>
               }
{/* ------------------ AVATAR --------- */}

              {
                user?.rol === 'admin' ?

                <div className="relative">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={avatar1}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                  alt={avatar1}
                  onClick={handleMenu}

                    />
                    {isMenu ?
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                      >

                        
                        <Link to={"/admin"}>
                          <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Settings Panel <MdSettings />
                          </p>
                        </Link>

                        <Link to={"/waiter"}>
                          <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Tables <MdBackupTable/>
                          </p>
                        </Link>

                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          onClick={(e) => handleLogout(e)}
                        >
                          Logout <MdLogout />
                        </p>
                      </motion.div>
                      : <></>
                    }
                  </div>
                  :  user?.rol === 'waiter' ?
                    
                  <div className="relative">
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={avatar1}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt={avatar1}
                    onClick={handleMenu} />
                    {isMenu?
                  <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                >
                                    
                   <Link to={"/waiter"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    //   onClick={() => setIsMenu(false)}
                    >
                      Tables <MdBackupTable/>
                    </p>
                  </Link>
               
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    // onClick={() => signOut(auth) && setIsMenu(false)}
                    onClick={(e) => handleLogout(e)}
                  >
                    Logout <MdLogout />
                  </p>
                </motion.div>  
                : <></>
                  }
                 </div> 
                 : 
              <></>
              }
                        

              

{/* ------------------------ SI NO ESTA AUTENTICADO ---------- */}

              {/* {!isAuthenticated ?

                <div className="relative">
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={avatar}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt="userprofile"
                    onClick={handleMenu}
                  />


                  {isMenu ?
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >

                      <Link to='/welcome'>
                      <p
                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                        // onClick={() => loginWithRedirect()}
                      >
                        Login <MdLogin />
                      </p>
                      </Link>
                    </motion.div>
                    : <></>
                  }
                </div>
                : <></>
              } */}

            </div>
          </div>

{/* ----------------------- FIN WEB Y TABLET---------------- */}

          {/* ---------- MOBILE --------- */}

          <div className="flex items-center justify-between lg:hidden w-full h-full ">
            <div
              className="relative flex items-center justify-center"
            //   onClick={showCart}
            >
              {
                location.pathname === '/' ?
                  <Link to='/menu'>
                    <motion.button whileTap={{ scale: 0.6 }}
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 200 }}
                      className="flex items-center gap-24 ">
                      <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                    </motion.button>
                  </Link>
                  :
                  <Link to='/'>
                    <motion.button whileTap={{ scale: 0.6 }}
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 200 }}
                      className="flex items-center gap-24 ">
                      <MdHome className="text-textColor text-2xl  cursor-pointer" />
                    </motion.button>
                  </Link>
              }
              {/* {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )} */}
            </div>

            <Link to={"/"} className="flex items-center gap-2">
              <img src={logo} className="w-16 -my-6 object-cover" alt="logo" />

            </Link>
            {/* {
          location.pathname === '/menu' ?
          <div></div> : <></>
        } */}

          {/* ------------- LUPA EN /MENU ----------- */}
            {
              location.pathname === '/menu' ?
              <div>
                <motion.button whileTap={{ scale: 0.6 }}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                // className="flex items-center gap-24 "
                >
                  <MdSearch onClick={handleLupa}className="text-textColor text-3xl  cursor-pointer" />
                </motion.button>
                { lupa ?
                  
                  <div className='flex justify-center items-center gap-2 md:ml-[-173px]'>
                  <input className='rounded-lg flex items-center xxl:py-1 xxl:px-2 xl:py-1 xxl:w-30 xl:px-3 lg:py-1 lg:px-1 w-40 xl:w-38 lg:w-40 md:py-[2px] md:px-[2px] md:w-32 sm:px-[1px] sm:py[1px] sm:w-24'
                    style={{ border: 'none', boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.1)', fontFamily: 'Poppins' }}
                    onKeyDown={enter}
                    type='text'
                    placeholder="Search.."
                    value={input}
                    onChange={handleChange}
                  />
                  <div>
                    <motion.button whileTap={{ scale: 0.9 }}
                      // style={{ boxShadow:'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)', background: 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)', borderRadius: '5px', color: '#fff', border: 'none', padding: '8px 30px', fontFamily: 'Poppins', fontSize: '14px', cursor:'pointer' }}
                      type='submit'
                      onClick={handleSubmit}>
                      <MdSearch className="text-textColor text-4xl cursor-pointer lg:text-3xl" />
                    </motion.button>
                  </div>
                  <div className='items-center justify-center'>

                    
                    <select className='lg:text-[14px] md:text-[12px] text-zinc-500' style={{ borderRadius: '7px' }} onChange={(e) => { handleOrderBy(e) }}>
                      <option value="default" hidden> Order </option>
                      <option value="high"> High price </option>
                      <option value="low"> Low price </option>
                      <option value="highR"> High rating </option>
                      <option value="lowR"> Low rating </option>
                    </select>
                  </div>
                  <div className='items-center justify-center'>
                   
                    <select className='lg:text-[14px] md:text-[12px] text-zinc-500' style={{ borderRadius: '7px' }} onChange={(e) => { handleMenues(e) }}>
                      <option hidden> Type </option>
                      <option value='all'> All </option>
                      {categories?.map((e, i) => {
                        return (
                          <option key={i} value={e.name}>{e.name}</option>
                        )
                      })}
                    </select>


                  </div>
                </div>
                
                : <></>}
                </div>:<></>
                
            } 

            {/* ------------- MANITO ----------- */}

            {/* <motion.button whileTap={{ scale: 0.6 }}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
            >
              <MdPanTool className="text-orange-400 text-xl  cursor-pointer" />
            </motion.button> */}
            <div>
            <motion.div
                whileTap={{ scale: 0.6 }}>
                <MdPanTool onClick={handleHidden} className="text-orange-400 text-xl  cursor-pointer" />
                </motion.div>
                {
                  !hidden ?
                  <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                >
                  
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    //   onClick={() => setIsMenu(false)}
                    >
                      <p id="product-list" className={`${hidden}`}>
                          <select className='bg-gray-50 rounded-xl border-none focus:border-none outline-none box-border active:border-none hover:border-none bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-0' onChange={handleLlamado}>
                                {table.map((g, i) => (
                                    <option className='' key={i} value={g._id} >{g.table_number}</option>
                                ))}  
                          </select>
                         
                            <p  className="py-2" onClick={handleService} >Call Waiter</p>
                          
                    </p>
                    </p>
                  
                  </motion.div>
                  : <></>
                }
            </div>

            {/* ---------- SI ESTA AUTENTICADO Y ES ADMIN --------- */}

            {
              user?.rol === 'admin' ?
              <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={avatar1}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                alt={avatar1}
                onClick={handleMenu}
              />
              {
                isMenu ?
                <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >

                

                <Link to={"/admin"}>
                          <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Settings Panel <MdSettings />
                          </p>
                        </Link>

                        <Link to={"/waiter"}>
                          <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Tables <MdBackupTable/>
                          </p>
                        </Link>


                <ul className="flex flex-col ">
                  <Link to={"/"}>
                    <li
                      className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    //   onClick={() => setIsMenu(false)}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to={"/menu"}>
                    <li
                      className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                    //   onClick={() => setIsMenu(false)}
                    >
                      Menu
                    </li>
                  </Link>
                                  
                </ul>

                <p
                  className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  // onClick={() => signOut(auth) && setIsMenu(false)}
                  onClick={(e) => handleLogout(e)}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
              : <></>
              }
              </div>
              : <></>
            }

            {/* --------------- SI ES WAITER ---------- */}
            {
              user?.rol === 'waiter' ?
                <div className="relative">
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={avatar1}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt={avatar1}
                    onClick={handleMenu}
                  />
                  {isMenu ?

                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >

                        <Link to={"/waiter"}>
                          <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Tables <MdBackupTable/>
                          </p>
                        </Link>


                      <ul className="flex flex-col ">
                        <Link to={"/"}>
                          <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Home
                          </li>
                        </Link>
                        <Link to={"/menu"}>
                          <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Menu
                          </li>
                        </Link>
                      
                      </ul>

                      <p
                        className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                        onClick={() => signOut(auth) && setIsMenu(false)}
                      >
                        Logout <MdLogout />
                      </p>
                    </motion.div>
                    : <></>}

                </div>
                : <></>
            }

            {/* ------- SI NO ES NADIE ------ */}
            {/* {
              !user ?
                <div className="relative">
                  <motion.img
                    whileTap={{ scale: 0.6 }}
                    src={avatar}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                    alt="userprofile"
                    onClick={handleMenu}
                  />
                  {isMenu ?

                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >

                      <ul className="flex flex-col ">
                        <Link to={"/"}>
                          <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Home
                          </li>
                        </Link>
                        <Link to={"/menu"}>
                          <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                          //   onClick={() => setIsMenu(false)}
                          >
                            Menu
                          </li>
                        </Link>
                        <li
                          className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                        //   onClick={() => setIsMenu(false)}
                        >
                          About Us
                        </li>
                        <li
                          className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                        //   onClick={() => setIsMenu(false)}
                        >
                          Service
                        </li>
                        <Link to='/welcome'>
                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                          // onClick={() => loginWithRedirect()}
                        >
                          Login <MdLogin />
                        </p>
                        </Link>
                      </ul>

                    </motion.div> : <></>
                  }
                </div>
                : <></>
            } */}


          </div>
        </header>
      
    </>
  )
}