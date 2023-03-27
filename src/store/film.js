import { Store } from "../core/cho";

const store = new Store({
    searchText: '',
    page: 1,
    pageMax: 1,
    films: [],
    film: {},
    loader: false,
    message: 'Search for the film title!'
})

export default store
export const searchFilms = /* async */ page => {
    store.state.loader = true
    store.state.page = page
    if(page === 1){
        store.state.films = []
        store.state.message = ''
    }

    // try {
    //     const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
    //     const { Search, totalResults, Response, Error } = await res.json()
    //     if(Response === 'True'){
    //         store.state.films = [
    //             ...store.state.films,
    //             ...Search
    //         ]
    //         store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    //     } else {
    //         store.state.message = 'Film not Found!'
    //     }
    // } catch (error) {
    //     console.log('searchFilm eror', error)
    // } finally {
    //     // loading
    //     store.state.loader = false
    // }



    return fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
            .then(res => res.json())
            .then(({ Search, totalResults, Response, Error }) => {
                if(Response === 'True'){
                    store.state.films = [
                        ...store.state.films,
                        ...Search
                    ]
                    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
                } else {
                    store.state.message = 'Film not Found!'
                }
            })
            .catch(error => console.log('searchFilm eror', error))
            .finally(() => store.state.loader = false)
}

export const getFilmDetails = async id => {
    try{
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
        store.state.film = await res.json()
    } catch (error) {
        console.log('searchFilm eror', error)
    }
}