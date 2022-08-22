import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const postOrder = createAsyncThunk(
  "post/postOrder",
  async (payload) => {
    try{
      if(window.location.href.slice(0,16) !== 'http://localhost'){
        return await axios.post('https://henryfinalproyect.herokuapp.com/api/order', payload);
      } else {
        return await axios.post('http://localhost:4200/api/order', payload);
      }
  }catch {throw new Error('Ambas rutas fallaron')}
  }
);

export const putOrder = createAsyncThunk(
  "put/putOrder",
  async (payload) => {
    try{
      if(window.location.href.slice(0,16) !== 'http://localhost'){
        const id = localStorage.getItem('orderID')
        return await axios.put(`https://henryfinalproyect.herokuapp.com/api/order/${id}`, payload);
      } else {
        const id = localStorage.getItem('orderID')
        return await axios.put(`http://localhost:4200/api/order/${id}`, payload);
      }
  }catch {throw new Error('Ambas rutas fallaron')}
}
);

export const metricOrder = createAsyncThunk('order/getOrder',
    async () => {
        try{
            if(window.location.href.slice(0,16) !== 'http://localhost'){
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/order/`)).data
                const metric = res.map(e => e.dishes)
                //for(let i = 0; i<res.length; i++){}
                return metric
            } else {
                const res = (await axios.get(`http://localhost:4200/api/order/`)).data
                const metric = res.map(e => e.dishes)
                return metric
            }
        }catch {throw new Error('Ambas rutas fallaron')}
    }
)

