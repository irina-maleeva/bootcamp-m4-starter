import React, { Component } from 'react';
import './Favorites.css';
import { API_URL_LIST } from "../../config";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromFavorites } from "../../redux/actions"

const mapStateToProps = (state) => {
    return {
        moviesFavorites: state.moviesFavorites,
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
 });

class Favorites extends Component {
   
    state = {
        listCreated: false,
        title: "",
        listId: null,
        disabled: true,
    }

    createListHandler = (e) => { 
        e.preventDefault();
        this.setState({listCreated: true});

        const object = {
            title: this.state.title,
            movies: this.props.moviesFavorites.map((movie) => {return movie.imdbID})
        };

        fetch(`${API_URL_LIST}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
            })
            .then(res => res.json())
            .then(data => {
                this.setState({listId: data.id});
            })
            .catch((error) => {
                console.log("error", error);
            })
        };

    favoritesSearchLineChanger = (e) => {
        this.setState({
            title: e.target.value,
            disabled: false,
        });
    }

    render() { 
        return (
            <div className="favorites">
                <input 
                    placeholder="Напишите название для списка" 
                    value={this.state.title} 
                    onChange={this.favoritesSearchLineChanger} 
                    className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.moviesFavorites.map((item) => {
                        return <li key={item.imdbID}>
                                    {item.Title} ({item.Year}) 
                                    <button onClick={() => this.props.deleteFromFavorites(item.imdbID)}> 
                                    X 
                                    </button>
                                </li>;
                    })}
                </ul>
                {this.state.listCreated ? 
                    <button 
                        type="button" 
                        className="link_to_list"> 
                        <Link to={`/list/${this.state.listId}`}>
                        Перейти к списку 
                        </Link>
                    </button>
                    :
                    <button 
                        type="button" 
                        disabled={this.state.disabled} 
                        onClick={this.createListHandler} 
                        className="favorites__save " > 
                    Сохранить список 
                    </button>
                }
            </div>
        );
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);