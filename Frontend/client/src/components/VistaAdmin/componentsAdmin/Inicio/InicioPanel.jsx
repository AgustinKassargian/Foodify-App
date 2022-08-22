import React from 'react'
import logo from '../../../../utils/LogoMain.png'

export default function InicioPanel() {
  return (
    <div className='flex place-content-center m-24' >
      <img src={logo} className='w-96 justify-center'></img>
      <a className='text-center absolute inset-0 pt-96 text-3xl font-extrabold underline decoration-4 '>Welcome to Foodify</a>
    </div>
  )
}
