import { Component } from "../core/cho";
import filmStore, { getFilmDetails } from '../store/film'

export default class Film extends Component{
    async render(){
        await getFilmDetails(history.state.id)
        console.log(filmStore.state.film)
        const { film } = filmStore.state
        const highQuality = film.Poster.replace('SX300', 'SX700')

        this.el.classList.add('container', 'the_film')
        this.el.innerHTML = /* html */`
            <div style="background-image: url(${highQuality})" class='poster'></div>
            <div class="specs">
                <div class='title'>
                    ${film.Title}
                </div>
                <div class="labels">
                    <span>${film.Released}</span>
                    &nbsp;/&nbsp;
                    <span>${film.Runtime}</span>
                    &nbsp;/&nbsp;
                    <span>${film.Country}</span>
                </div>
                <div class="plot">
                    ${film.Plot}
                </div>
                <div>
                    <h3>Ratings</h3>
                    ${film.Ratings.map(rating => {
                        return `<p>${rating.Source} - ${rating.Value}</p>`
                    }).join('')}
                </div>
                <div>
                    <h3>Actors</h3>
                    <p>${film.Actors}</p>
                </div>
                <div>
                    <h3>Director</h3>
                    <p>${film.Director}</p>
                </div>
                <div>
                    <h3>Production</h3>
                    <p>${film.Production}</p>
                </div>
                <div>
                    <h3>Genre</h3>
                    <p>${film.Genre}</p>
                </div>
            </div>
        `
    }
}
