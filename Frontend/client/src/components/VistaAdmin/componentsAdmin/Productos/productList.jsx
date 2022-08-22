import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {dishId, getCategories, getMenu, getMenuFilter, orderBy, searchBar} from '../../../../Reducer/menuSlice'
import Pagination from './EditPagination'
import Editar from './editProductos'

export default function ProductList() {
    const dispatch = useDispatch()
    const { dishes } = useSelector(state => state.dishes)
    const { categories } = useSelector(state => state.categories)
    const [componentView, setComponentView ] = useState('select')
    const [currentPage, setCurrentPage] = useState(1)
    const [dishesPerPage] = useState(5)
    const indexLast = currentPage * dishesPerPage
    const indexFirst = indexLast - dishesPerPage
    const allPages = dishes.slice(indexFirst, indexLast)
    const [input, setInput] = useState('');
    


    useEffect(() => {
        dispatch(getMenu())
        dispatch(getCategories())
    }, [])

    function handleOrderBy(e) {
        e.preventDefault()
        dispatch(orderBy(e.target.value))
        setCurrentPage(1)
    }

    function handleMenues(e) {
        e.preventDefault()
        dispatch(getMenuFilter(e.target.value))
        setCurrentPage(1)
    }

    function handleComponentView(e){
        e.preventDefault()
        localStorage.setItem('dishEditID', e.target.value)
        setComponentView(e.target.name)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchBar(input))
        setInput('')
    }

    const enter = (e) => {
        if (e.keyCode === 13) {
            dispatch(searchBar(input))
            setInput('')
        }
    }

    function paginated(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <div >

            { componentView === 'select' ?
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex pt-6 ">
                <input
                    className='rounded-md'
                    onKeyDown={enter}
                    type='text'
                    placeholder="Search.."
                    value={input}
                    onChange={handleChange}
                    />
                <button 
                    type='submit'
                    onClick={handleSubmit}
                    className='ml-2 border border-solid border-black h-11 w-20 bg-white rounded-md'
                    >
                        Search
                </button>
                
            
            <select onChange={ (e) => {handleOrderBy(e)}} className='ml-8 text-center rounded-md'>
                <option value="default" hidden> Order </option>
                <option value="high"> High price </option>
                <option value="low"> Low price </option>
                <option value="highR"> High rating </option>
                <option value="lowR"> Low rating </option>
            </select>

            <select  onChange={handleMenues} className='ml-8 text-center rounded-md'>
                <option hidden> Menu type </option>
                <option value='all'> All </option>
                {categories?.map((e, i) => {
                    return(
                        <option key={i} value={e.name}>{e.name}</option>
                    )
                })}
            </select>
            </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {allPages?.map((e, i) => {
                            return(
                                <tbody key={i}>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {e.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            <img className="py-4 px-6 w-28 h-20" src={e.image} alt='img not found'/>
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.category.length > 1 ? e.category.join(', '): e.category}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.price}
                                        </td>
                                        <td className="py-4 px-6">
                                            <button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleComponentView} value={e._id} name='edit'>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                </table>
                <Pagination
                dishesPerPage={dishesPerPage}
                paginated={paginated}
                currentPage={currentPage}
                dishes={dishes.length}
                />
            </div>
            :
            <div>
                <button onClick={handleComponentView} name='select' className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Return</button>
                <Editar/>
            </div>
            }

        </div>
    )
}
