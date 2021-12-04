import React,{useState} from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        // const temp = 'terminator'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1`
        

        try {            
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setMovies(data.results)
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className='label' htmlFor="query">Movie Name</label>
                <input 
                    className='input' 
                    type="text" 
                    name="query" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="ie. Jurrassic Park" 
                />
                <button className='button' type="submit">search</button>

            </form>

            <div className="card-list">
                { movies.map( movie => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        </>
    )
}