import { configureStore } from "@reduxjs/toolkit";

//redux has two main things (reducer and action) ..for example ..if we fetch some information from server then this is action
//and then this information goes to reducer and reduce perform some logic and then send final result to the store.
//for creating store , reducer is necessary but can be created without action


export const store = configureStore({
    reducer:{
        
    }
}
)