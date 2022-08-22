import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMetric, getMetricOrder, getOrder2} from '../../../../Reducer/menuSlice'
import Pagination from './Pagination'

export default function Metricas() {
    const { metric } = useSelector(state => state.metric)
    const [currentPage, setCurrentPage] = useState(1)
    const [metricPerPage] = useState(10)
    const indexLast = currentPage * metricPerPage
    const indexFirst = indexLast - metricPerPage
    const allPages = metric.slice(indexFirst, indexLast)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOrder2())
        dispatch(getMetric())
    },[])

    function handleOrder(e) {
        e.preventDefault()
        dispatch(getMetricOrder(e.target.value))
        setCurrentPage(1)
    }

    function paginated(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
            <div className='pt-5'>
            {/* <h1 className='text-2xl font-extrabold text-center'>Sales Metrics</h1> */}
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                            <select className='cursor-pointer ml-8 rounded-md ' onChange={(e) => {handleOrder(e)}}>
                                <option hidden> Order </option>
                                <option value="high"> High </option>
                                <option value="low"> Low </option>
                                <option value="highA"> A - Z </option>
                                <option value="lowA"> Z - A </option>
                            </select>
                            </th>
                            <th scope="col" className="py-3 px-6">
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Total quantity sold
                            </th>
                        </tr>
                    </thead>
                    
                    {allPages?.map((e,i) => {
                        return(
                            <tbody key={i}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.name}
                                    </th>
                                    <td className="py-4 px-6">
                                    </td>
                                    <td className="py-4 px-6">
                                    </td>
                                    <td className="py-4 px-6">
                                        {e.quantity}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    
                </table>
    </div>
    <Pagination 
    currentPage={currentPage}
    metric={metric.length}
    paginated={paginated}
    metricPerPage={metricPerPage}
    />
    </div>
    )
}
