import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { dishId } from '../../../../Reducer/menuSlice';
import { useParams } from 'react-router-dom'
import { getTable, putTable } from '../../../../Reducer/menuSlice';
import { tableId } from '../../../../Reducer/menuActions';
// import logo from '../../../../utils/LogoMain.png'
import { postNewTable } from '../../../../Reducer/menuActions'

const Swal = require('sweetalert2')

                        function TableCreated() {
                            
                            const dispatch = useDispatch()
                            const table = useSelector(state => state.table)
                            
                            
                            const [input, setInput] = useState({
                              table_number: '',
                              max_capacity: 0,
                              // actual_state: '',
                            });
                            
                            useEffect(() => {
                              dispatch(getTable())
                            }, [dispatch])
                            
                              
                            
                            
                            
                            
                            const handleSubmit=(e)=> {
                              e.preventDefault();
                              // if(dishes.map(e => e.name.toLowerCase() === input.name.toLowerCase())) return alert('The name already exist!')
                              // if(!input.name) return alert('Falta ingresar nombre')
                              // if(!input.description) return alert('Falta ingresar descripcion')
                              // if(!input.price) return alert('Falta ingresar precio')
                              // if(input.price < 0) return alert('El valor debe ser mayor a 0')
                              // if(input.rating < 0 || input.rating > 5) return alert('El valor debe ser mayor a 0 o menor a 5')
                              // if(input.image && input.image.slice(0,8) !== 'https://') return alert('Ingrese una URL valida')
                              dispatch(postNewTable(input))
                              //alert('Table modificated!!')
                              Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'Table modificated!',
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
                            




  return (
    <div className='grid justify-items-center items-center content-center'>
      <div>
        <div className='border border-gray-300 rounded-lg'>
        <div>
                <h1 className="sm: w-full flex justify-center outline-none text-lg p-2 rounded text-white bg-orange-400 border-b-4 border-gray-300">Edit Table</h1>
              </div>
                        <form className="" onSubmit={(e) => handleSubmit(e)} >

                        <div > 
              
              <div>
                <label>Table name</label>
              </div>

              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400  text-textColor'
                // placeholder={dishes.name}
                type="text"
                name="table_number"
                value={input.table_number}
                onChange={handleChange}
              />

            </div>
            {/* <div className='grid content-around h-full'>

              <div>
                <select
                  name="category" className='p-2 w-72 outline-none  text-base border-b-2 border-gray-200 md:mt-2 rounded-md cursor-pointer bg-gray-50 text-textColor' onChange={(e) => handleSelect(e)}>
                    <option value="other" className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-gray-400 text-base">
              Select Category
            </option>
                  {categories.map((g, i) => (
                    <option key={i} value={g}>{g}</option>
                  ))}
                </select>
              </div>

            </div> */}
            <div>
              <div>
                <label>Maximum capacity</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.rating}
                type="number"
                name="max_capacity"
                value={input.max_capacity}
                min='0'
                
                step='1'
                onChange={handleChange}
              />

            </div>
            {/* <div>

              <div>
                <label>Actual state</label>
              </div>
              <input
                className='w-72 text-lg bg-transparent rounded outline-none placeholder:text-gray-400 text-textColor'
                // placeholder={dishes.price}
                type="text"
                name="actual_state"
                value={input.actual_state}
                onChange={handleChange}
              />

            </div> */}
            {/* <div className='grid justify-center'>
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

            </div> */}
            {/* <div>
            
            {logo===false? input.category.map((e, i) =>
              <div key={i}>
                <p className="">{e}</p>
                <div>
                  <button onClick={() => handleDelete(e)}>x</button>
                </div></div>
            )
            :
            <img src={logo} className="object-cover w-40 -my-6" alt="logo" />
            }
            </div> */}
            <div className='w-full h-full flex justify-center'>
        <button className='w-full md:w-auto sm:w-auto sm:px-6 border-none outline-none bg-orange-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'>Submit</button>

      </div>
                        </form>
                    </div>



                </div>
            </div>
  )
}

export default TableCreated