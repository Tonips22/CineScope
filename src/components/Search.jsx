import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Search.css';
import { FilmCard } from './FilmCard.jsx';

export function Search ({animation = true}){
    const input = document.querySelector(".input")

    const [findName, setFindName] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (event) =>{
        let value = event.target.value;
        value = value.replace(/ /g, "+");
        setFindName(event.target.value)
    }

    const scrollToResults = () => {
        const content = document.querySelector(".res-content");
        content.scrollIntoView();
    }

    const addResults = () => {
        getMovie();
        scrollToResults();
    }

    useEffect(() => {
        const content = document.querySelector(".res-content");
        const resultsComponents = results.map(result => {
            return <FilmCard
                description={result.overview}
                rating={result.vote_average}
                picture={result.poster_path}
            >{result.title}
            </FilmCard>
        });

        ReactDOM.render(resultsComponents, content);
    }, [results]);

    const getMovie = () =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZmYwMjA0OGFkZjJkZTZmZTAwNzFlZGVhMGI4NSIsInN1YiI6IjY2MDJhNzNlMGMxMjU1MDE2NTBkZTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uzg25v7KPAabW2ly4tdh8Wl0yZu_Lgo2n79C2Q4FiMw'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${findName}&include_adult=false&language=es-ES&page=1`, options)
            .then(response => response.json())
            .then(json => setResults(json.results));
    }


    return(
        <div className={`${animation ? "search animate-fade-in-up" : ""} flex flex-row items-center justify-between bg-dark rounded-3xl w-1/2 px-8 py-4 gap-2 transition-shadow`}>
            <input onChange={handleChange} type="text" placeholder="Introduzca una película" className="input text-white outline-none bg-transparent w-full"/>
            <i onClick={addResults} className="fa-solid fa-magnifying-glass text-primary cursor-pointer hover:bg-primary hover:text-dark p-2 rounded-full transition-colors"></i>
        </div>
    )
}