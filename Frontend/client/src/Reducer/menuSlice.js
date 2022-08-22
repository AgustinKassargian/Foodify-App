import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMenu = createAsyncThunk('dishes/getMenu',
    async () => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get('https://henryfinalproyect.herokuapp.com/api/dish')).data
                return res
            } else {
                const res = (await axios.get('http://localhost:4200/api/dish')).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const dishId = createAsyncThunk('dish/dishId',
    async (_id) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/dish/${_id}`)).data
                return res
            } else {
                const res = (await axios.get(`http://localhost:4200/api/dish/${_id}`)).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    })

export const getMenuFilter = createAsyncThunk('dishes/getMenuFilter',
    async (payload) => {
        return payload
    }
)

export const searchBar = createAsyncThunk('search/searchBar',
    async (payload) => {
        return payload
    })

export const searchOrder = createAsyncThunk('search/searchOrder',
    async (payload) => {
        return payload
    })

export const searchDate = createAsyncThunk('search/searchDate',
    async (payload) => {
        return payload
    })

export const addDishCart = createAsyncThunk('cart/addDishCart',
    async (payload) => {
        return payload
    }
)
export const addDishCartPost = createAsyncThunk('cart/addDishCartPost',
    async (payload) => {
        return payload
    }
)

export const deleteOneDish = createAsyncThunk('cart/deleteOneDish',
    async (payload) => {
        return payload
    }
)

export const deleteAllDish = createAsyncThunk('cart/deleteAllDish',
    async (payload) => {
        return payload
    }
)

export const orderBy = createAsyncThunk('order/orderBy',
    async (payload) => {
        return payload
    }
)

export const sortBy = createAsyncThunk('sort/sortBy',
    async (payload) => {
        return payload
    }
)


export const getTable = createAsyncThunk('table/getTable',
    async () => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get('https://henryfinalproyect.herokuapp.com/api/table')).data
                return res
            } else {
                const res = (await axios.get('http://localhost:4200/api/table')).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const putTable = createAsyncThunk('table/putTable',
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const id = localStorage.getItem('tableID')
                return await axios.put(`https://henryfinalproyect.herokuapp.com/api/table/${id}`, payload)
            } else {
                const id = localStorage.getItem('tableID')
                return await axios.put(`http://localhost:4200/api/table/${id}`, payload);
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const putTable2 = createAsyncThunk('table/putTable',
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const id = localStorage.getItem('tableEditID')
                return await axios.put(`https://henryfinalproyect.herokuapp.com/api/table/${id}`, payload)
            } else {
                const id = localStorage.getItem('tableEditID')
                return await axios.put(`http://localhost:4200/api/table/${id}`, payload);
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const addIdTable = createAsyncThunk('table/addDishTable',
    async (payload) => {
        return payload
    }
)

export const getOrder = createAsyncThunk('order/getOrder',
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/order/${payload}`)).data
                return res
            } else {
                const res = (await axios.get(`http://localhost:4200/api/order/${payload}`)).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)
export const getActualOrder = createAsyncThunk('order/getActualOrder',
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/order/${payload}`)).data
                return res
            } else {
                const res = (await axios.get(`http://localhost:4200/api/order/${payload}`)).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)
export const getOrder2 = createAsyncThunk('order/getOrder2',
    async () => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/order/`)).data
                return res
            } else {
                const res = (await axios.get(`http://localhost:4200/api/order/`)).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)
export const getMetric = createAsyncThunk('metric/getMetric',
    async (payload) => {
        return payload
    }
)

export const getMetricOrder = createAsyncThunk('metric/getMetricOrder',
    async (payload) => {
        return payload
    }
)


export const getCategories = createAsyncThunk('categories/getCategories',
    async () => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get('https://henryfinalproyect.herokuapp.com/api/category')).data
                return res
            }
            else {
                const res = (await axios.get('http://localhost:4200/api/category')).data
                return res
            }
        }
        catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const getReviews = createAsyncThunk('reviews/getReviews',
    async () => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get('https://henryfinalproyect.herokuapp.com/api/review')).data
                return res
            }
            else {
                const res = (await axios.get('http://localhost:4200/api/review')).data
                return res
            }
        }
        catch { throw new Error('Ambas rutas fallaron') }
    }
)

export const getWaiters = createAsyncThunk('waiters/getWaiters',
    async (payload) => {
        return payload
    }
)

export const getOrderId = createAsyncThunk('order/getOrderId',
    async (payload) => {
        try {
            if (window.location.href.slice(0, 16) !== 'http://localhost') {
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/orderid/${payload}`)).data
                return res
            } else {
                const res = (await axios.get(`http://localhost:4200/api/orderid/${payload}`)).data
                return res
            }
        } catch { throw new Error('Ambas rutas fallaron') }
    }
)




export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        dishes: [],
        dishFiltered: [],
        cart: [],
        cartPost: [],
        dish: {},
        table: [],
        idTable: [],
        order: [],
        actualOrder: [],
        order2: [],
        order2Filter: [],
        metric: [],
        categories: [],
        reviews: [],
        getOrderId: [],
    },
    reducers: {
        clearCart: (state, action) => {
            state.cart = []
        },
        clearCartPost: (state, action) => {
            state.cartPost = []
        },
        cleanDetail: (state, action) => {
            state.dish = {}
        },
        cleanOrderId: (state, action) => {
            state.getOrderId = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.dishes = action.payload
            state.dishFiltered = action.payload
        })
        builder.addCase(addIdTable.fulfilled, (state, action) => {
            state.idTable = action.payload
        })
        builder.addCase(getOrderId.fulfilled, (state, action) => {
            // state.getOrderId2 = action.payload
            // const orderDishes = action.payload.dishes
            // const orderDish = []
            // for (let i = 0; i < orderDishes.length; i++) {
            //     if (orderDish.find(e => e.name === getOrderId.dishes[i].name)) {
            //         for (let j = 0; j < orderDish.length; j++) {
            //             if (orderDish[j].name === getOrderId.dishes[i].name) orderDish[j].quantity++
            //         }
            //     } else {
            //         orderDish.push({
            //             name: getOrderId.dishes[i].name,
            //             quantity: 1,
            //             price: getOrderId.dishes[i].price,
            //             image: getOrderId.dishes[i].image,
            //         })
            //     }
            // }
            // state.getOrderId = orderDish
            state.getOrderId = action.payload
        })
        builder.addCase(getActualOrder.fulfilled, (state, action) => {
            state.actualOrder = action.payload
        })
        builder.addCase(getMetric.fulfilled, (state, action) => {
            const allOrder = state.order2
            const orderCount = allOrder.map(e => e.dishes).flat()
            const nameCount = orderCount.map(e => e.name)
            const dish = []
            for (let i = 0; i < orderCount.length; i++) {
                if (dish.find(e => e.name === orderCount[i].name)) {
                    for (let j = 0; j < dish.length; j++) {
                        if (dish[j].name === orderCount[i].name) dish[j].quantity++
                    }
                } else {
                    dish.push({
                        name: orderCount[i].name,
                        quantity: 1
                    })
                }
            }
            state.metric = dish
        })
        builder.addCase(getMetricOrder.fulfilled, (state, action) => {
            const all = state.metric
            const order = action.payload === 'default' ? all
                : action.payload === 'low' ? all.sort(function (a, b) {
                    if (a.quantity > b.quantity) return 1;
                    if (a.quantity < b.quantity) return -1;
                    return 0;
                }) : action.payload === 'high' ? all.sort(function (a, b) {
                    if (a.quantity > b.quantity) return -1;
                    if (a.quantity < b.quantity) return 1;
                    return 0;
                })
                    : action.payload === 'highA' ? all.sort(function (a, b) {
                        if (a.name > b.name) return 1;
                        if (a.name < b.name) return -1;
                        return 0;
                    }) : all.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (a.name < b.name) return 1;
                        return 0;
                    })
            state.metric = order
        })
        builder.addCase(getOrder.fulfilled, (state, action) => {
            const allDish = state.dishes
            const allOrder = action.payload[0].dishes
            const allOrderFromBack = []
            for (let i = 0; i < allOrder.length; i++) {
                let e = allDish.find((e) => e._id === allOrder[i])
                allOrderFromBack.push(e)
            }
            state.order = allOrderFromBack
        })
        builder.addCase(dishId.fulfilled, (state, action) => {
            state.dish = action.payload
        })
        builder.addCase(getOrder2.fulfilled, (state, action) => {
            state.order2 = action.payload
            state.order2Filter = action.payload
        })
        builder.addCase(getTable.fulfilled, (state, action) => {
            state.table = action.payload
        })
        builder.addCase(orderBy.fulfilled, (state, action) => {
            const all = state.dishes
            const order = action.payload === 'default' ? state.dishes
                : action.payload === 'low' ? all.sort(function (a, b) {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0;
                }) : action.payload === 'high' ? all.sort(function (a, b) {
                    if (a.price > b.price) return -1;
                    if (a.price < b.price) return 1;
                    return 0;
                }) : action.payload === 'lowR' ? all.sort(function (a, b) {
                    if (a.rating > b.rating) return 1;
                    if (a.rating < b.rating) return -1;
                    return 0;
                }) : all.sort(function (a, b) {
                    if (a.rating > b.rating) return -1;
                    if (a.rating < b.rating) return 1;
                    return 0;
                })
            state.dishes = order
        })
        builder.addCase(sortBy.fulfilled, (state, action) => {
            const all = state.order2
            const order = action.payload === 'default' ? state.order2
                : action.payload === 'low' ? all.sort(function (a, b) {
                    if (a.final_price > b.final_price) return 1;
                    if (a.final_price < b.final_price) return -1;
                    return 0;
                }) : all.sort(function (a, b) {
                    if (a.final_price > b.final_price) return -1;
                    if (a.final_price < b.final_price) return 1;
                    return 0;
                })
            state.order2 = order
        })
        builder.addCase(getMenuFilter.fulfilled, (state, action) => {
            const all = state.dishFiltered
            const filtered = action.payload === 'all' ? all : all.filter((d) => d.category?.includes(action.payload))
            state.dishes = filtered
        })
        builder.addCase(searchBar.fulfilled, (state, action) => {
            const search = state.dishFiltered
            const filterSearch = search.filter((e) => e.description?.toLowerCase().includes(action.payload.toLowerCase()) || e.name?.toLowerCase().includes(action.payload.toLowerCase()))
            state.dishes = filterSearch
        })
        builder.addCase(searchOrder.fulfilled, (state, action) => {
            const search = state.order2Filter
            const filterSearch = search.filter((e) => e.order_number?.includes(action.payload))
            state.order2 = filterSearch
        })
        builder.addCase(searchDate.fulfilled, (state, action) => {
            const search = state.order2Filter
            const filterSearch = search.filter((e) => e.timestamps?.slice(0, 10).includes(action.payload))
            state.order2 = filterSearch
        })
        builder.addCase(addDishCart.fulfilled, (state, action) => {
            const allDish = state.dishes
            const addDish = allDish.find((e) => e._id === action.payload)
            const dishInCart = state.cart.find((i) => i._id === addDish._id)
            return dishInCart ? {
                ...state,
                cart: state.cart.map((el) =>
                    el._id === addDish._id
                        ? {
                            ...el, quantity: el.quantity + 1
                        } : el)
            }
                : {
                    ...state,
                    cart: [...state.cart, { ...addDish, quantity: 1 }]
                }

        })
        builder.addCase(addDishCartPost.fulfilled, (state, action) => {
            const id = action.payload
            return {
                ...state,
                cartPost: [...state.cartPost, id]
            }
        })
        builder.addCase(deleteOneDish.fulfilled, (state, action) => {
            const deleteDish = state.cart.find((e) => e._id === action.payload)
            return deleteDish.quantity > 1 ? {
                ...state,
                cart: state.cart.map((el) =>
                    el._id === action.payload
                        ? { ...el, quantity: el.quantity - 1 }
                        : el)
            } : {
                ...state,
                cart: state.cart.filter((el) => el._id !== action.payload)
            }
        })
        builder.addCase(deleteAllDish.fulfilled, (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((e) => e._id !== action.payload)
            }
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload
        })
        builder.addCase(getWaiters.fulfilled, (state, action) => {
            const all = state.order2Filter
            const f = action.payload === 'all' ? state.order2Filter : all.filter((e) => e.waiter?.includes(action.payload))
            state.order2 = f
        })
    }
})

export const { clearCart, cleanDetail, clearCartPost, cleanOrderId } = menuSlice.actions

export default menuSlice.reducer