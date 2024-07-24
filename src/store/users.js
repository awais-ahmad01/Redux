import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const fetchUsers = createAsyncThunk(    //thunk is a third party redux library used to create an async function/action
    'users/fetchUsers',   //where we use it (like users reducer)
    // async (obj, thunkApI)=>{
        async(obj,{ rejectWithValue, fulfillWithValue })=>{

         // console.log(thunkAPI.getState())
        // thunkAPI.dispatch(testAsyncDispatch())


        // const res = await axios.get('https://jsonplaceholder.typicode.com/users').then(
        //     (response) => response.data 
        // );
        // return res;

        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data;
            // return fulfillWithValue('something else')
        } catch(err){
            return rejectWithValue('Oop, try again later')
        }
    }
)



export const usersSlice = createSlice({
    name:'users',
    initialState:{
        type:'Guests',
        users:[], 
        loading:false
    },
    reducers:{
        setType: (state, action)=>{
            state.type = action.payload || 'Guests';
        },

        // getUsers: (state)=>{
        //     axios.get('https://jsonplaceholder.typicode.com/users')                      //axios is npm library which is used to make a request
        //     .then((response)=>{
        //         console.log(response.data);

        //         state.users = response.data;
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     })

        // }   //this will not work bcz it a synchronus and does not wait for response
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
           state.loading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            console.log(action.payload)
        })
    }
})

export const {setType} = usersSlice.actions;

export default usersSlice.reducer;