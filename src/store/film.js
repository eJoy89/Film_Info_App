import { Store } from "../core/cho";

const store = new Store({
    searchText: '',
    page: 1,
    films: []
})

export default store
export const searchFilms = async page => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
    const json = await res.json()
    console.log(json)
}