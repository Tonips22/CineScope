import { useState, useEffect } from 'react'
import { Header} from './components/Header.jsx'
import { Footer } from './sections/Footer.jsx'
import { MovieCard } from './components/MovieCard.jsx'
import './App.css'

import { getMovies, getLatestMoviesReleases } from './API/services.js'

function App() {
  const searchBarInput = document.querySelector('.input')
  
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovie = async () => {
    const newTitle = searchBarInput.value.replace(/ /g, '+')
    const contentSection = document.querySelector('.content')
    if (newTitle === '') return

    setTitle(newTitle)
    const newMovies = await getMovies({ title: newTitle})
    setMovies(newMovies)

    searchBarInput.value = ''

    contentSection.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() =>{
    async function fetchLatestMovies() {
      const newMovies = await getLatestMoviesReleases();
      setMovies(newMovies);
    }

    fetchLatestMovies();
  }, [])
  
  
  const handleKeyDown = (e) => {
    if ( e.key === 'Enter') {
      searchMovie();
    }
  }
  

  return (
    <>
      <Header/>

      <section className="hero relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent from-50% to-[#242424]">
            <video src="./Dune.mp4" loop muted autoPlay className=' absolute top-0 left-0 w-full h-full -z-10 object-cover object-center '></video>
            
            <div className="search animate-fade-in-up flex flex-row items-center justify-between bg-dark rounded-3xl w-1/2 px-8 py-4 gap-2 transition-shadow">
              <input onKeyDown={handleKeyDown} type="text" placeholder="Introduzca una película..." className="input text-white outline-none bg-transparent w-full"/>
              <i onClick={searchMovie} className="fa-solid fa-magnifying-glass text-primary cursor-pointer hover:bg-primary hover:text-dark p-2 rounded-full transition-colors"></i>
          </div>

      </section>

      <section className="content p-4 res-content grid grid-cols-2 place-content-center min-h-full mx-0 my-auto gap-4 lg:grid-cols-3 ">

        {
          movies.map((movie) => {
            return (
              <MovieCard 
                key={movie.id}
                picture={movie.poster_path}
                rating={movie.vote_average}
                description={movie.overview}
                >
                {movie.title}
              </MovieCard>
            )
          })
        }
      </section>

      <Footer/>
    </>
  )
}

export default App
