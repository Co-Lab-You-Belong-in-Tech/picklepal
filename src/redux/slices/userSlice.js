import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isAuth:false,
    isModalOpen:false
}

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        authenticate:(state,action)=>{
          state.isAuth=action.payload; 
        },
        displayModal:(state,action)=>{
            state.isModalOpen=action.payload
        }
    }
})

export const {authenticate,displayModal}=userSlice.actions;
export default userSlice.reducer;
