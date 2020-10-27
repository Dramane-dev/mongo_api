import React from 'react'
import axios from 'axios';

class DisplayMovies extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3030/movies`)
            .then(res => {
                const movies = res.data.result;
                console.log(movies)
                this.setState({ movies });
            });
    }
    render() {
        return (
            <div className="moviesList">
                <h1>All Movies : </h1>
                { this.state.movies.map((movie, index) => (
                    <article key={index}>
                        <p>Title : {movie.title}</p>
                        <p>Duration : {movie.duration}</p>
                    </article>
                ))}
            </div>
        );
    }
    
}

export default DisplayMovies
