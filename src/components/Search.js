import { Component } from "../core/cho";
import filmStore, { searchFilms } from '../store/film'

export default class Search extends Component{
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */ `
          <input value="${filmStore.state.searchText}" placeholder="Enter the film title to search!" />
          <button class="btn btn-primary">
            Search!
          </button>
        `


        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            filmStore.state.searchText = inputEl.value
        })
        inputEl.addEventListener('keydown', event => {
            if(event.key === "Enter" && filmStore.state.searchText.trim()){
                searchFilms(1).then(() => console.log('keydown Check!'))
            }
        })

        const btnEl = this.el.querySelector('.btn')
        btnEl.addEventListener('click', () => {
            if(filmStore.state.searchText.trim()){
                searchFilms(1).then(() => console.log('click Check!'))
            }
        })
    }
}