import { Component } from "../core/cho";

export default class FilmItem extends Component{
    constructor(props){
        super({
            props,
            tagName: 'a'
        })
    }
    render(){
        const { film } = this.props

        this.el.setAttribute('href', `#/file?if=${film.imdbID}`)
        this.el.classList.add('film')
        this.el.style.backgroundImage = `url(${film.Poster})`
        this.el.innerHTML = /* html */ `
            <div class="info">
                <div class="year">
                    ${film.Year}
                </div>
                <div class="title">
                    ${film.Title}
                </div>
            </div>
        `
    }
}