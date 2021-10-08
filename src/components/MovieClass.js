import { Component } from "react";


class MovieClass extends Component{
 constructor(){
     super();
     this.state = { Movies: [] };
    }
   async getMovie() {

       fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=w3K0RU7Q4hQ1kGkG89imF6dfzI2SwOA7")
           .then((response) => {
               
               return response.json();
           })
           .then((movies) => {
               this.setState({ Movies: movies.results });
           });
    }
    componentDidMount() {
        this.getMovie();    
    }
    render() {
        return (
            <>
                {this.state.Movies.map((movie) => {
                    return (
                        <div className="container">
                            <h2 key={movie.id}>{movie.display_title}</h2>
                            <h3>{movie.headline}</h3>
                            <p>{movie.byline}</p>
                            <em>{movie.critics_pick}</em>
                        </div>
                    );
                })}
            </>
        );
    }
}

export default MovieClass;