import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isAuth:false
}

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        authenticate:(state,action)=>{
          state.isAuth=action.payload; 
        }
    }
})

export const {authenticate}=userSlice.actions;
export default userSlice.reducer;
