//IMPORTS REACT - REDUX
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//IMPORTS  ACTIONS
import { postNewCategory } from "../../../../Reducer/menuActions"; 

const Swal = require('sweetalert2')

function validateName() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        width: '13%',
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
        html: '<b class="rojo">Name is required!</b>'
    })
}

function validateCharacters() {
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
        html: '<b class="rojo">Name must should have between 3 & 12 characters!</b>'
    })
}



export default function FormCategory(){
    const validate = (input)=>{
        let errors = {}
        if(!input.name){
            errors.name = validateName()
        }
        else if(input.name.length < 3 || input.name.length > 12){
            errors.name = 'Name must should have between 3 & 12 characters'
        }
    }
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: ''
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value            
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        setErrors(validate(input))
        if(!input.name) return validateName()
        if(input.name.length < 3 || input.name.length > 12) return validateCharacters()
            //alert('Name must should have between 3 & 12 characters')
         
        dispatch(postNewCategory(input))
        setInput('')
        //alert('Category Created Succefully')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Category Created Succefully!',
            showConfirmButton: false,
            timer: 1500,
            background:'#f5f3f3'
          })
    }

    return(
        <div className='border border-gray-300 rounded-lg mt-[15%] ml-[35%] w-64'>
            <h2 className="inline-flex items-center mb-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white  border border-gray-300 ">Create a new Category</h2>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <>Name</>
                <br/>
                <input type="text" name="name" value={input.name} onChange={handleChange}/>
                <br/>
                <button className="inline-flex items-center mb-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 "type="submit">Submit</button>
            </form>
            {/* <Link to= '/admin'>
                <button className="inline-flex items-center mb-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 ">Back</button>
            </Link> */}
        </div>
    )


}