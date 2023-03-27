import { Component } from "../core/cho";
import filmStore from '../store/film'
import FilmItem from "./FilmItem";

export default class FilmList extends Component{
    constructor() {
        super()
        filmStore.subscribe('films', () => {
            this.render()
        })
        filmStore.subscribe('loader', () => {
            this.render()
        })
        filmStore.subscribe('message', () => {
            this.render()
        })
    }

    render() {
        this.el.classList.add('film-list')
        this.el.innerHTML = /* html */ `
            ${filmStore.state.message 
            // if message is true
            ? `<div class="message">${filmStore.state.message}</div>`
            // if message is false
            : '<div class="films"></div>'}
            <div class="loading hide"></div>
        `

        const filmEl = this.el.querySelector('.films')
        // filmEl가 있을때만 append
        filmEl?.append(
            ...filmStore.state.films.map(film => {
                return new FilmItem({
                    film: film
                }).el
            })
        )

        const loadingEl = this.el.querySelector('.loading')
        filmStore.state.loader 
        ? loadingEl.classList.remove('hide') 
        : loadingEl.classList.add('hide') 
    }
}