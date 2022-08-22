import React, { useEffect } from 'react'
import Detail from '../Detail/Detail'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card'
import {useState} from 'react'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {getMenu} from '../../Reducer/menuSlice'
import InfiniteScroll from 'react-infinite-scroll-component';
import {modal} from '../../Reducer/modalAction'
//import './Menu.css'

export default function Menu() {
  const dispatch = useDispatch()
  const { dishes } = useSelector(state => state.dishes)
  // const page = 1
  const [currentPage, setCurrentPage] = useState(1)
  const [dishesPerPage, setDishesPerPage] = useState(6)
  const indexOfLastGame = currentPage * dishesPerPage // => 3
  const indexOfFirstGame = indexOfLastGame - dishesPerPage // => 0
  const currentDishes = dishes.slice(indexOfFirstGame, indexOfLastGame)
  //const [currentDishes, setCurrentDishes] = useState(dishes.slice(indexOfFirstGame, indexOfLastGame))
  const [page, setPage] = useState(1)
  const modelo = useSelector(state => state.modal)

  

  useEffect (()=> {
    dispatch(getMenu())
  }, [dispatch])


  function moreData (){
    const a = currentDishes
    setDishesPerPage(dishesPerPage + 1)
    //currentDishes.push(a)  
  }
  return ( 
    <div >
      { modelo.modal===true ?
      <Detail/> :
      <NavBar />
      }

      <div className='max-w-full lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 xs:flex-col mb-20 mt-28 ml-10 mr-10'> 
      {/* <div className='grid grid-cols-3 mb-52 mt-28 ml-10 mr-14 max-w-5xl' > */}
        
        {currentDishes && currentDishes.map((p, i) => {
        return (
          
          <InfiniteScroll key={i} dataLength={currentDishes.length} next={moreData} hasMore={true} endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
            
          }>
            
          <div className='mt-5' key={i} >
          
            <Card
            _id={p._id}
            name={p.name}
            category={p.category}
            description={p.description}
            image={p.image}
            price={p.price}
            // // rating={p.rating}
            />
            
          </div>
          </InfiniteScroll>
          
          )
          })  
        }
        
      </div>
  <Footer />
  </div>
)
}
