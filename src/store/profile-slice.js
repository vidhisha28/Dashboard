import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:'profile',
    initialState:{
        status:false,
        infoStatus:'Basic',
        name:'',
        mail:'',
        tel:'',
        insta:'',
        youtube:'',
        submitStatus:false,
        loaction:null
    },
    reducers:{
        setStatus(state){
            state.status = !state.status;
        },
        setInfoStatus(state,action){
            state.infoStatus = action.payload.infoStatus;
        },
        setName(state,action){
            state.name = action.payload.name;
        },
        setMail(state,action){
            state.mail = action.payload.mail;
        },
        setTel(state,action){
            state.tel = action.payload.tel;
        },
        setInsta(state,action){
            state.insta = action.payload.insta;
        },
        setYoutube(state,action){
            state.youtube = action.payload.youtube;
        },
        setSubmitStatus(state){
            state.submitStatus = true;
        },
        setLocation(state,action){
            state.loaction=action.payload.location;
        }
    }
});

export default profileSlice;
export const profileAction = profileSlice.actions;
