import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../../../../utils/avatar.png'

//IMPORT FIREBASE
import { getAuth } from 'firebase/auth'
import firebaseApp from '../../../../Firebase/Credentials'
import { getFirestore, doc, collection, setDoc, Firestore, query, where, getDocs } from "firebase/firestore";


function Waiters({user}) {
    const fs = getFirestore(firebaseApp)
    const q = query(collection(fs, "users"));
    // , where("rol", "==", 'waiter')
    const [allWaiters, setAllWaiters] = useState()
    
    const [viewer, setViewer] = useState('waiter')
    
    
    useEffect(()=>{
        const allWaiter = []
        async function listUsers(){
            const querySnapshot = await getDocs(q);
            querySnapshot?.forEach((doc) => {
                allWaiter.push(doc?.data());
               })
               setAllWaiters(allWaiter)   
    }
        listUsers()

    },[])


    useEffect(()=>{
        console.log('ESTE ES EL CONSOLE.LOG ' , allWaiters)
    },[allWaiters])


    const waiters = allWaiters?.filter(e=> e.rol=== 'waiter')
    const admins = allWaiters?.filter(e=> e.rol=== 'admin')

    function handlerButtonViewer(e){
        e.preventDefault()
        if(viewer !== 'waiter') setViewer('waiter')
        else setViewer('admin')
    }

  return (
    
    
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    {viewer === 'waiter' ? 
    
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <button onClick={(e)=>{handlerButtonViewer(e)}} scope="col" className="py-3 px-6">
                    Waiters
                </button>
                <th scope="col" className="py-3 px-6">
                 
                </th>
                <th scope="col" className="py-3 px-6">
                </th>
                <th scope="col" className="py-3 px-6">
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {
                            waiters && waiters.map((e, i)=>{
                              return(
            <tr key={i}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                        <img className="w-10 h-10 rounded-full" src={logo} alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>{e.name} {e.lastname}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{e.email}</div>
                        </div>
                    </div>
                </th>
                <td className="py-4 px-6">
                </td>
                <td className="py-4 px-6">
                </td>
                <td className="py-4 px-6">
                </td>                
            </tr>
            )
        })
        }

    
        </tbody>
    </table>
        :

        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <button onClick={(e)=>{handlerButtonViewer(e)}} scope="col" className="py-3 px-6">
                    Admins
                </button>
                <th scope="col" className="py-3 px-6">
                 
                </th>
                <th scope="col" className="py-3 px-6">
                </th>
                <th scope="col" className="py-3 px-6">
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {
                            admins && admins.map((e, i)=>{
                              return(
            <tr key={i}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                        <img className="w-10 h-10 rounded-full" src={logo} alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>{e.name} {e.lastname}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{e.email}</div>
                        </div>
                    </div>
                </th>
                <td className="py-4 px-6">
                </td>
                <td className="py-4 px-6">
                </td>
                <td className="py-4 px-6">
                </td>                
            </tr>
            )
        })
        }

    
        </tbody>
    </table>
        </div>
        }
</div>
  )
}

export default Waiters