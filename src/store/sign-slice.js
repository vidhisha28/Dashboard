import { createSlice } from "@reduxjs/toolkit";

const signin = createSlice({
    name:'sign',
    initialState:{
        head:'Sign In',
        subHead:'Sign In to Your Account',
        mode:'in',
        data:{email:null,password:null},
        permission:null,
        upDisplay:false,
        inDisplay:false,
    },
    reducers:{
        changeHeadPara(state,action){
            state.head =action.payload.head;
            state.subHead = action.payload.subHead;
            state.mode = action.payload.mode;
    },
    changeAuthData(state,action){
        state.data.email = action.payload.email;
        state.data.password = action.payload.password;
    },
    givePermission(state,action){
        state.permission = action.payload.permission;
    },
    changeDisplay(state,action){
        state.upDisplay = action.payload.display;
    },
    changeinDisplay(state,action){
        state.inDisplay = action.payload.inDisplay;
    }
}
})

export default signin;
export const signinActions = signin.actions;