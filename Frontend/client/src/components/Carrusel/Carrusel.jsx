import React, { useEffect } from 'react'
import images from './Img/images'
import { motion } from 'framer-motion'
import './Carrusel.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../../Reducer/menuSlice'
import { useState } from 'react'
import Card from '../Card/Card'
import img from '../Card/Star.png'
import { MdOutlineAttachMoney } from 'react-icons/md'

export default function Carrusel() {
    const dispatch = useDispatch()
    const { dishes } = useSelector(state => state.dishes)
    const currentDishes = dishes.slice(0, 6)
    useEffect(() => {
        dispatch(getMenu())
    }, [])

    var stars = Math.ceil()

    return (
        <div className=''>
            <div>
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-28 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                    Our Hot Dishes
                </p>
            </div>
            <div className='h-[400px] justify-center mt-20 overflow-y-hidden mb-32 overflow-x-hidden bg-white items-center'>

                <motion.div className='slider-container h-[400px] mt-14 justify-center items-center'>
                    <motion.div className='slider gap-2 mt-2 h-[300px]' drag='x'
                        dragConstraints={{ right: 0, left: -300 }} >
                        {/* {images.map(image => (
                <motion.div className='item border-2 border-blue-600 h-96 bg-gradient-to-b from-orange-400'>
                    <img className="img-carrusel" src={image} alt=""></img>
                </motion.div>
            ))} */}
                        {currentDishes && currentDishes.map((p, i) => {
                            return (
                                <motion.div key={i} className=' item border-2 min-w-[380px] mt-8 ml-1 xs:min-w-[355px] p-4 bg-cardOverlay rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                                    <img src={p.image} className='absolute overflow-y-visible w-56 lg:w-64 -mt-64 lg:-mt-80' alt=""></img>
                                    <h1 className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{p.name}</h1>
                                    <h2 className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{p.category}</h2>
                                    <div className='flex text-md text-bold text-orange-400'><MdOutlineAttachMoney className='text-lg' />{p.price}</div>

                                    <div className='flex w-full justify-center'>{
                                        stars === 1 ? <img className='hidden first-letter:w-5 bg-none' src={img} alt="Img Not Found."></img>
                                            : stars === 2 ? <div className='hidden'><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                                                : stars === 3 ? <div className='hidden'><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> </div>
                                                    : stars === 4 ? <div className='hidden'><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                                                        : <div className='hidden'><img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img> <img className='w-5 bg-none' src={img} alt="Img Not Found."></img></div>
                                    }</div>
                                </motion.div>
                            )
                        })
                        }


                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

