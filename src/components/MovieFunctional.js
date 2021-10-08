import { useState,useEffect } from "react";
import axios from "axios";

function MovieFunctional() {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {

        async function getMovie() {
            const res = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=w3K0RU7Q4hQ1kGkG89imF6dfzI2SwOA7");
            //  console.log(res.data);
            setMovies(res.data.results);
        }
        getMovie();

    }, []);
    
    return (
        <>
            {
                movies.map((movie) => {
                    return (
                            <div className="container2">
                                <h2 key={movie.id}>{movie.display_title}</h2>
                                <em>{movie.byline}</em>
                                <h3>{movie.headline}</h3>
                                <p>{movie.critics_pick}</p>
                            </div>

                            )
                        
                    
                })
            }
        </>
    )
}
export default MovieFunctional;