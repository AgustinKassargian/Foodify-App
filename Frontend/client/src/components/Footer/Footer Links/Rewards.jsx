import React from 'react'
import './Rewards.css'
import { Link } from 'react-router-dom'
export default function Rewards() {
    return(
        <div className='container-rewards'>
            <h1>REWARDS</h1>
            <Link to='/'><button>Volver</button></Link>
        </div>
    )
}