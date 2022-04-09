export function getSearchResults(searchResults) {
    return {
        type: "GET_SEARCH_RESULTS",
        payload: {
            searchResults
        }
    }
}

export function addToFavorites(movie) {
    return {
        type: "ADD_TO_FAVORITES",
        payload: {
            movie: movie
        }
    }
}

export function deleteFromFavorites(id) {
    return {
        type: "DELETE_FROM_FAVORITES",
        payload: {
            id
        }
    }
}