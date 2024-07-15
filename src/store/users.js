import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name:'users',
    initialState:{
        type:'Guests'
    },
    reducers:{
        setType: (state, action)=>{
            state.type = action.payload || 'Guests';
        }
    }
})

export const {setType} = usersSlice.actions;

export default usersSlice.reducer;