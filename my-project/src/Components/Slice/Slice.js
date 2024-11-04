import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"users",
    initialState:{
        isUserLoggedIn:false,
    },
    reducers:{
        setisUserLoggedIn:(state,action)=>{
            state.isUserLoggedIn = action.payload
        }
    }
})

export const {setisUserLoggedIn} = userSlice.actions;
export const usersReducers = userSlice.reducer;

