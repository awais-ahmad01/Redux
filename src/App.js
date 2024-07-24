import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addMovie } from "./store/movies";

import { fetchUsers, setType } from "./store/users";

const App = ()=> {

  const movies = useSelector((state) => state.movies.list);  //useSelector used to access the data in redux store

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();    //useDispatch used to dispatch the action(trigger the action)

  // console.log(movies)


  // useEffect(()=>{
  //   dispatch(fetchUsers())
  //   .unwrap()         
  //   .then((response)=>{
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // })




  return(
    <>

        <h2>Movies:</h2>
       { movies ? 

          movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))
        :null

       }

       <button onClick={()=> dispatch(addMovie({id:3, title: 'abcd'}))}>Add Movie</button>     
       {/* here dispatch  is just a function which calls another function */}

       <h2>User Type: {users.type}</h2>

       <button onClick={()=> dispatch(setType('Admin'))}>Add User Type</button>


       <div>{users.loading ? "loading" : null}</div>
      <ul>{users ? users.users.map((user) => 
        <li key={user.id}>{user.name}</li>) 
      : null}</ul>


       {/* <button onClick={()=> dispatch(fetchUsers())}>Get Users</button> */}
    </>
  )
}

export default App;
