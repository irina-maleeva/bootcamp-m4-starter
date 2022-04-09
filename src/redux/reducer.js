const initialState = {
    movies: [],
    moviesFavorites: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_SEARCH_RESULTS":
            return { ...state, movies: action.payload.searchResults };
            break;

        case "ADD_TO_FAVORITES":
            if (state.moviesFavorites.find(item => item.imdbID === action.payload.movie.imdbID)) return state;
            return {
                ...state, 
                moviesFavorites: [...state.moviesFavorites, action.payload.movie]
            }
        case "DELETE_FROM_FAVORITES":
            const moviesFavoritesCopy = [...state.moviesFavorites];
            const newArray = state.moviesFavorites.filter((item) => item.imbdID !== action.payload.moviesFavoritesCopy);
            return {
                ...state,
                moviesFavorites: newArray
            }
        default:
            return state;
    }
}

export default reducer;