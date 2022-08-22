import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import takeAway from './take-away1.png'
import first1 from './first-step-instructions.png'
import second from './second-step-instructions.png'
import third from './third-step-instructions.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../Reducer/menuSlice'
import star from './Star.png'



export default function Reviews() {

  const dispatch = useDispatch()
  const { reviews } =  useSelector(state => state.reviews)
  const first = reviews.length - 4
  const last = reviews.length + 1
  const lastReview = reviews?.slice(first, last)
  
  useEffect(() => {
    dispatch(getReviews())
  }, [])
  
 

  return (
    <section
    className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    id="home"
    >
      <div className="py-2 flex-1 flex flex-col ml-6 items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-naranja font-semibold">
            Take Away
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={takeAway}
              className="w-full h-full object-contain"
              alt="delivery"
              />

          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-textColor">
          The Fastest Service in
          <span className="text-orange-400 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        {/* ------ Steps ------ */}

        <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className="flex-row p-6 border border-gray-100 rounded-3xl bg-primary sm:flex sm:space-x-8 sm:p-4 drop-shadow-md">
          <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <p className="text-gray-600 mt-3 text-2xl font-semibold"> <span>Choose</span></p>
          </div>
          <img className="w-40 h-20 mt-[2px]" src={first1} alt="step1" />
          <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <p className="text-gray-600 mt-3 text-2xl font-semibold"> <span>Call</span></p>
          </div>
          <img className="w-30 h-20 mt-1 -ml-[2px] rounded-full" src={second} alt="step2" />
          <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
            <p className="text-gray-600 mt-3 text-2xl font-semibold"> <span>Enjoy</span></p>
          </div>
          <img className="w-20 h-20 -ml-[1px] -mt-[5px] rounded-full" src={third} alt="step3" />
        </motion.div>

        {/* <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          choose 
          </p>
          <img 
          src={first}
          className="w-40 h-40 object-contain"
          alt="first"
          />
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          call 
          </p>
          <img 
          src={second}
          className="w-40 h-40 object-contain"
          alt="second"
          />
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          enjoy 
          </p>
          <img 
          src={third}
          className="w-40 h-40 object-contain"
          alt="third"
        /> */}

        {/* <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
          Order Now
        </button> */}
      </div>
      <div className="py-2 flex-1 flex items-center relative">

        {/* ------ Reviews ------ */}

        <div className="">
          <div className="py-16 mt-20 white bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <h2 className="mb-12 text-center text-2xl text-textColor font-bold md:text-4xl">What's our customers say</h2>
              <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                      {
                        lastReview?.map((e) => {
                          return (
                              <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div>
                            <div className="h-full flex flex-col justify-center space-y-4">
                            <div className="h-full flex flex-col justify-center space-y-4">
                            <h6 className="text-lg font-semibold leading-none" value={e.name}>{e.name}</h6>
                           <div className='flex justify-center'> <span value={e.stars} style={{display: 'inline'}} className="text-lg font-semibold leading-none">{e.stars}</span><img src={star} alt='estrellita' className='-mt-1' width={'22px'} height={'22px'}/></div>
                            <p value={e.body} className="text-gray-600"> <span className="font-serif">"</span>{e.body}<span className="font-serif">"</span></p>
                          </div>
                          </div>
                          </div>
                          </div>
                        )
                      })
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}