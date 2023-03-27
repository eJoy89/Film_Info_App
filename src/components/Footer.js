import { Component } from "../core/cho";

export default class Footer extends Component{
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render() {
        this.el.innerHTML = /* html */ `
            <div>
                <a href="https://naver.com">
                    Github Repository
                </a>
            </div>
            <div>
                <a href="https://daum.net">
                    ${new Date().getFullYear()}
                    Cho
                </a>
            </div>
        `
    }

}