import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'




export default function DetalleVentas() {
    const dispatch = useDispatch()
    const { getOrderId } = useSelector((state) => state.getOrderId)
    // const { getOrderId2 } = useSelector((state) => state.getOrderId2)
    const orderDishes = getOrderId.dishes
    const orderDish = []

    if (getOrderId) {
        for (let i = 0; i < orderDishes.length; i++) {
            if (orderDish.find(e => e.name === getOrderId.dishes[i].name)) {
                for (let j = 0; j < orderDish.length; j++) {
                    if (orderDish[j].name === getOrderId.dishes[i].name) orderDish[j].quantity++
                }
            } else {
                orderDish.push({
                    name: getOrderId.dishes[i].name,
                    quantity: 1,
                    price: getOrderId.dishes[i].price,
                    image: getOrderId.dishes[i].image,
                })
            }
        }
    }




    return (

        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 rounded-l-lg">
                            #Order {getOrderId.order_number}
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Qty
                        </th>
                        <th scope="col" className="py-3 px-6 rounded-r-lg">
                            Price
                        </th>
                    </tr>
                </thead>
                {orderDish && orderDish.map((e, i) => {
                    return (
                        <tbody key={i}>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {e.name}
                                </th>
                                <td className="py-4 px-6">
                                    <img src={e.image} alt='not found' className='w-28'></img>
                                </td>
                                <td className="py-4 px-6">
                                    {e.quantity}
                                </td>
                                <td className="py-4 px-6">
                                    $ {e.price * e.quantity}
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
                <tfoot>
                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="py-3 px-6 text-base">Total</th>
                        <th scope="row" className="py-3 px-6 text-base"></th>
                        <td className="py-3 px-6">{getOrderId?.dishes.length}</td>
                        <td className="py-3 px-6">$ {getOrderId?.final_price}</td>
                    </tr>
                </tfoot>
            </table>

        </div>

    )
}
