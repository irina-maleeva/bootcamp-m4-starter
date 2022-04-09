import React, { Component } from 'react';
import './MovieItem.css';
import { connect } from "react-redux";
import { addToFavorites } from "../../redux/actions";

const mapDispatchToProps = dispatch => ({
    addToFavorites: (moviesFavorites) => dispatch(addToFavorites(moviesFavorites))
});

class MovieItem extends Component {

    onClickHandler = (e) => {
        const movieToSave = {
            imdbID: this.props.imdbID,
            Title: this.props.Title,
            Year: this.props.Year
        }
        this.props.addToFavorites(movieToSave);
    }

    render() {
        const {Title, Year, Poster} = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button 
                        type="button" 
                        className="movie-item__add-button"
                        onClick={this.onClickHandler}>
                    Добавить в список
                    </button>
                </div>
            </article>
        );
    }

}

export default connect(null, mapDispatchToProps)(MovieItem);