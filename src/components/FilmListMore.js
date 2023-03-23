import { Component } from "../core/cho";
import filmeStore, { searchFilms } from '../store/film'

export default class FilmListMore extends Component{
    constructor() {
        super({
            tagName: 'button'
        })
        filmeStore.subscribe('pageMax', () => {
            const { page, pageMax } = filmeStore.state
            if(pageMax > page) {
                // 총 페이지의 수가, 현재 페이지보다 많으면 더 보이기 버튼에 hide를 지워 버튼을 보이게
                this.el.classList.remove('hide')
            } else {
                this.el.classList.add('hide')
            }
        })
    }
    render(){
        this.el.classList.add('btn', 'view-more', 'hide')
        this.el.textContent = 'View more...'

        this.el.addEventListener('click', async () => {
            await searchFilms(filmeStore.state.page + 1)
        })
    }

}