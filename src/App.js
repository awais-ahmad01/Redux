import { useSelector } from "react-redux";

const App = ()=> {

  const movies = useSelector((state) => state.movie.list)  //useSelector used to acces the data in redux store

  // console.log(movies)

  return(
    <>

        <h2>Movies:</h2>
       { movies ? 

          movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))
        :null

       }
    </>
  )
}

export default App;
