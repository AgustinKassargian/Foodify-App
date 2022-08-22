import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addIdTable, getMenu, getTable, putTable, putTable2 } from '../../Reducer/menuSlice'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import NavBar from '../NavBar/NavBar'

export default function WaiterView({ user }) {
    const dispatch = useDispatch()
    const { table } = useSelector(state => state.table)
    const [loading, setLoading] = useState(false)
    const red = 'bg-red-500 font-bold w-40 m-3 rounded-md align-middle text-center '
    const green = 'bg-green-200 font-bold w-40 m-3 rounded-md align-middle text-center '
    const hidden = "hidden text-orange-500"
    const showing = "inline-flex justify-center items-center p-4 ml-4 w-4 h-4 text-2xl font-medium text-black bg-yellow-400 rounded-full "
    setInterval("location.reload()", 180000);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        dispatch(getMenu())
        dispatch(getTable())
    }, [])

    function handleStatus(e) {
        localStorage.setItem('tableID', e.target.value)
        const id = e.target.value
        const tableID = []
        for (let i = 0; i < table.length; i++) {
            if (table[i]._id === id) tableID.push(table[i])
        }
        if (tableID[0].actual_state === 'available') {
            dispatch(putTable({ actual_state: 'busy' }))
            //setStatusColor('bg-red-500 font-bold w-40 m-3 rounded-md align-middle')
            //window.location.reload()
        }
        else {
            dispatch(putTable({ actual_state: 'available' }))
            //setStatusColor('bg-green-200 font-bold w-40 m-3 rounded-md align-middle')
            //window.location.reload()
        }

        setTimeout(() => {
            window.location.reload()
        }, 1000)


    }
    function handleIdTable(e) {
        dispatch(addIdTable(e.target.value))
        localStorage.setItem('tableID', e.target.value)
    }

    function handleCall(e) {
        localStorage.setItem('tableEditID', e.target.value)
        dispatch(putTable2({ call: false }))
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (
        <div>
            <NavBar user={user}/>
            {loading ? <Loading /> : user?.rol === 'admin' || user?.rol === 'waiter' ?
                <div className='bg-gray-100 h-screen '>
                    <div className='absolute inset-0  grid content-center justify-center m-14'>
                        {table && table.map((e, i) => {
                            return (
                                <div key={i} className='flex bg-white border-b hover:bg-gray-100 shadow-md sm:rounded-lg m-2'>
                                    <div className='flex ' key={i}>
                                        <Link to={'/cart'}><button className='bg-gray-200 font-bold w-40 m-3 rounded-md' onClick={handleIdTable} value={e._id}>{e.table_number}</button></Link>
                                        <h1 className={`${e.actual_state === 'available' ? green : red}}`}> Status: {e.actual_state}</h1>
                                        <button className='bg-gray-200 font-bold w-40 m-3 rounded-md align-middle ' onClick={handleStatus} value={e._id}>STATUS</button>
                                    </div>
                                    <button className={`${e.call === false ? hidden : showing}}`} onClick={handleCall} value={e._id}>🛎</button>
                                </div>
                            )
                        })}

                    </div>
                </div>
                :
                <div>
                    You don't have permission to access this section
                    <br />
                    <button><Link to='/'>Go to home</Link></button>
                </div>
            }
        </div>
    )
}