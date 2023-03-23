import { Component } from "../core/cho";
import filmStore from '../store/film'
import FilmItem from "./FilmItem";

export default class FilmList extends Component{
    constructor() {
        super()
        filmStore.subscribe('films', () => {
            this.render()
        })
    }

    render() {
        this.el.classList.add('film-list')
        this.el.innerHTML = /* html */ `
            <div class="films"></div>
        `

        const filmEl = this.el.querySelector('.films')
        filmEl.append(
            ...filmStore.state.films.map(film => {
                return new FilmItem({
                    film: film
                }).el
            })
        )
    }
}