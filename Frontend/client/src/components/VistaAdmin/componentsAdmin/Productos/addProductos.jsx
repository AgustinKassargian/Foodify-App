import React from "react";
// import NavBar from '../../../../components/NavBar/NavBar'
// import Footer from '../Footer/Footer'
//import './Form.css'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewPost } from '../../../../Reducer/menuActions'
import { getCategories, getMenu } from '../../../../Reducer/menuSlice'
import { MdFastfood, MdCloudUpload, MdAttachMoney, MdStarRate, MdOutlineCloudDone } from 'react-icons/md'
import axios from "axios";
import Loading from "../../../Loading/Loading";
import { motion } from 'framer-motion'


const Swal = require('sweetalert2')

function validateName(){

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
    width: '24%',
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

function validatePrice(){
    const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    width: '23%',
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
    html: '<b class="rojo">Price is required!</b>'
})

}

function validateRating(){
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
            html: '<b class="rojo"> Rating must be between 1 and 5!</b>'
        })
}




function validateDescription() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        width: '27%',
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
        html: '<b class="rojo">Description is required!</b>'
    })
}

function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = validateName()
    } else if (!input.description) {
        errors.description = ''
    } else if (input.image && input.image.slice(0, 7) !== 'https://') {
        errors.image = 'Wrong url'
    } else if (!input.price) {
        errors.price = validatePrice()
    } else if (input.rating < 0 || input.rating > 5) {
        errors.rating = validateRating()
    }
    return errors
}


export default function Form() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const clean = { name: '', description: '', price: 0, rating: 0, category: '', image: '' };   
    const {categories} = useSelector(state => state.categories)
    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState('')
    const [pid, setPid] = useState('')
    const [token, setToken] = useState('')
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);



    useEffect(() => {
        dispatch(getMenu())
        dispatch(getCategories())
    }, [])

    const { dishes } = useSelector(state => state.dishes);
    const [input, setInput] = useState({
        name: '',
        category: [],
        price: 1,
        description: '',
        image: ''

    });


    function handleSubmit(e) {
        e.preventDefault();
        if(!input.name) return validateName()
    if(!input.description) return ''
    if(!input.price) return validatePrice()
    if(input.price < 1 || !input.price) return validatePrice()
        setInput(input.image = preview)
        dispatch(postNewPost(input))
        Swal.fire({
            title: 'Menu created!',
            icon: 'success', 
            width: '40%',
            padding: '1rem',
            backdrop: false,
            position: 'center',
            showCancelButton: true,
            confirmButtonText: 'Home',
            cancelButtonText: "Add +",
            cancelButtonColor: '#e9943e',
            confirmButtonColor: '#7f7d83',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/";
                }}) 
        setInput(clean)
    };

    const handleUploadImage = (files) => {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "tx52ci73")
        try {

            axios.post("https://api.cloudinary.com/v1_1/dngjlj1pa/image/upload", formData).then((response) => { setPreview(response.data.secure_url) && setPid(response.data.public_id) && setToken(response.data.delete_token) })
            setFields(true);
            setMsg("Image uploaded successfully 😊");
            setAlertStatus("success");
            setTimeout(() => {
                setFields(false);
            }, 6000);
        } catch (error) {
            console.log(error);
            setFields(true);
            setMsg("Error while uploading: Try Again 🙇");
            setAlertStatus("danger");
            setTimeout(() => {
                setFields(false);
            }, 6000);
        }

    }

    const handleDeleteImageUploaded = async (e) => {
        const timestamp = new Date().getTime()
        const public_id = pid
        const delete_token = token
        const formData = new FormData()
        formData.append("public_id", public_id)
        formData.append("api_key", 936858798986787)
        formData.append("timestamp", timestamp)
        formData.append("token", delete_token)
        await axios.post("https://api.cloudinary.com/v1_1/dngjlj1pa/delete_by_token", formData)
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };


    function handleSelect(e) {
        if (!input.category.includes(e.target.value)) {
            setInput({
                ...input,
                category: [...input.category, e.target.value]
            })
        } else return alert('Esa categories ya fue seleccionada')
    }
    function handleDelete(e) {
        setInput({
            ...input,
            category: input.category.filter(g => g !== e)
        })
    }

    return (
        <div>
            

            <div className="w-full  flex items-center justify-center mt-5">

                <div className="w-[90%] xxl:w-[28vw] xl:w-[35vw] lg:w-[40vw] md:mw-[40vw] sm:w-[60vw] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4" >
                    {fields && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
                                    ? "bg-red-400 text-red-800"
                                    : "bg-emerald-400 text-emerald-800"
                                }`}
                        >
                            {msg}
                        </motion.p>
                    )}
                    <div className="">
                        <h1 className="outline-none w-full text-lg p-2 rounded-md text-textColor">Create Menu</h1>
                        <form className="w-[400px] sm:w-[300px]" onSubmit={(e) => handleSubmit(e)} >

                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <MdFastfood className="text-xl text-gray-700" />
                                <input
                                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                                    placeholder="Give a name..."
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (<p className=''>{errors.name}</p>)}
                            </div>


                            <select className="outline-none w-full text-base border-b-2 border-gray-200 p-2 md:mt-2 rounded-md cursor-pointer bg-gray-50 text-textColor bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-0" name="category" id="" onChange={(e) => handleSelect(e)}>
                                <option value="other" hidden className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-gray-400 text-base">
                                    Select Category
                                </option>
                                {categories.map((g, i) => (
                                    <option key={i} value={g.name} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-50 text-textColor text-base' >{g.name}</option>
                                ))}
                            </select>



                            {!loading ?
                                <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 md:mt-3 md:p-6 cursor-pointer rounded-lg">
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        {
                                            preview ?
                                                <>
                                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">

                                                    </div>
                                                    <input
                                                        className="w-0 h-0"
                                                        type="file"
                                                        value={input.image}
                                                        // src={previewSource}
                                                        accept='image/*'
                                                        name="image"
                                                        // onChange={handleFileInputChange}
                                                        onChange={(event) => handleUploadImage(event.target.files)}
                                                    />
                                                    <img src={preview} alt='img' style={{ maxWidth: '220px', maxHeight: '220px' }} />

                                                    <div>
                                                        <button className="text-green-400 flex text-3xl"><MdOutlineCloudDone /></button>

                                                    </div>
                                                </> :
                                                <>
                                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                        <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                                        <p className="text-gray-500 hover:text-gray-700">
                                                            Click here to upload
                                                        </p>
                                                    </div>
                                                    <input
                                                        className="w-0 h-0"
                                                        type="file"
                                                        value={input.image}
                                                        // src={previewSource}
                                                        accept='image/*'
                                                        name="image"
                                                        onChange={(event) => handleUploadImage(event.target.files)}
                                                    //   onChange={handleFileInputChange}
                                                    /></>
                                        }

                                    </label>
                                    {errors.image && (<p className=''>{errors.image}</p>)}
                                </div>
                                :

                                <Loading />
                            }

                            <div className="w-full flex flex-col md:flex-row items-center gap-3">

                                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                    <MdAttachMoney className="text-gray-700 text-2xl" />
                                    <input
                                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                                        value={input.price}
                                        type="number"

                                        name="price"
                                        placeholder="Price"
                                        onChange={handleChange}
                                    />
                                    {errors.price && (<p>{errors.price}</p>)}
                                </div>
                            </div>
                            <div className="">
                                <h2 className="outline-none w-full text-base p-2 rounded-md text-textColor ">Description:</h2>
                                <textarea className="w-full h-full text-lg bg-transparent rounded-md outline-none border-b border-gray-300 placeholder:text-gray-400 text-textColor" name="description" value={input.description} onChange={handleChange} />
                                {errors.description && (<p>{errors.description}</p>)}
                            </div>

                            <div className="flex items-center justify-around w-full">

                                <button className=" w-full md:w-auto sm:w-auto sm:px-6 border-none outline-none bg-orange-500 px-12 py-2 rounded-lg text-lg text-white font-semibold">Submit</button>
                            </div>
                            <div className="gap-3 px-3 py-3">
                                {input.category && input.category.map((e, i) =>
                                    <div className='flex justify-around p-1 w-[287px] m-1 bg-primary rounded-lg border border-gray-200 shadow-md hover:bg-gray-100' key={i}>
                                        <p className="">{e}</p>
                                        <div>
                                            <button className='text-naranja font-semibold text-lg -mt-10 hover:text-2xl transition-all ease-in-out' onClick={() => handleDelete(e)}>x</button>
                                        </div></div>
                                )}
                            </div>
                        </form>
                    </div>



                </div>
            </div>

        </div>
    )
}














