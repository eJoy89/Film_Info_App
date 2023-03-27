import { Component } from "./core/cho";
import Header from './components/Header';
import Footer from './components/Footer'

export default class App extends Component{
    render() {
        const Head = new Header().el
        const Foot = new Footer().el
        const routerView = document.createElement('router-view')

        this.el.append(
            Head,
            routerView,
            Foot
        )
    }
}