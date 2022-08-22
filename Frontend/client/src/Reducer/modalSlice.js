import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const modalSlice=createSlice({
    name:'modal',
    initialState:{
        modal:false
    },
    reducers:{
        changeModal:(state,action)=>{
            if(state.modal===true){
                state.modal=false
            }
            else{
                state.modal=true
            }
        }
    }
})

export const {changeModal}=modalSlice.actions

export default modalSlice.reducer