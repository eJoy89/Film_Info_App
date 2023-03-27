import { Component } from "../core/cho";
import aboutStore from '../store/about';

export default class Footer extends Component{
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render() {
        const { github, notion } = aboutStore.state
        this.el.innerHTML = /* html */ `
            <div>
                <a href="${github}">
                    Github Repository
                </a>
            </div>
            <div>
                <a href="${notion}">
                    ${new Date().getFullYear()}
                    Cho
                </a>
            </div>
        `
    }

}