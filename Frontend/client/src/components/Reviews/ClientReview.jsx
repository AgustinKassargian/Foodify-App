import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postNewReview } from '../../Reducer/menuActions'

const Swal = require('sweetalert2')

function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = 'Email is required'
  } 
  if(!input.name) {
    errors.name = "Name is required"
  }
  if(!input.stars) {
    errors.stars = 'Rating is required'
  }
  if (input.stars < 0 || input.stars > 5) {
    errors.stars = 'Rating must be between 0-5'
  } 
  if (!input.body) {
    errors.body = 'Body is required'
  }
  return errors
}


function ClientReview() {

  const dispatch = useDispatch()
  const[input, setInput] = useState({
    email: '',
    name: '',
    stars: 0,
    body: ''
  })
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    setErrors(validate(input))
    let error = validate(input)
    if (Object.values(error).length !== 0) {
       return (
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1400,
          background:'#f5f3f3'
        })
       )
    } else {
      dispatch(postNewReview(input))
      setInput({
        email: '',
        name: '',
        stars: 0,
        body: ''
      })
      // alert('Thank you for your opinion')
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thank you for your opinion!',
        showConfirmButton: false,
        timer: 1400,
        background:'#f5f3f3'
      })
    }
  }

  function handleChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
  }))
  }

  return (
    <div className='h-screen overflow-hidden'>
        <h1 className='flex  justify-center items-center b-3 text-gray-600 font-medium text-[40px] ml-[35%] w-[30%] mt-8'>Welcome to <span className="text-orange-400 font-bold ml-2">Foodify </span> <span className='ml-2'> Reviews</span></h1>
        <div className='justify-center items-center mt-[5%] ml-[35%] w-[30%] flex drop-shadow-sm border-2 py-20 rounded-2xl '>

      <form onSubmit={(e) => {handleSubmit(e)}}>
      <div className="relative w-96">
      <h2 className='mb-8 text-xl'>Give us a feedback of our service</h2>
        {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div> */}
        <>Email</>
        <input type="text" name='email' onChange={handleChange}  id="email-address-icon" value={input.email} className=" mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com"></input>
      </div>
        <br />
        {errors.email && <p>{errors.email}</p>}
      {/* <input value={input.email} placeholder='Email' name='email' type='text' onChange={handleChange}></input> */}
      <br />
        <>Name</>
      <input type="text" name='name' onChange={handleChange} value={input.name} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name..."></input>
      <br />
        {errors.name && <p>{errors.name}</p>}
      <br />
      {/* <div className='w-40 items-center'> */}

        <>Calificate us where 1 is awful and 5 is excellent</>
      <div className='w-40 items-center mt-1'>

            <input type="number" id="visitors" value={input.stars} placeholder='Rating' name='stars' onChange={handleChange}  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ></input>
        </div>
        <br />
        {errors.stars && <p>{errors.stars}</p>}
      {/* <input value={input.stars} placeholder='Rating' name='stars' type='number' onChange={handleChange}></input> */}
      <br />
      <>How we can be better?</>
      <div className="py-2 px-4 bg-white rounded-lg w-96 mt-1">
          <textarea id="comment" rows="4" value={input.body} name='body' onChange={handleChange} className="px-0 w-full text-sm text-gray-900 bg-white border-0 " placeholder="Write a comment..."></textarea>
      </div>
      <br />
      {errors.body && <p>{errors.body}</p>}
      <br />
        <button type="submit" className="mt-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white  bg-gray-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-naranja">
            Send review
        </button>
          



      {/* <textarea value={input.body} placeholder='Review' name='body' onChange={handleChange}>Review</textarea>
      <button type='submit' > Send Review </button> */}
      </form>
      </div>
    </div>
  )
}

export default ClientReview