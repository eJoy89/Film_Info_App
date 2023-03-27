import { Component } from "../core/cho";

export default class NotFound extends Component{
    render() {
        this.el.classList.add('container', 'not_found')
        this.el.innerHTML = /* html */ `
            <h1>
                Sorry...<br>
                Page Not Found
            </h1>
        `
    }
}