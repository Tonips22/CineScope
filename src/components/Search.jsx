import { useEffect, useState } from 'react';
import './Search.css';
// import { popular } from '../API/auth.jsx'

export function Search ({animation = true}){
    const input = document.querySelector(".input")

    const [findName, setFindName] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (event) =>{
        setFindName(event.target.value)
    }

    const addResults = () => {
        const hero = document.querySelector(".hero");
        results.forEach(result => {
            const text = `<img src="https://image.tmdb.org/t/p/w500${result.poster_path}">`
            hero.insertAdjacentHTML("afterend", text);
        });
    }

    console.log(results);


    const getMovie = () =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZmYwMjA0OGFkZjJkZTZmZTAwNzFlZGVhMGI4NSIsInN1YiI6IjY2MDJhNzNlMGMxMjU1MDE2NTBkZTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uzg25v7KPAabW2ly4tdh8Wl0yZu_Lgo2n79C2Q4FiMw'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${findName}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(json => setResults(json.results));
    }

    useEffect(()=>{
        getMovie()
    }, [findName])


    return(
        <div className={`${animation ? "search animate-fade-in-up" : ""} flex flex-row items-center justify-between bg-dark rounded-3xl w-1/2 px-8 py-4 gap-2 transition-shadow`}>
            <input onChange={handleChange} type="text" placeholder="Introduzca aquí una película" className="input text-white outline-none bg-transparent w-full"/>
            <i onClick={addResults} className="fa-solid fa-magnifying-glass text-primary cursor-pointer"></i>
        </div>
    )
}