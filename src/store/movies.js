import { createSlice } from "@reduxjs/toolkit";

// createSlice is used to create reducers

export const moviesSlice = createSlice({   //this is a movies reducer
    name:'movie',
    initialState:{
        list:[
            {id:1, title:'Pulp fiction'},
            {id:2, title:'Rambo'}
        ]
    },  //this will be the initial state if application starts 
    reducers:{

    }
})

export default moviesSlice.reducer;