import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import NavBarAdmin from './componentsAdmin/NavBarAdmin/NavBarAdmin'
import AddProducts from './componentsAdmin/Productos/addProductos'
import EditProducts from './componentsAdmin/Productos/editProductos'
import ProductList from './componentsAdmin/Productos/productList'
import Ventas from './componentsAdmin/Ventas/Ventas'
import InicioPanel from './componentsAdmin/Inicio/InicioPanel'
import Metricas from './componentsAdmin/Metricas/metricas'
import {getMenu, getOrder2} from '../../Reducer/menuSlice'
import logo from '../../utils/LogoMain.png'

//IMPORTS FIREBASE
import { getAuth } from 'firebase/auth'
import firebaseApp from '../../Firebase/Credentials'
import { getFirestore, doc, collection, setDoc, Firestore } from "firebase/firestore";


import Waiters from './componentsAdmin/Waiters/Waiters'
import TableList from './componentsAdmin/Tablas/TableList'
import Loading from '../Loading/Loading'

import NavBar from '../NavBar/NavBar'

import FormCategorias from './componentsAdmin/Categorias/FormCategorias'


export default function PanelAdmin({user}) {
  const dispatch = useDispatch()
  const auth = getAuth(firebaseApp);
  const fs = getFirestore(firebaseApp)
  const [componentView, setComponentView ] = useState('inicio')
  const [hidden, setHidden] = useState('hidden py-2 space-y-2')
  const [loading, setLoading] = useState(false)

  useEffect (()=> {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    dispatch(getMenu()) 
    dispatch(getOrder2())   
}, [])

  function handleComponentView(e){
    e.preventDefault()
    setComponentView(e.target.name)
    setHidden('hidden py-2 space-y-2')
  }

  function handleHidden(){
    if(hidden === 'hidden py-2 space-y-2') setHidden('py-2 space-y-2')
    else setHidden('hidden py-2 space-y-2')
  }


  return (
    <div className=''>
    {
      loading ? <Loading /> : user?.rol === 'admin' ? 

        <div className='bg-gray-100 overflow-hidden'>
      {/* // ----------PANEL IZQUIERDO------------ */}
      <div className=' h-screen grid-cols-2 '>

      <div className=' h-1/6'><NavBar user={user}/></div>
      <div className=' w-1/6 h-5/6 ' >

        <aside >
          <div className="overflow-y-auto py-4 px-3 ">
              <ul className="space-y-12 pt-11">
                <li>
                    <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="product-list" onClick={handleHidden}>
                          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap" >Products</span>
                          <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <ul id="product-list" className={`${hidden}`}>
                          <li>
                            <button  className="flex items-center p-2 pl-11 w-full text-base font-normal cursor-pointer text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100  " onClick={handleComponentView} name='addproducts'>Add Products</button>
                          </li>
                          <li>
                            <a  className="flex items-center cursor-pointer p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 " onClick={handleComponentView} name='editproducts'>Edit Products</a>
                          </li>
                    </ul>
                </li>
                <li>
                    <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                      <button className="flex-1 ml-3 whitespace-nowrap text-left" onClick={handleComponentView} name='categories'>Categories</button>
                    </a>
                </li>
                <li>
                    <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                      <button className="flex-1 ml-3 whitespace-nowrap text-left" onClick={handleComponentView} name='ventas'>Sells</button>
                      {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> */}
                    </a>
                </li>
                <li>
                    <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                      <button className="flex-1 ml-3 whitespace-nowrap text-left" onClick={handleComponentView} name='clientes'>Waiters</button>
                    </a>
                </li>
                <li>
                    <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" clipRule="evenodd"></path></svg>
                      <button className="flex-1 ml-3 whitespace-nowrap text-left" onClick={handleComponentView} name='metricas'>Metrics</button>
                    </a>
                </li>
                <li>
                    <a  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                      <button className="flex-1 ml-3 whitespace-nowrap text-left" onClick={handleComponentView} name='tables'>Tables</button>
                    </a>
                </li>
              </ul>
          </div>
        </aside>


      </div>
      <div className=' grid-cols-2 w-5/6 h-5/6 absolute bottom-0 right-0'>
      

      { componentView === 'inicio' ? 
      // ----------VISTA INICIO------------
      <div className=''>
        <InicioPanel/>
      </div> 
      // ----------VISTA VENTAS------------
      : componentView  === 'ventas' ?  
      
      <div className=''><Ventas user={user} /></div>
      
      : componentView  === 'clientes' ?  
      
      <div className=''><Waiters user={user}/></div>
      
      : componentView  === 'metricas' ?
      
      <div className=''><Metricas/></div>
      
      : componentView  === 'addproducts' ?
      
      
      <div className='items-start'><AddProducts />
      </div>
      : componentView  === 'editproducts' ?
      <div className=''><ProductList/></div>

      : componentView  === 'tables' ?
      <div className=''><TableList/></div>
      : componentView  === 'categories' ?
      <div className=''><FormCategorias/></div>

      :
      <div className=''><InicioPanel/></div>
      
    }
    
    </div>
      
      
    </div>
  </div>




:
<div>
    You don't have permission to access this section
    <br />
    <button><Link to='/'>Go to home</Link></button>
</div>

    // <div role="status absolute inset-0 h-screen w-screen">
    //   <svg className="items-center absolute inset-0 mr-2 w-96 h-96 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    //     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    //   </svg>
    //   <span className="sr-only absolute inset-0">Loading...</span>
    // </div>

        
  
  
}
  </div>
  )
}

