import { createSlice } from "@reduxjs/toolkit";

// createSlice is used to create reducers

export const moviesSlice = createSlice({   //this is a movies reducer
    name:'movies',
    initialState:{
        list:[
            {id:1, title:'Pulp fiction'},
            {id:2, title:'Rambo'}
        ]
    },  //this will be the initial state if application starts 
    reducers:{
        // addMovie: (state) => {
        //     const newMovie = {
        //       id: state.list.length + 1, // generate new id based on the current length
        //       title: 'New Movie'
        //     };
      
        //     state.list.push(newMovie); // use push to add the new movie to the array
        //   }  //chatgpt

        addMovie:(state, action)=>{
            // const newMovie = {
            //     id:3, title: 'abcd'
            // }

            // state.list = [...state.list, newMovie]

            state.list = [...state.list, action.payload]       //payload is just an argument fromwhere we get data
        }
          


    }
})

export const {addMovie} = moviesSlice.actions;

export default moviesSlice.reducer;