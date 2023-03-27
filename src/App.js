import { Component } from "./core/cho";
import Header from './components/Header'

export default class App extends Component{
    render() {
        const Head = new Header().el
        const routerView = document.createElement('router-view')

        this.el.append(
            Head,
            routerView
        )
    }
}