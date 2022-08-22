import React, { useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Carrusel from '../Carrusel/Carrusel'
import { Link } from 'react-router-dom'
import Reviews from '../Reviews/Reviews'


export default function Home({user}) {
  return (
  <div className='bg-white'>
    <NavBar user={user}/>
    <Reviews />
    <Carrusel />
    <Footer />
  </div>
  )
}

