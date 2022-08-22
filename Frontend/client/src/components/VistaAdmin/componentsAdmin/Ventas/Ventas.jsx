import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getOrder2, sortBy, searchOrder, searchDate, getWaiters, getOrderId, cleanOrderId} from '../../../../Reducer/menuSlice'
import InfiniteScroll from 'react-infinite-scroll-component';
import Pagination from './Pagination';
import { getFirestore, collection, doc, query, where, getDocs } from 'firebase/firestore'
import firebaseApp from '../../../../Firebase/Credentials';
import DetalleVentas from './DetalleVentas';

export default function Ventas({ user }) {
    const { order2 } = useSelector((state) => state.order2)
    const [currentPage, setCurrentPage] = useState(1)
    const [orderPerPage] = useState(12)
    const indexLast = currentPage * orderPerPage
    const indexFirst = indexLast - orderPerPage
    const allPages = order2.slice(indexFirst, indexLast)
    const dispatch = useDispatch()
    const fs = getFirestore(firebaseApp)
    const q = query(collection(fs, 'users'))
    const [allUsers, setAllUsers] = useState()
    const [componentView, setComponentView] = useState('select')
    const idOrder = localStorage.getItem('orderDetalleID')
    


    useEffect(() => {
        dispatch(getOrder2())
        const users = []
        async function listUsers() {
            const querySnapshot = await getDocs(q)
            querySnapshot?.forEach((e) => {
                users.push(e?.data())
            })
            setAllUsers(users)
        }
        listUsers()
        dispatch(getOrderId(idOrder))
    }, [])

    function paginated(pageNumber) {
        setCurrentPage(pageNumber)
    }

    const [input, setInput] = useState('');
    const [date, setDate] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchOrder(input))
        setInput('')
    }

    const enter = (e) => {
        if (e.keyCode === 13) {
            dispatch(searchOrder(input))
            setCurrentPage(1)
            setInput('')
        }
    }

    const enterDate = (e) => {
        if (e.keyCode === 13) {
            dispatch(searchDate(date))
            setCurrentPage(1)
            setInput('')
        }
    }


    function handleDateChange(e) {
        e.preventDefault()
        setDate(e.target.value)
    }

    function handleDate(e) {
        e.preventDefault()
        dispatch(searchDate(date))
        setCurrentPage(1)
    }

    function handleOrderBy(e) {
        e.preventDefault()
        dispatch(sortBy(e.target.value))
        setCurrentPage(1)
    }

    function handleUsers(e) {
        e.preventDefault()
        dispatch(getWaiters(e.target.value))
        setCurrentPage(1)
    }

    function handleComponentView(e){
        e.preventDefault()
        setComponentView('list')
        localStorage.setItem('orderDetalleID', e.target.value)
        dispatch(getOrderId(e.target.value))
        
    }
    function handleReturn(e){
        e.preventDefault()
        setComponentView(e.target.name)
        
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg min-h-screen">
            {componentView === 'select' ?
                <div>
                    {/* ------------- FILTROS ------------ */}
                    <div className='p-5'>
                        <input type='text' className='rounded-md' placeholder='Order Number' value={input} onChange={handleChange} onKeyDown={enter} />
                        <button type='submit' onClick={handleSubmit} className='ml-2 rounded-md border border-solid border-black h-11 w-20 bg-white'>Search</button>
                        <select onChange={(e) => { handleOrderBy(e) }} className='cursor-pointer ml-8 rounded-md '>
                            <option className='' value="default" hidden> Order </option >
                            <option value="high"> High price </option>
                            <option value="low"> Low price </option>
                        </select>
                        <select onChange={(e) => { handleUsers(e) }} className='cursor-pointer ml-8 rounded-md'>
                            <option hidden>Waiters</option>
                            <option value='all'>All</option>
                            {allUsers?.map((e, i) => {
                                return (
                                    <option key={i} value={e.name}>{e.name + ' ' + e.lastname}</option>
                                )
                            })}
                        </select>
                        <input type='date' value={date} onChange={handleDateChange} onKeyDown={enterDate} className='rounded-md ml-8' />
                        <button type='date' onClick={handleDate} className='ml-2 rounded-md'>Search</button >
                    </div>

                    {/* ------------- LISTA DE VENTAS ------------ */}

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    #Order
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Table
                                </th>
                                <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Status
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Waiter
                                </th>
                            </tr>
                        </thead>
                        {allPages?.map((e, i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <th scope="col" className="py-3 px-6 bg-gray-100 dark:bg-gray-800 border border-slate-300">
                                            <button id='id-order' value={e._id} onClick={handleComponentView}>{e.order_number}</button>
                                        </th>
                                        <th scope="col" className="py-3 px-6 border border-slate-300">
                                            {e.table.table_number}
                                        </th>
                                        <th scope="col" className="py-3 px-6 bg-gray-100 dark:bg-gray-800 border border-slate-300">
                                            {e.actual_state}
                                        </th>
                                        <th scope="col" className="py-3 px-6 border border-slate-300">
                                            {e.timestamps.slice(0, 10)}
                                        </th>
                                        <th scope="col" className="py-3 px-6 bg-gray-100 dark:bg-gray-800 border border-slate-300">
                                            {e.final_price}
                                        </th>
                                        <th scope="col" className="py-3 px-6 bg-gray-100 dark:bg-gray-800 border border-slate-300">
                                            {e.waiter}
                                        </th>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>


                    {/* ------------- PAGINACION ------------ */}
                    <Pagination
                        paginated={paginated}
                        order2={order2.length}
                        orderPerPage={orderPerPage}
                        currentPage={currentPage}
                    />
                </div>
                // {/* ------------- DETALLE ORDEN ------------ */}
                :
                <div>
                    <button onClick={handleReturn} name='select' className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Return</button>
                    <DetalleVentas/>
                </div>
            }
        </div>
    )
}