import React,{useState} from 'react';
import Detail from '../Detail/Detail';
import platosCarta from '../../imgPlatos/platosCarta.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import {modal} from '../../Reducer/modalAction'
import { cleanDetail, getMenu } from '../../Reducer/menuSlice';
import { useParams } from "react-router-dom";
import { dishId } from '../../Reducer/menuSlice';
import img from './Star.png'
import {Link, useLocation} from 'react-router-dom'

import './Card.css'


export default function Card({ _id, name, image, category, description, price, rating}){
  
    // const [modal,setModal]=useState(false)
    const dispatch = useDispatch()
    const modelo = useSelector(state => state.modal)
    const location = useLocation()
    const [edicion,setEdicion]=useState(false)

    // var stars = Math.round((score / 10) / 2)
    // if (stars === 0) {
    //     stars = stars + 1;
    // }
    var stars = Math.ceil(rating)
    // useEffect(()=>{
    //   dispatch(modal())
    //   dispatch(dishId(_id))
    // },[dispatch])

    const handleClick=(e)=>{
      e.preventDefault()
      dispatch(modal())
      dispatch(dishId(_id))
      dispatch(cleanDetail())
    }
    // const handleEdit=(e)=>{
    //   e.preventDefault()
    //   dispatch(dishId(_id))
    // }
    


    if(modelo.modal){
      document.body.classList.add('active-modl')
    }
    else{
      document.body.classList.remove('active-modl')
    }

  return ( 
  // <> { isDetail ?
    <div className='card border-2 m-7 mb-0 h-[320px] bg-gradient-to-b from-orange-200'>
    <div className="flex flex-wrap justify-center"> 
    <div className="contenedor ">
        <h2>{name}</h2>
          <p>{price}</p>
          <div className=''>
            </div>
        </div>
        <img className='w-auto h-40' src={image} alt='' />
          <div className='flex w-full justify-end'>{
                    stars === 1 ? <img className='hidden w-5 bg-none' src={img} alt="Img Not Found."></img>
                        : stars === 2 ? <div className='hidden '><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                            : stars === 3 ? <div className='hidden '><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> </div>
                                : stars === 4 ? <div className='hidden '><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                                    : <div className='hidden '><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                }<div className=''>{rating}</div></div>


        { modelo.modal === true ? 
          <Detail  
          _id={_id}
          name={name}
          category={category}
          description={description}
          image={image}
          price={price}
          score={rating}
          />
          :
          location.pathname==='/admin'?
          <Link to={`/editar/${_id}`} 
          // _id={_id}
          // name={name}
          // category={category}
          // description={description}
          // image={image}
          // price={price}
          // score={score}
          >
            <button className='btn-abrir mb-2 mt-5 border-2 border-red-600' onChange={handleClick}>Editar</button>
          </Link>
        :
          <button className='btn-abrir mb-2 mt-5 border-1 border-gray-700  hover:bg-orange-300 transition-all duration-500' onClick={handleClick}>Ver detalle</button>
        }
      </div>
      
    
    </div>
    
  )
}