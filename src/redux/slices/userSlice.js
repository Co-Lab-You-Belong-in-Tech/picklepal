import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isAuth:false,
    isModalOpen:false,
    isInviteAccepted:false,
    currentMatchDetails:{},
    showInvitationComp:false,
    emailInvite:'ok',
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
        },
        matchDetails:(state,action)=>{
            state.currentMatchDetails=action.payload
        },
        inviteMatch:(state,action)=>{
            state.showInvitationComp=action.payload
        },
        mailInvite:(state,action)=>{
            state.emailInvite=action.payload
        }
    }
})

export const {authenticate,displayModal,displayAcceptedModal,mailInvite,inviteDate,matchDetails,inviteMatch}=userSlice.actions;
export default userSlice.reducer;
