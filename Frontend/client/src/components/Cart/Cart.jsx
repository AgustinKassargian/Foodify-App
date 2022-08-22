
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getTable, putTable, getActualOrder,getMenu, addDishCart, deleteAllDish, deleteOneDish, getMenuFilter, clearCart, orderBy, addDishCartPost, clearCartPost, getOrder, getCategories} from '../../Reducer/menuSlice'
import {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import {title, btnRemove, btnAdd, imgCart, btnOrder, selectBox, selectTitle } from './FunctionCart'
import {conteinerCard, imgCard, insideConteinerCard, titleCard, textCard} from './FunctionCart'
import logo from '../../utils/LogoMain.png'
import ReactDOM from "react-dom"
import {postOrder, putOrder} from '../../Reducer/orderAction'
import Loading from '../Loading/Loading'
import { postEmail } from '../../Reducer/menuActions';
import { Link } from 'react-router-dom';

const Swal = require('sweetalert2')


export default function Cart({user}) {
    const dispatch = useDispatch()
    const { dishes } = useSelector(state => state.dishes)
    const { categories } = useSelector(state => state.categories)
    const { cart } = useSelector(state => state.cart)
    const { cartPost } = useSelector(state => state.cartPost)
    const { order }  = useSelector(state => state.order)
    const { actualOrder }  = useSelector(state => state.actualOrder)
    const { table } = useSelector(state => state.table)
    const idTable = localStorage.getItem('tableID')
    const [currentPage, setCurrentPage] = useState(1)
    const [dishesPerPage, setDishesPerPage] = useState(6)
    const indexOfLastDish = currentPage * dishesPerPage // => 3
    const indexOfFirstDish = indexOfLastDish - dishesPerPage // => 0
    const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish)
    const [currentState, setCurrentState] = useState('menu')
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        comments: ''
    })
    const tableName = table.filter(e=> e._id === idTable)
    const[inputMail, setInputMail] = useState({
        email: ''
    })


function handleOrdered(){
    if(currentState !== 'menu') setCurrentState('menu')
    else setCurrentState('orden')
}

    useEffect (()=> {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        dispatch(getMenu())
        dispatch(getCategories())
        dispatch(getTable())
        dispatch(getOrder(idTable))
        dispatch(getActualOrder(idTable))
    }, [])

function sendEmail(e) {
    e.preventDefault()
    dispatch(postEmail(inputMail))
}

function handleChangeEmail(e) {
    e.preventDefault()
    setInputMail({...inputMail, [e.target.name]: e.target.value})
}

//*----------* BOTONES CARRITO *-----------*
function handleClickRemove(_id, all = false) {
    all ? dispatch(deleteAllDish(_id))
    : dispatch(deleteOneDish(_id))
    handleAmount()
}

function handleChangeComments(e) {
    e.preventDefault()
    setInput({...input, [e.target.name]: e.target.value})
}

function handleAmount(){
    setAmount(sumaTotal())
}

function handleCheckout(e){
    e.preventDefault()
    if(order.length < 1) {
        //alert('Your cart is empty')
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Your cart is empty!',
            showConfirmButton: false,
            timer: 1400,
            background:'#f5f3f3'
          })
    }
    else{
        setCurrentState('checkout')
    }
}
function handleCashCheckout(e){
    e.preventDefault()
    if(order.length < 1) 
    {
        //alert('Your cart is empty')
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Your cart is empty!',
            showConfirmButton: false,
            timer: 1400,
            background:'#f5f3f3'
          })
    }
    else{
        localStorage.setItem('orderID', actualOrder[0]._id)  
        //const payload = {actual_state: "finalized"}
        dispatch(putOrder({actual_state: "finalized", final_price: 0 }))
        dispatch(putTable({actual_state: 'available'}))
        // alert('La orden fue abonada')
        Swal.fire({
            title: 'Order paid out succesfully',
            icon: 'success',
            width: '40%',
            padding: '1rem',
            backdrop: false,
            position: 'center',
            showCancelButton: true,
            confirmButtonText: 'Waiter',
            cancelButtonText: "Order +",
            cancelButtonColor: '#e9943e',
            confirmButtonColor: '#7f7d83',

        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/waiter";
            }
        })

    }
}

function cleanCart() {
    dispatch(clearCart())
    setAmount(0)
    setCurrentState('menu')
}

function handleOrder(e){
    e.preventDefault()
    dispatch(clearCartPost())
    const totalAmount = sumaTotal()
    if(cart.length < 1) 
        //alert('Your cart is empty')
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Your cart is empty!',
            showConfirmButton: false,
            timer: 1400,
            background:'#f5f3f3'
          })
    
    else if(order.length < 1){ /////agregueeeeeee---------------
        dispatch(postOrder({
            dishes: cartPost,
            final_price: Number(totalAmount),
            table: idTable,
            actual_state: 'pending',
            comments: input.comments,
            waiter: user.name + ' ' + user.lastname,
        }))
        dispatch(putTable({actual_state: 'busy'}))
        //alert('Tu orden fue despachada exitosamente!')
        Swal.fire({
            title: 'Order created succesfully',
            icon: 'success',
            width: '30%',
            padding: '1rem',
            backdrop: false,
            position: 'center',
            showCancelButton: true,
            confirmButtonText: 'Waiter',
            cancelButtonText: "Order +",
            cancelButtonColor: '#e9943e',
            confirmButtonColor: '#7f7d83',

        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/waiter";
            }
        })
    }   else {
        localStorage.setItem('orderID', actualOrder[0]._id)
        const payload = {
            dishes: cartPost,
            final_price: Number(totalAmount),
            comments: input.comments,
            // waiter: user.name + user.lastname
            }
        dispatch(putTable({actual_state: 'busy'}))
        dispatch(putOrder(payload))
        //alert('Tu orden fue actualizada exitosamente!')
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your order was successfully updated!',
            showConfirmButton: false,
            background:'#f5f3f3'
            //timer: 1500
          })
        window.location.reload()
        }
}

//*----------* BOTONES AÑADIR A CARRITO *-----------*
    
function handleClickAdd(_id){
    dispatch(addDishCart(_id))
    dispatch(addDishCartPost(_id))
    handleAmount()
}

function moreData (){
    const a = currentDishes
    setDishesPerPage(dishesPerPage + 1)
    //currentDishes.push(a)  
}

function sumaTotal(){
    let total = 0
    for(let i = 0; i < cart.length; i++){
    let e = cart[i].price
    let s = e * cart[i].quantity
    total = total + s }
    return total
}

function sumaTotalOrder(){
    let total = 0
    if(order[0] === undefined) return total 
    else {
        for(let i = 0; i < order.length; i++){
    let e = order[i].price
    total = total + e }
    return total
}
}

//*----------* FUNCIONES NAV BAR *-----------*

function handleOrderBy(e) {
        e.preventDefault()
        dispatch(orderBy(e.target.value))
}

function handleMenues(e) {
    e.preventDefault()
    dispatch(getMenuFilter(e.target.value))
}

//*----------*                    *-----------*

function handleCheckoutVolver(e){
    e.preventDefault()
    setCurrentState('menu')
    // setCurrentState(false)
}


//*----------* FUNCION PAYPAL *-----------*
function handleApprove(){
    //alert('La orden fue abonada!!')
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'order paid successfully!',
        showConfirmButton: false,
        timer: 1400,
        background:'#f5f3f3'
      })
    localStorage.setItem('orderID', actualOrder[0]._id)
    dispatch(putOrder({actual_state: "finalized", final_price: 0}))
    dispatch(putTable({actual_state: 'available'}))
    // setTimeout(()=>{
    //     handleReload()
    // }, 6000)

}
async function handleReload(){
    window.location.replace('/waiter')
}

function Paypal() {
    const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
        {
            amount: {
            value: sumaTotalOrder(),
                },
        },
        ],
    });
    };
    const onApprove = async (data, actions) => {
        //return actions.order.capture();
        const orderPaypal = await actions.order.capture();
        handleApprove()
    };
    
    return (
        <div>
        <h1>TOTAL AMOUNT: ${sumaTotalOrder()}</h1>
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        />
        </div>
    );
}

//*----------* FUNCION ORDEN DE MESA *-----------*


function HandleBackTable(){
    window.location.replace('/waiter')
} 



return (
    <div>
        { loading ? <Loading /> : user?.rol === 'admin' || user?.rol === 'waiter' ? 
    
    
    <div className='GRAN CONTAINER bg-gray-50 bg-cover min-h-screen  ' >
        <div className='nav-cart flex justify-start items-center bg-primary w-3/4 h-40 top-0 fixed z-10' >
            <img className='w-36 h-auto  ml-4 ' src={logo}></img>
            {/* <Link to={'/waiter'}><button className={selectBox}>Tables</button></Link> */}
            <button className={selectBox} onClick={HandleBackTable}>Tables</button>
            <button className={selectBox}onClick={handleOrdered}>Ordered</button>
            <button className={selectBox}onClick={handleOrdered}>Menu</button>
            <h2 className={selectTitle}>Order by </h2> 
        <select className={selectBox}  onChange={ (e) => {handleOrderBy(e)}}>
            <option value="default" hidden> Order </option>
            <option value="high"> High price </option>
            <option value="low"> Low price </option>
            <option value="highR"> High rating </option>
            <option value="lowR"> Low rating </option>
        </select>

            <h2 className={selectTitle}>Menu Type</h2>
            <select className={selectBox} onChange={handleMenues}>
                <option value='all'> All </option>
                {categories?.map((e, i) => {
                    return(
                        <option key={i} value={e.name}>{e.name}</option>
                    )
                })}
            </select>
        </div>

        {/* PANEL QUE MUESTRA EL CARRITO */}

        <div className='carrito border-l-4 border-gray-300 w-1/4 h-screen inset-y-0 right-0 bg-primary fixed overflow-auto'>
            <h1 className={title}>CART TABLE {tableName[0].table_number}</h1>                    
            {cart && cart.map((e, i)=>{
                return(
                    <div className='grid grid-cols-2 border-2 border-black mb-2 p-3 bg-gray-400/25' key={i}>
                        <p className={title}>{e.name}</p>
                        <p>${e.price} x {e.quantity} = ${e.price * e.quantity}</p>
                        <img className={imgCart} src={e.image} alt='not found'></img>
                        <div>
                        <button className={selectBox} onClick={() => handleClickRemove(e._id)}>Remove one</button>
                        <br/>
                        <button className={selectBox} onClick={() => handleClickRemove(e._id, true)}>Remove all</button>
                        <br />
                        </div>
                    </div>
                )
            })}
            <input className='my-3' type='text' placeholder='Comments' onChange={(e) => handleChangeComments(e)} name='comments' value={input.comments}></input>
            <div className='bg-gray-400/50 pb-4'>
                <div className={title}>TOTAL : $ {sumaTotal()}</div>
                <button className={selectBox} onClick={handleOrder}>ORDER</button>
                <button className={selectBox} onClick={cleanCart}>CLEAR CART</button> 
            </div> 
        </div> 

        {/* PANEL QUE MUESTRA TODOS LOS MENUES */}
        
        <div className='render-cart grid grid-cols-2  w-3/4  bottom-0 left-0 h-5/6 mt-44 overflow-hidden ml-6 '>
            {currentState === 'menu' ? currentDishes && currentDishes.map((p, i) => {
            return (
                <InfiniteScroll key={i} dataLength={currentDishes.length} next={moreData} hasMore={true} scrollThreshold="300px">
                    <div className={conteinerCard} key={i} onClick={() => handleClickAdd(p._id)}>
                        <img className={imgCard} src={p.image} alt='not found'></img>
                        {/* <button className={btnAdd} onClick={() => handleClickAdd(p._id)}>ADD TO CART</button> */}
                        <div className={insideConteinerCard}>
                            <p className={titleCard} name='name' value={p.name}>{p.name}</p>
                            <p className={title}>{p.category.length > 1 ? p.category.join(', '): p.category}</p>
                            <p className={textCard}>{p.description}</p>
                        </div>
                    </div> 
                </InfiniteScroll>
            )
            })  : currentState === 'orden' ? 
            <div> {order.length > 0 ? 
            <div><p className={title}>CURRENT ORDER OF TABLE {tableName[0].table_number} :</p>
            <button className={selectBox} onClick={handleCheckout}>CARD PAYMENT</button>
            <button className={selectBox} onClick={handleCashCheckout}>CASH PAYMENT</button> 
            <p className='text-textColor font-semibold ml-3 '>COMMENTS:</p>
            <div className='flex items-center ml-3 mt-4 bg-gray-200 rounded-lg w-[248px] h-20'>{actualOrder.map((e, i) => {
                return (
                    <p className='text-textColor ml-1 text-lg justify-start ' key={i}>{e.comments}</p>
                )
            })}</div> </div>  : <p className={title}>AWAITING FOR ORDER:</p> }

            {/* PANEL QUE MUESTRA TODAS LAS ORDENES */}

                    {order && order.map((p, i) => {
                        return (
                            <InfiniteScroll key={i} dataLength={currentDishes.length} next={moreData} hasMore={true} scrollThreshold="300px">
                                <div className={conteinerCard} key={i} >
                                <img className='img-cart w-44 h-44' src={p.image} alt='not found'></img>
                                    <div className={insideConteinerCard}>
                                        <p className={titleCard}  value={p.name}>{p.name}</p>
                                        <p className={title}>{p.category.length > 1 ? p.category.join(', '): p.category}</p>
                                        <p className={textCard}>{p.description}</p>          
                                    </div>
                                </div> 
                            </InfiniteScroll>
                    )
                })}
                </div> : 
                    <div >
                    SELECT THE METHOD OF PAYMENT
                    {Paypal()}
                    <input placeholder='Email' name='email' type='email' value={inputMail.email} onChange={(e) => {handleChangeEmail(e)}} ></input>
                    <button type='submit' onClick={sendEmail}>Send Email</button>
                    <button className={selectBox} onClick={handleCheckoutVolver}>Return</button>
            </div>
            }  

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