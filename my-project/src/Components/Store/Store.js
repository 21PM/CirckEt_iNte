import {configureStore} from "@reduxjs/toolkit"
import { usersReducers } from "../Slice/Slice";

const store = configureStore({
    reducer:{
        users:usersReducers
    }
})


export default store;