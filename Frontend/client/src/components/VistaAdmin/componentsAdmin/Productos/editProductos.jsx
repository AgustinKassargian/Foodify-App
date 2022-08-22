import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dishId } from '../../../../Reducer/menuSlice';
import { useParams } from 'react-router-dom'
import { putDish } from '../../../../Reducer/menuActions'
import logo from '../../../../utils/LogoMain.png'

const Swal = require('sweetalert2')

function validateCategoria(){
  const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          width: '30%',
          padding: '0.3rem',
          //timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })

      Toast.fire({
          icon: 'error',
          html: '<b class="rojo"> This category has already been selected!</b>'
      })
}


function Editar() {

  const dispatch = useDispatch()
  const dishes  = useSelector(state => state.dishes.dish)
  const { categories } = useSelector(state => state.categories)
  const clean = { name: '', description: '', price: 0, rating: 0, category: [], image: '' };
  const idDish = localStorage.getItem('dishEditID')




  useEffect(() => {
    dispatch(dishId(idDish))
  }, [dispatch])


  const [input, setInput] = useState({
    name: '',
    description: '',
    price: 0,
    rating: 0,
    category: [],
  });

  const handleLoad = (e) => {
    setInput({
      name: dishes.name,
      description: dishes.description,
      price: dishes.price,
      rating: dishes.rating,
      category: dishes.category,
    })
    logo = false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(dishes.map(e => e.name.toLowerCase() === input.name.toLowerCase())) return alert('The name already exist!')
    // if(!input.name) return alert('Falta ingresar nombre')
    // if(!input.description) return alert('Falta ingresar descripcion')
    // if(!input.price) return alert('Falta ingresar precio')
    // if(input.price < 0) return alert('El valor debe ser mayor a 0')
    // if(input.rating < 0 || input.rating > 5) return alert('El valor debe ser mayor a 0 o menor a 5')
    // if(input.image && input.image.slice(0,8) !== 'https://') return alert('Ingrese una URL valida')
    dispatch(putDish(input))

    //alert('Menu modificated!!')
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Menu modificated!',
      showConfirmButton: false,
      timer: 1500,
      background:'#f5f3f3'
    })
    // setInput(clean)
    // window.location.href = "foodify-ten.vercel.app/menu";
  }
  function handleChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // setErrors(validate({
    //     ...input,
    //     [e.target.name] : e.target.value
    // }))
  };

  function handleSelect(e) {
    if (!input.category.includes(e.target.value)) {
      setInput({
        ...input,
        category: [...input.category, e.target.value]
      })
    } else return validateCategoria()
    logo = false

  }

  // function handleReset(e) {
  //   setInput(clean)
  //   // setErrors('')
  // }

  function handleDelete(e) {
    setInput({
      ...input,
      category: input.category.filter(g => g !== e)
    })
  }

  return (

    <div className='grid justify-items-center items-center content-center'>
      <div>
        <div className='border border-gray-300 rounded-lg mt-20'>
          {/* <div>
            <h1 className="sm: w-full flex justify-center outline-none text-lg p-2  rounded text-white bg-orange-400 border-b-4 border-gray-300">Edit Menu</h1>

          </div> */}
          <div className='mt-[10px] flex justify-center'>
            <button onClick={handleLoad} className="inline-flex items-center mb-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Load current menu</button>
          </div>
          <form className='grid grid-cols-2 gap-4 p-5 justify-items-center text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300' onSubmit={handleSubmit}>
            <div >

              <div>
                <label>Name</label>
              </div>

              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400  text-textColor'
                // placeholder={dishes.name}
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              />

            </div>
            <div className='grid content-around h-full'>

              <div>
                <select
                  name="category" className='p-2 w-72 outline-none  text-base border-b-2 border-gray-200 md:mt-2 rounded-md cursor-pointer bg-gray-50 text-textColor' onChange={(e) => handleSelect(e)}>
                  <option value="other" className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-gray-400 text-base">
                    Select Category
                  </option>
                  {categories.map((g, i) => (
                    <option key={i} value={g.name}>{g.name}</option>
                  ))}
                </select>
              </div>

            </div>
            <div>
              <div>
                <label>Rating</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.rating}
                type="number"
                name="rating"
                value={input.rating}
                min='0'
                max='5'
                step='0,1'
                onChange={handleChange}
              />

            </div>
            <div>

              <div>
                <label>Price</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.price}
                type="number"
                name="price"
                min='0'
                value={input.price}
                onChange={handleChange}
              />

            </div>
            <div className='grid justify-center'>
              <div className='flex justify-center'>
                <label>Description</label>
              </div>
              <textarea
                className='flex justify-center w-72 m-3 rounded text-lg bg-transparent placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.description}
                type="text" name="description"
                value={input.description}
                onChange={handleChange}
              />

            </div>
            <div>

              {logo === false ? input.category.map((e, i) =>
                <div key={i} className='flex justify-around p-1 w-[287px] m-1 bg-primary rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <div className='w-0 font-semibold flex justify-center content-center'>
                    <button onClick={() => handleDelete(e)} >X</button>
                  </div>
                  <p className="">{e}</p>
                </div>
              )
                :
                <img src={logo} className="object-cover w-40 -my-6" alt="logo" />
              }
            </div>
            <div className='w-full h-full flex justify-center'>
              <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>Submit</button>

            </div>

          </form>



        </div>
      </div>

    </div>
  )
}

export default Editar