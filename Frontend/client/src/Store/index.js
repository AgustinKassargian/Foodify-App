import { configureStore } from '@reduxjs/toolkit'
import dishes from '../Reducer/menuSlice'
import modal from '../Reducer/modalSlice'
import dish from '../Reducer/menuSlice'
import detail from '../Reducer/menuSlice'
import cart from '../Reducer/menuSlice'
import table from '../Reducer/menuSlice'
import idTable from '../Reducer/menuSlice'
import cartPost from '../Reducer/menuSlice'
import order from '../Reducer/menuSlice'
import actualOrder from '../Reducer/menuSlice'
import order2 from '../Reducer/menuSlice'
import order2Filter from '../Reducer/menuSlice'
import metric from '../Reducer/menuSlice'
import email from '../Reducer/menuSlice'
import categories from '../Reducer/menuSlice'
import reviews from '../Reducer/menuSlice'
import getOrderId from '../Reducer/menuSlice'

export default configureStore ({
    reducer: {
        dishes,
        modal,
        dish,
        detail,
        cart,
        cartPost,
        table,
        idTable,
        order,
        actualOrder,
        order2,
        order2Filter,
        metric,
        email,
        categories,
        reviews,
        getOrderId,

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
