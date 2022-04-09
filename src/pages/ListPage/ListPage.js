import React, { Component } from 'react';
import './ListPage.css';
import {API_URL_LIST, API_KEY} from "../../config";

class ListPage extends Component {

    state = {
        movies: [],
        titleFavorites: "",
    }

    componentDidMount() {
        fetch(`${API_URL_LIST}/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies: data.movies,
                    titleFavorites: data.title,
        })

        const newArrayMovies = [];
        this.state.movies.map((item) => {
            fetch(`http://www.omdbapi.com/?i=${item}&apikey=${API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    newArrayMovies.push(data);
                    this.setState({movies: newArrayMovies})
            })         
        })
    })
}

    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.titleFavorites}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (                    
                            <li className="movie-item" key={item.imdbID}>
                                <img className="movie-item__poster" src={item.Poster}/>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">
                                  {item.Title} ({item.Year})      
                                </a>
                                <br/>
                            </li>                    
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;