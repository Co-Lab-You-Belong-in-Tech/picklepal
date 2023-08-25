import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isAuth:false,
    isModalOpen:false,
    isInviteAccepted:false
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
        },
        displayAcceptedModal:(state,action)=>{
            state.isInviteAccepted=action.payload
        }
    }
})

export const {authenticate,displayModal,displayAcceptedModal}=userSlice.actions;
export default userSlice.reducer;
