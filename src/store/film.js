import { Store } from "../core/cho";

const store = new Store({
    searchText: '',
    page: 1,
    pageMax: 1,
    films: []
})

export default store
export const searchFilms = async page => {
    store.state.page = page
    if(page === 1){
        store.state.films = []
    }
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults } = await res.json()
    store.state.films = [
        ...store.state.films,
        ...Search
    ]
    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
}