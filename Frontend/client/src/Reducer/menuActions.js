import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const postNewPost = createAsyncThunk(
  "post/fetchPostToSave",
  async (payload) => {
    try {
      if(window.location.href.slice(0,16) !== 'http://localhost'){
      return await axios.post('https://henryfinalproyect.herokuapp.com/api/dish', payload)
      } else {
        return await axios.post('http://localhost:4200/api/dish', payload)
      }
    } catch (error) {
      console.log('Error -----> ', payload)
    }
  }
);
export const putDish=createAsyncThunk('dish/putDish',
async(payload)=>{
    try {if(window.location.href.slice(0,16) !== 'http://localhost'){
      const id = localStorage.getItem('dishEditID')
      return await axios.put(`https://henryfinalproyect.herokuapp.com/api/dish/${id}`,payload)
  }else{
    const id = localStorage.getItem('dishEditID')
      return await axios.put(`http://localhost:4200/api/dish/${id}`,payload);
  }
    } catch {throw new Error('Ambas rutas fallaron')}
  }

)

export const postNewCategory = createAsyncThunk(
  "post/PostNewCategory",
  async (payload) => {
    if(window.location.href.slice(0,16) !== 'http://localhost'){
    return await axios.post('https://henryfinalproyect.herokuapp.com/api/category', payload);
    } else {
      return await axios.post('http://localhost:4200/api/category', payload);
    }
  }
); 

export const tableId = createAsyncThunk('dish/dishId',
    async(_id) => {
        try{
            if(window.location.href.slice(0,16) !== 'http://localhost'){
                const res = (await axios.get(`https://henryfinalproyect.herokuapp.com/api/table/${_id}`)).data
                return res
            } else {
            const res = (await axios.get(`http://localhost:4200/api/table/${_id}`)).data
                return res    
            }
        }catch {throw new Error('Ambas rutas fallaron')}
    })


    export const postNewReview = createAsyncThunk(
      "post/postNewReview",
      async (payload) => {
        if(window.location.href.slice(0,16) !== 'http://localhost'){
        return await axios.post('https://henryfinalproyect.herokuapp.com/api/review', payload);
        } else {
          return await axios.post('http://localhost:4200/api/review', payload);
        }
      }
    );

    export const postEmail = createAsyncThunk(
      "email/postEmail",
      async (payload) => {
        if(window.location.href.slice(0,16) !== 'http://localhost'){
        return await axios.post('https://henryfinalproyect.herokuapp.com/api/email', payload);
        } else {
          return await axios.post('http://localhost:4200/api/email', payload);
        }
      }
    );

    export const postNewTable = createAsyncThunk(
      "post/postNewTable",
      async (payload) => {
        try {
          if(window.location.href.slice(0,16) !== 'http://localhost'){
          return await axios.post('https://henryfinalproyect.herokuapp.com/api/table', payload)
          } else {
            return await axios.post('http://localhost:4200/api/table', payload)
          }
        } catch (error) {
          console.log('Error -----> ', payload)
        }
      }
    );