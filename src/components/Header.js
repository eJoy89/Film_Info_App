import { Component } from "../core/cho";
import aboutStore from '../store/about';

export default class Header extends Component{
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/'
                    },

                    {
                        name: 'Flim',
                        href: '#/film?id=tt4520988'
                    },

                    {
                        name: 'About',
                        href: '#/about'
                    }
                ]
            }
        })

        window.addEventListener('popstate', () => {
            this.render()
        })
    }

    render() {
        const { photo } = aboutStore.state

        this.el.innerHTML = /* html */ `
            <a 
                href='#/' class="logo">
                <span>OMDbAPI</span>    
                .COM
            </a>

            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        const href = menu.href.split('?')[0]
                        const hash = location.hash.split('?')[0]
                        const isActive = href === hash
                        return /* html */ `
                            <li>
                                <a 
                                href="${menu.href}"
                                class="${isActive ? 'active' : ''}"
                                >
                                    ${menu.name}
                                </a>
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="main_logo">
                <img src="${photo}" alt="main_logo">
            </a>
        `
    }
}