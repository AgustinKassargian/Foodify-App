import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getTable} from '../../../../Reducer/menuSlice'
import PutTables from './PutTables'
import Pagination from './Pagination'

export default function TableList() {
    const {table}  = useSelector(state => state.table)
    const [currentPage, setCurrentPage] = useState(1)
    const [tablePerPage] = useState(12)
    const indexLast = currentPage * tablePerPage
    const indexFirst = indexLast - tablePerPage
    const allPages = table.slice(indexFirst, indexLast)
    const [componentView, setComponentView ] = useState('select')
    const dispatch = useDispatch()
    useEffect (()=> {
        dispatch(getTable())
    }, [])

    function paginated(pageNumber){
        setCurrentPage(pageNumber)
    }

    function handleComponentView(e){
        e.preventDefault()
        localStorage.setItem('tableID', e.target.value)
        setComponentView(e.target.name)
    }return (
    <div>
        {componentView === 'select' ?
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg min-h-screen">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Table
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Capacity
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                {allPages && allPages.map((e,i)=> {
                    return(
                <tbody key={i}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {e.table_number}
                        </th>
                        <td className="py-4 px-6">
                            {e.actual_state}
                        </td>
                        <td className="py-4 px-6">
                            {e.max_capacity}
                        </td>
                        <td className="py-4 px-6">
                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleComponentView} value={e._id} name='edit'>Edit</button>
                        </td>
                    </tr>
                </tbody>
                )})}
            </table>
            <Pagination
        paginated={paginated}
        table={table.length}
        tablePerPage={tablePerPage}
        currentPage={currentPage}
            />
        </div>
        
        :
        <div>
                <button onClick={handleComponentView} name='select' className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Volver</button>
                <PutTables/>
        </div>
    }
    
    </div>
)
}
