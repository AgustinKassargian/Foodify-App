import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import {modal} from '../../Reducer/modalAction'
import './Detail.css'
import { dishId, getMenu } from '../../Reducer/menuSlice';
import { useParams } from 'react-router-dom';
import {cleanDetail} from '../../Reducer/menuSlice'
import { Link, useLocation } from 'react-router-dom'




export default function Detail(_id){
    
    const location = useLocation()
    const dispatch = useDispatch()
    const dish = useSelector(state => state.dish)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(modal())
    }
    

    return(
        //hacer un boton para abrir la carta
        /* primer div es para el detail en css
        el segundo para hacer un fondo medio oscuro que separe el fondo con la carta
        el tercero para el contenido de la carta */
        <> 
        {location.pathname==='/admin'?
        null
        :
        <div className='modal'>
            <div className='bg-image'>
                    <div className='fondo-blur w-screen h-screen flex justify-center items-center'> 
                        <div className=' md:w-[500px] sm:w-[400px] md:h-[450px] sm:h-[400px]  items-center flex-col rounded-xl ml-[1px] justify-center bg-orange-300' >             
                            {dish.dish?
                            <div className='flex-col items-center justify-center'>
                                <h2 className='flex pt-4 mt-4 items-center font-bold justify-center md:items-center md:text-[30px] '>{dish.dish.name}</h2>
                                <img src={dish.dish.image} className="flex justify-center rounded-lg items-center ml-[60px] mr-[60px] mt-4  md:items-center md:justify-center md:left-14" alt="img not found" style={{maxWidth: "270px", maxHeight: "270px"}}/>                            
                                <h1 className='flex text-l items-center text-orange-500 justify-center'>{dish.dish.category}</h1>
                                <p className='space-between text-center text-xs mt-4 mb-2 md:text-[15.7px] md:ml-1 md:mr-1 md:px-4 '>{dish.dish.description}</p>
                                <p className='text-center pt-1 pl-1 mb-2 '>${dish.dish.price}</p>
                                {/* <button className='relative top-10 left-44 transform -translate-x-1/2 -translate-y-1/2 bg-orange-200 hover:bg-orange-400 text-zinc-800 font-bold py-2 px-4 border border-l-fuchsia-100 rounded ' onClick={handleClick}>close</button> */}
                                <button className='flex relative sm:ml-[167px] sm:mt-1 md:ml-[215px] md:mt-8  transform items-center justify-center bg-center bg-orange-200 hover:bg-orange-400 text-zinc-700 font-bold py-2 px-4 border border-l-fuchsia-100 rounded-lg' onClick={handleClick}>close</button>
                            </div>
                            : <p>Loading...</p>
                            }
                            {/* <img src={image} alt="img not found" width="350px" height="300px"/>
                            <p>{category}</p>
                            <p >{description}</p>
                        <p>{price}</p> */}
                        </div>
                    </div>
                </div>
            // </div>
    }       
    </>
    )
}

